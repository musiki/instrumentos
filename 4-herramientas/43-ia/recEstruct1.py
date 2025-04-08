import faiss
import numpy as np
import os
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from .env file (if it exists)
load_dotenv()

# Get API key from environment variable or use the provided key as fallback
api_key = os.getenv("OPENAI_API_KEY", "<OOPENAIAPI>")

# Initialize OpenAI client
client = OpenAI(api_key=api_key)

# Base de datos de descripciones de sonidos
descriptions = [
    "Guitarra acústica tocando acordes.",
    "Sonido de lluvia cayendo en un tejado.",
    "Saxofón tocando una melodía jazz.",
    "Bajo eléctrico con distorsión."
]

# Obtención de embeddings de OpenAI
def get_embedding(text):
    try:
        response = client.embeddings.create(
            input=text,
            model="text-embedding-ada-002"
        )
        return np.array(response.data[0].embedding)
    except Exception as e:
        print(f"Error al obtener embedding: {e}")
        return None

# Construcción del índice FAISS
dimension = 1536  # Dimensión de OpenAI embeddings
index = faiss.IndexFlatL2(dimension)

try:
    # Obtener embeddings para todas las descripciones
    vectors = []
    for desc in descriptions:
        embedding = get_embedding(desc)
        if embedding is not None:
            vectors.append(embedding)
    
    if vectors:
        vectors_array = np.array(vectors)
        index.add(vectors_array)
        
        # Consulta en lenguaje natural
        query = "Sonido de guitarra con reverberación."
        query_vector = get_embedding(query)
        
        if query_vector is not None:
            query_vector = query_vector.reshape(1, -1)
            
            # Búsqueda de los sonidos más similares
            D, I = index.search(query_vector, 1)
            print(f"Resultado más similar: {descriptions[I[0][0]]}")
        else:
            print("No se pudo obtener el embedding para la consulta.")
    else:
        print("No se pudieron obtener embeddings para las descripciones.")
except Exception as e:
    print(f"Error durante la búsqueda: {e}")
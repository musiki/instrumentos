import faiss
import openai
import numpy as np

# Configuración de OpenAI API
openai.api_key = "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"

# Base de datos de descripciones de sonidos
descriptions = [
    "Guitarra acústica tocando acordes.",
    "Sonido de lluvia cayendo en un tejado.",
    "Saxofón tocando una melodía jazz.",
    "Bajo eléctrico con distorsión."
]

# Obtención de embeddings de OpenAI
def get_embedding(text):
    response = openai.Embedding.create(input=text, model="text-embedding-ada-002")
    return np.array(response['data'][0]['embedding'])

# Construcción del índice FAISS
dimension = 1536  # Dimensión de OpenAI embeddings
index = faiss.IndexFlatL2(dimension)
vectors = np.array([get_embedding(desc) for desc in descriptions])
index.add(vectors)

# Consulta en lenguaje natural
query = "Sonido de guitarra con reverberación."
query_vector = get_embedding(query).reshape(1, -1)

# Búsqueda de los sonidos más similares
D, I = index.search(query_vector, 1)
print(f"Resultado más similar: {descriptions[I[0][0]]}")
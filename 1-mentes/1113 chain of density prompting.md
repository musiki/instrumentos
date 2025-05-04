# **TIL 1**: Chain of Density Prompting (Preguntas por Cadena de Densidad)
## Introducción a la Acústica Musical con Chain of Density Prompting

Este trabajo práctico explora conceptos básicos de la acústica musical utilizando una técnica llamada "Chain of Density Prompting" (CoDP) y la programación en Python.  Aprenderemos cómo la frecuencia, la amplitud y otras características del sonido influyen en la música que escuchamos.

### ¿Qué es Chain of Density Prompting (CoDP)?

CoDP es una técnica para interactuar con modelos de lenguaje de IA (como Gemini) para obtener información más precisa y completa. Se basa en la idea de construir una cadena de prompts, empezando por uno general y aumentando gradualmente la densidad de información en cada prompt sucesivo.

**En resumen, CoDP implica:**

1. **Prompt inicial amplio:** Se comienza con una pregunta o instrucción general sobre el tema que se quiere explorar.
2. **Prompts más densos:** Se refinan las preguntas o instrucciones, añadiendo detalles específicos, restricciones o ejemplos para guiar al modelo hacia respuestas más concretas y relevantes.
3. **Iteración:** Se repite el proceso, aumentando la densidad de los prompts hasta obtener la información deseada.

ejemplo:

    1. Quiero diseñar una melodía en una escala menor.
    2. Ahora enfocate en una melodía para piano con un rango de dos octavas.
    3. Incluye un ritmo sincopado con cambios dinámicos.


**¿Por qué usar CoDP?**

- Permite un aprendizaje progresivo y profundo sobre un tema.
- Ayuda a comprender mejor las capacidades y limitaciones de los modelos de lenguaje de IA.
- Fomenta la creatividad y la exploración de diferentes perspectivas.

**Ejemplo:**

Imaginemos que queremos entender cómo la frecuencia afecta al tono de un sonido. Podríamos usar CoDP de la siguiente manera:

1. **Prompt inicial:** "¿Qué es la frecuencia en el contexto del sonido?"
2. **Prompt más denso:** "¿Cómo se relaciona la frecuencia de una onda sonora con el tono que percibimos?"
3. **Prompt aún más denso:** "Si una onda sonora tiene una frecuencia de 440 Hz, ¿qué nota musical representa? ¿Y si la frecuencia se duplica a 880 Hz?"

Al aumentar la densidad de los prompts, guiamos al modelo de IA hacia respuestas más específicas y relevantes para nuestra investigación.

# TP 1 Principios de Acústica usando CoDP

1. usarás CoDP para explorar diferentes aspectos de la acústica musical,
2. Hacé tres preguntas sobre un tema de acústica , de lo mas genérico a lo mas complejo.
3. Resumí una respuesta con tus palabras, citando al menos una referencia bibliográficas.
4. Comprobá que tu texto pase la prueba de los detectores de plagio basados en IA, como [Quillbot](https://colab.research.google.com/drive/1c06bTTiUKvbfbnmEdceOob2XPJzj0aS9#scrollTo=n56U9LVsJZsQ&line=37&uniqifier=1) Turnitin, GPTZero.
5. Hace un ejemplo aplicando los conceptos en python comentando el texto con tus palabras.



# Ejemplo de TP

encontré el concepto de **Doppler** y voy a preguntar lo siguiente:

## 1. Preguntas con CoDP:

### Pregunta genérica:
¿Qué es el efecto Doppler?
### Pregunta más densa:
¿Cómo cambia la frecuencia de un sonido percibido cuando la fuente sonora se mueve en relación al oyente?
### Pregunta más compleja:
Si una ambulancia se acerca a un observador a 50 km/h emitiendo una sirena a 440 Hz, ¿cuál será la frecuencia percibida por el observador?

## 2. Respuesta resumida (300 palabras)
cuando pasa una ambulancia por una calle , oimos que la frecuencia de la sirena desciende. La ambulancia es una fuente de sonido , que se mueve en relación a mis oidos. Cuando la fuente se acerca hacia mi, la frecuencia aumenta, pero si se aleja, la frecuencia disminuye. Ahora, la sirena de la ambulancia cambió su frencuencia?, Ciertamente no. Por lo cual hay una diferencia entre la frecuencia producida (por la sirena) y la percibida (por mi). Esto se debe a la compresión-expansión de las ondas en relación con el movimiento de la fuente. Si se acerca las ondas se comprimen (la longitud de onda es mas corta y la frecuencia mas alta) y si se aleja las ondas se expanded (la longitud de onda es más larga y la frecuencia mas baja). A esto se llama efecto Doppler, y como nos permite entender velocidades de fuentes en movimiento tiene muchas aplicaciones en medicina y astronomía.


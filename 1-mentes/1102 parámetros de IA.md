## parámetros

### indica el tamaño del modelo / Model Size (parameters)
- **Definición** : El número de parámetros de un modelo determina su capacidad para aprender y representar datos. Los modelos más grandes suelen ser más precisos, pero requieren más recursos informáticos.
- **Métricas clave** :
  - Número de parámetros (por ejemplo, 1,3B, 7B, 13B, 65B).
  - Capas de atención y cabezas en la arquitectura del transformador.
- **Impacto**:
  - Los modelos más grandes son más potentes pero más lentos durante la inferencia.
  - Los modelos más pequeños son más rápidos y eficientes, pero pueden funcionar peor en tareas complejas.


## tipos de arquitectura de modelos

 ### MoE (Mixture of Experts)
- Tiene varios expertos entrenados por separado (en este caso, 16).
- Pero solo 2 o pocos expertos se activan por token, por lo que el modelo “activo” tiene 17B parámetros, aunque el total puede ser mucho mayor (por ejemplo, 100B o más).

| Tipo de modelo          | Descripción técnica                                       | Características clave                            | Aplicaciones típicas                                     | Entorno compatible                      |
|-------------------------|-----------------------------------------------------------|---------------------------------------------------|----------------------------------------------------------|-----------------------------------------|
| **Dense**               | Todos los parámetros activos en cada paso                 | Alta precisión, alto costo                       | GPT-3, BERT, T5                                           | Frameworks grandes (H100, A100, TPU)   |
| **Sparse / MoE**        | Activación parcial: solo algunos "expertos" activos       | Muy escalables, eficientes en inferencia         | Mixtral, Switch Transformer, Gemini 1.5                   | Grandes sistemas, 1–2 GPUs potentes    |
| **Distilled**           | Modelo "comprimido" a partir de uno más grande            | Más pequeño, rápido, menor precisión              | DistilBERT, TinyBERT, MobileBERT                          | Ideal para edge o móviles (Jetson, Pi) |
| **Quantized**           | Parámetros reducidos en precisión (ej. float32 → int8)    | Pequeño tamaño, algo menos preciso                | QLoRA, Whisper int8                                       | Microcontroladores, mobile, web        |
| **Pruned**              | Conexiones no importantes eliminadas                      | Menor latencia y memoria                          | Modelos custom para FPGA / edge                           | Dispositivos embedded o bajo consumo   |
| **Compact / Mobile**    | Arquitectura diseñada desde cero para dispositivos        | Extremadamente eficiente, liviana                 | MobileNet, TinyML, NanoGPT                                | Raspberry Pi, Jetson, navegadores      |
| **Retrievers + Generators (RAG)** | Modelo que busca + genera contexto dinámico   | Memoria externa, menor costo, alta actualización  | GPT + VectorDB, Claude + contexto                         | Ideal para apps con búsqueda externa   |
| **Multimodal**          | Procesan texto, imagen, audio, etc. simultáneamente       | Complejos, potentes, demandantes                  | Gemini, GPT-4V, Flamingo                                  | Grandes frameworks, cloud              |
| **LoRA / QLoRA**        | Finetune liviano con capas nuevas + baja precisión        | Rápido de adaptar, poco peso                      | Modelos adaptados por usuario (OpenLLaMA, etc.)           | Laptop, Google Colab, edge              |


### algunas ideas para comenzar o probar en embedded systems:

 *-los modelos deben tener <100MB
 -correr en menos de 1–2 GB de RAM. 
 -A veces se requiere ONNX o TFLite.*


•	DistilBERT o MiniLM para tareas NLP
•	MobileNet para visión por computadora
•	tiny-llama, nanoGPT para generación ligera
•	Whisper-tiny para STT (speech-to-text)
## ventana de contexto 
- define cuántos tokens (palabras o fragmentos) puede recordar y utilizar el modelo al generar texto o razonar.
- GPT-4 (turbo): hasta 128k tokens
- Claude 3: hasta 200k–1M
- Gemini 1.5: hasta 1M–10M
- Con mas de 10M de tokens de ventana de contexto se puede:
	- Puede leer documentos extensos (códigos, libros, bases de datos) sin necesidad de truncar o resumir.
	- Permite razonamiento a largo plazo, memorización precisa, análisis legal, científico o técnico a gran escala.


## Ajuste (Fine-Tuning)
- Definición**: adaptación de un modelo preentrenado a una tarea o dominio específico mediante un entrenamiento adicional en un conjunto de datos más pequeño y específico de la tarea.
- Importancia**:
  - Los modelos refinados se especializan en tareas concretas, como el análisis de sentimientos, la respuesta a preguntas o aplicaciones específicas de un dominio, como los textos jurídicos o médicos.
  - Un modelo LLaMA de uso general frente a Alpaca (adecuado para seguir instrucciones).
  - Los modelos refinados pueden perder generalidad a cambio de un rendimiento específico de la tarea.

## Cuantificación (Quantization)
- **Definición**: Reducción de la precisión de los pesos de un modelo (por ejemplo, de coma flotante de 16 bits a enteros de 4 bits) para reducir el tamaño y los requisitos computacionales.
- Tipos comunes** :
  - FP16, INT8, INT4, etc.
- Ventajas** :
  - Inferencia más rápida y menor consumo de memoria.
  - Permite la implementación en dispositivos periféricos o hardware menos potente.
- Desventajas** :
  - Posible pérdida de precisión, sobre todo en tareas muy complejas.

## Fusión de modelos (Model Merges)
- Definición**: Combinación de varios modelos (o versiones refinadas) para crear un nuevo modelo que incorpore las características de ambos.
- Objetivo**: Mejorar cualidades específicas como la generalidad o el rendimiento específico del dominio:
  - Mejorar cualidades específicas como la generalidad o el rendimiento específico del dominio.
  - Ejemplo: Combinar la capacidad de seguir instrucciones y el conocimiento de un dominio específico.
- Retos** :
  - Riesgo de incompatibilidad entre modelos.
  - Mayor complejidad en la comprensión del comportamiento del modelo resultante.

## Censura (Censorship)
- Definición**: Aplicación de filtros o restricciones para limitar los tipos de resultados que puede generar un modelo (por ejemplo, bloqueo de contenidos nocivos o políticamente sensibles).
- Aplicación**:
  - Desarrollo con conjuntos de datos curados o añadiendo capas de postprocesamiento para filtrar los resultados.
- Consideraciones**:
  - Necesario para la seguridad y el cumplimiento.
  - Puede introducir sesgos o limitar la creatividad del modelo.

## Proveedores de inferencia (Inference Providers)
- Definición**: Plataformas o herramientas que alojan modelos y proporcionan API para la inferencia.
- **Opciones** :
  - API de inferencia de Hugging Face.
  - Inferencia local (en su máquina o en una nube privada).
  - Servicios de terceros como AWS, Google Cloud u Ollama.
- Factores a evaluar** :
  - Latencia: Tiempo necesario para obtener una respuesta.
  - Coste: tarifas de uso de la API o tarifas de alojamiento.
  - Confidencialidad: La inferencia local garantiza la confidencialidad de los datos, lo que no siempre ocurre con las soluciones alojadas.

## Tipo de tensor (Tensor Type)
- Definición**: Formato en el que se almacenan y calculan los tensores del modelo (parámetros, pesos y activaciones).
- Ejemplos**:
  - Float32 (FP32): Alta precisión, estándar para entrenamiento.
  - Float16 (FP16): Menor precisión, acelera el entrenamiento/inferencia.
  - INT8/INT4: Formatos cuantificados para una inferencia eficaz.
- Impacto**:
  - Determina el rendimiento, el uso de memoria y la compatibilidad con aceleradores de hardware (por ejemplo, GPU, TPU).

## Arquitectura del modelo (Model Architecture)
- Definición El diseño específico de la red neuronal, como GPT, BERT o LLaMA.
- **Por qué es importante**:
  - Dicta las capacidades:
    - BERT: Optimizada para la comprensión (por ejemplo, clasificación, respuesta a preguntas).
    - GPT: optimizada para la generación (por ejemplo, escritura creativa).
- ** Factores adicionales** :
  - Estructuras de sólo decodificador o de codificador-decodificador.
  - Diferencias en los objetivos de formación (por ejemplo, modelización del lenguaje enmascarado o generación autorregresiva de textos).

## Conjunto de datos de preentrenamiento  (Pre-training Dataset)
- Definición Datos utilizados para entrenar el modelo base antes de refinarlo.
- Impacto** :
  - Determina el conocimiento general y el sesgo del modelo.
  - Evalúa el tamaño, la diversidad y la recencia del conjunto de datos.
- Ejemplos**:
  - Common Crawl (datos web), Wikipedia, BooksCorpus.

## Compatibilidad y soporte de hardware 
- **Factores clave** :
  - Comprueba la compatibilidad con tu hardware:
    - GPU NVIDIA (soporte CUDA para FP16).
    - Apple Silicon (backend Metal para acelerar el rendimiento).
  - Configuraciones multi-GPU o distribuidas para inferencia o entrenamiento a gran escala.
- Optimizaciones** :
  - Frameworks como la librería `transformers` de Hugging Face ofrecen aceleración específica de hardware (por ejemplo, TensorRT).

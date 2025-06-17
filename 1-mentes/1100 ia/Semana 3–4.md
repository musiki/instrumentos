Semana 3–4: Redes neuronales, del perceptrón a GPT

Introducción

Las redes neuronales artificiales son modelos computacionales inspirados en el sistema nervioso, donde nodos (neuronas) se organizan en capas y se conectan mediante pesos ajustables. Su objetivo es aproximar funciones no lineales que transforman una entrada en una salida deseada.

Arquitecturas fundamentales

Perceptrón (1958)

Modelo base con una sola capa:

$$
y = \sigma\left(\sum_{i=1}^{n} w_i x_i + b\right)
$$

Usa una función de activación como:

$$
\sigma(x) = \frac{1}{1 + e^{-x}} \quad \text{(sigmoide)}
$$

Multilayer Perceptron (MLP)

Capas ocultas que permiten representar funciones no lineales complejas. Se entrena con backpropagation:

$$
\frac{\partial \mathcal{L}}{\partial w} = \frac{\partial \mathcal{L}}{\partial y} \cdot \frac{\partial y}{\partial w}
$$

Redes Recurrentes (RNN)

Se reutilizan nodos en el tiempo:

$$
h_t = \sigma(W x_t + U h_{t-1} + b)
$$

Redes Convolucionales (CNN)

Aplicadas principalmente a imágenes. Funcionan con filtros de convolución que extraen patrones espaciales locales.

Transformers

Modelo basado en atención, no secuencial:

$$
\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

Permite procesar secuencias enteras con paralelismo.

Ejemplo práctico: diseño de una red simple

Para clasificar sonidos en tres categorías (percusión, cuerda, viento), un MLP con entrada de 10 parámetros acústicos y una salida de 3 neuronas con softmax puede servir. La salida será un vector de probabilidad.

Aplicaciones proyectivas
	•	Clasificador de muestras de audio con redes simples
	•	Reconocimiento de patrones en partituras escaneadas
	•	Interpretación de señales en instrumentos de control gestual (cámaras, sensores)

Actividades
	1.	Dibujar la arquitectura de un perceptrón y una red MLP con dos capas ocultas
	2.	Comparar RNN, CNN y Transformer en una tabla: estructura, tipo de datos, ventajas, desventajas
	3.	Diseñar un objeto musical ficcional que utilice una red neuronal de tres capas para transformar gestos en parámetros sonoros (sin necesidad de entrenarlo, pero especificando entradas, salidas y flujo de datos)
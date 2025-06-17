Semana 1–2: ¿Qué es la IA? (y qué no es)

Definición operacional

La Inteligencia Artificial puede definirse como el diseño de sistemas computacionales capaces de ejecutar tareas que, si fueran realizadas por humanos, requerirían inteligencia. Esto incluye procesos de percepción, decisión, inferencia y adaptación al entorno.

Hitos fundacionales
	•	1950: Alan Turing plantea la pregunta “¿Pueden las máquinas pensar?” y propone el Test de Turing, un experimento mental basado en la indistinguibilidad de respuestas.
	•	1956: Conferencia de Dartmouth. John McCarthy acuña el término Artificial Intelligence y plantea la hipótesis de que todo aspecto del aprendizaje puede ser descrito con suficiente precisión para ser simulado por una máquina.

IA simbólica vs conexionista
	•	Simbólica: Modela el conocimiento a partir de reglas lógicas, árboles de decisión y estructuras de datos explícitas. Ej.: Prolog.
	•	Conexionista: Utiliza redes neuronales artificiales inspiradas en el sistema nervioso, donde el conocimiento se distribuye en los pesos de conexiones entre nodos.

Ejemplo ilustrativo

Si se quiere que un sistema reconozca una silla:
	•	En IA simbólica se programan reglas explícitas como: “si tiene patas + respaldo + puede sentarse, entonces es una silla”.
	•	En IA conexionista se entrena un modelo con ejemplos (imágenes etiquetadas), permitiendo que la red ajuste internamente los pesos para generalizar el concepto de silla.

Introducción matemática mínima

Un modelo de red neuronal básica (perceptrón) puede describirse como:

$$
y = \sigma\left(\sum_{i=1}^{n} w_i x_i + b\right)
$$

Donde:
	•	$x_i$ son las entradas (features)
	•	$w_i$ los pesos
	•	$b$ es el sesgo (bias)
	•	$\sigma$ es una función de activación (por ejemplo, la función sigmoide)

Aplicaciones creativas proyectivas
	•	Desarrollo de filtros de clasificación sonora en tiempo real
	•	Modelado de decisiones para instalaciones interactivas
	•	Diseño de sistemas de composición basados en redes simples entrenadas con corpus propios

Actividades técnicas
	1.	Construir un mapa conceptual a partir de los hitos fundacionales de la IA, diferenciando teoría, implementación y consecuencias históricas.
	2.	Comparar en tabla las características técnicas entre IA simbólica y conexionista (estructura, entrada, modelo de conocimiento, capacidad de generalización).
	3.	Diseñar un objeto musical especulativo de 1950 con IA: definir sus entradas, reglas, materiales, interfaz y forma de decisión simbólica (no usar redes neuronales todavía).
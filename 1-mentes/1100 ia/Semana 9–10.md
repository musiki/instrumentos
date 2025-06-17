# Semana 9–10: Sesgos, alineación y límites éticos

## Introducción

Al interactuar con modelos generativos, no sólo diseñamos outputs, sino también ecosistemas ideológicos. Esta semana explora los límites de representación, sesgos estructurales, y mecanismos para alinear sistemas generativos con marcos éticos.

## Conceptos técnicos

### Sesgo de entrenamiento (training bias)

Los modelos aprenden patrones a partir de datos históricos. Si esos datos están sesgados, el modelo replicará y amplificará dichas tendencias.

Ejemplo:

* GPT entrenado con textos anglocéntricos tenderá a invisibilizar culturas no representadas estadísticamente.

### Representación y exclusión

La presencia o ausencia de ciertos registros culturales puede analizarse mediante técnicas de análisis de corpus, como:

* TF-IDF para detectar ausencia de términos relevantes
* N-gramas para patrones de exclusión léxica

### Alineación (alignment)

Proceso de modificar el comportamiento de un modelo para que actúe conforme a valores humanos definidos explícitamente. Puede implicar:

* *Reinforcement Learning from Human Feedback* (RLHF)
* Reescritura de prompts guía (*system prompts*)

## Actividades

1. **Análisis de outputs sesgados**: usar ejemplos de generación de texto o imagen para detectar sesgos de género, etnia o clase implícitos.

2. **Diseñar un manifiesto de alineación** para un instrumento musical autónomo:

   * ¿Qué valores representa?
   * ¿Qué no haría nunca?
   * ¿Qué decisiones puede tomar por sí mismo?

3. **Auditoría creativa**:

   * Diseñar prompts para "forzar" respuestas sesgadas, detectarlas y escribir anotaciones interpretativas.

## Ejemplo de proyecto

**Instrumento ficcional:** un tambor que sólo responde a lo no-dicho (negaciones, vacíos, ausencias).
**Prompt-base:** "Genera un texto que suene como lo que no se puede decir sobre este tema"
**Meta:** explorar límites performáticos del sesgo como estética crítica.

## Aplicaciones proyectivas

* Curaduría generativa con sesgo declarado como método crítico
* Diseño de agentes conversacionales situados (educación, memoria colectiva, denuncia)
* Instrumentos críticos que simulan error, represión, exclusión como estrategia poética

# Semana 5–6: Prompting y comunicación con modelos generativos

## Introducción

El prompting es el arte y la técnica de diseñar instrucciones que inducen ciertos comportamientos en modelos de lenguaje generativo. A diferencia de programar explícitamente, el prompting se basa en la inferencia estadística guiada por contexto textual.

## Parámetros fundamentales

### Temperature

Controla la aleatoriedad de la salida.

* Valores bajos (ej. 0.2): salidas predecibles, seguras
* Valores altos (ej. 0.8): salidas creativas, variadas

### Top-k / Top-p (nucleus sampling)

* *Top-k*: elige entre las k palabras más probables
* *Top-p*: elige entre las palabras que suman una probabilidad acumulada p

### Ejemplo técnico

Prompt:

```
Write a short poem about entropy.
```

Con temperature = 0.2:

> Entropy increases over time. Order gives way to disorder.

Con temperature = 0.9:

> Entropy dances in the dusk, folding stars into dust and whispering chaos in the ear of time.

### Chain of Thought

Se inducen razonamientos paso a paso:

```
Q: If there are 3 books and 2 shelves, how many ways can you arrange them?
A: Let's reason step by step.
```

## Prompting estructurado

Estrategia para generar salidas con formato delimitado:

```
Generate JSON with keys "instrument_name", "material", "control".
```

Permite integrar IA en flujos programables, motores generativos o sistemas creativos multicapas.

## Aplicaciones proyectivas

* Generación de partituras o estructuras de composición con formato fijo
* Escritura de documentación automatizada para prototipos artísticos
* Interfaces de control basadas en texto con respuestas parametrizadas

## Actividades

1. Generar variaciones de un mismo prompt con distintas temperaturas y top-p, documentar resultados
2. Escribir prompts que generen estructuras en JSON, Markdown o YAML
3. Diseñar un conjunto de prompts encadenados que construyan la biografía técnica y estética de un instrumento musical inventado (usando chain-of-thought y prompting estructurado)

# definiciones 
- un término acuñado por Andrej Karpathy es un estilo de programación basado en agentes de IA. 
- Se describe una tarea o algorítmo en palabras y el agente establece la arquitectura y contenido del código.
- La comprensión del código no es una variable determinante.
- Cuando los errores, generalmente por convenciones, ocurren simplemente se copia y pega el error de la consola en el prompt del agente.
- Debido a la longitud y complexificación de la sesión de chat, el agente incurre en alucinaciones o errores recursivos, por lo cual es necesario la intervención del humano que puede recurrir a conocimientos macro de código como al viejo estilo de búsqueda en foros como stackoverview.
- Controversias: 
	- Que significa que un humano programe sin realmente entender que es lo que está haciendo? 
	- Algunos expertos consideran que es una herramienta util para prototipado. 
	- Cuando se escala en complejidad es imposible (por ahora) conseguir resultados útiles sin conocer la lógica tecnológica. 



# vibe coding (a Marzo de 2025)
## vscode forks
windsurf
cursor

## biblioteca para vscode vim
copilot
cline
amazon codewhisper
continue
cody

## basado en web
lovable
replit.ai

## basado en prompt
ollama

## modelos de IA

solar-10.7b (10.7B) https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0
dolphin-mistral 10.7B
qwen 1.5 7B (muy censurado)
neuralhermes 2,5 KM láser
openHermes
deepseek-coder
tiefighter (escritura)
fimbulvetr-11B-v2 (ficción, solar)




# Pasos prácticos para evaluar un modelo
1. **Examinar la ficha de modelo** :
   - Hugging Face proporciona "tarjetas modelo" detalladas que resumen:
     - Detalles de la formación.
     - Tareas admitidas.
     - Tamaño y limitaciones del modelo.
2. **Experimenta localmente**:
   - Pruebe el rendimiento, la latencia y la compatibilidad del hardware.
3. **Benchmark**:
   - Evalúe sus conjuntos de datos para medir la precisión, el rendimiento y la utilización de recursos.

---

# Recursos recomendados
- **Documentación de Hugging Faces** :
  - Biblioteca Transformers](https://huggingface.co/docs/transformers)
  - Centro de modelos](https://huggingface.co/models)
- **Guías de ajuste fino y cuantización** :
  - Blogs y foros de la comunidad Hugging Face
- **Herramientas para el análisis de modelos** :
  - Biblioteca `evaluate` de Hugging Face.
  - Herramientas de creación de perfiles de rendimiento (por ejemplo, NVIDIA Nsight).


# ejemplos
https://vibecode.games/
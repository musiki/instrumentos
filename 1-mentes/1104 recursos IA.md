# música
https://www.udio.com/
https://suno.com/
[AI Music Software Index curated by Rut Germuller](https://docs.google.com/spreadsheets/d/1i2tKVc1iJqmQ0CwwmtIN5Cb16qdTFMl8kFWVuKH3VFk/edit#gid=354150603)
["Jukebox: A Generative Model for Music](https://github.com/openai/jukebox/) - a neural net that generates music, including rudimentary singing, as raw audio in a variety of genres and artist styles. We’re releasing the model weights and code, along with a tool to explore the generated samples.
[Interactive Wav2Lip Demo](https://bhaasha.iiit.ac.in/lipsync/)
[melobytes](https://melobytes.com/)
https://google-research.github.io/seanet/musiclm/examples/
# vocal
[Midi to Voice](https://github.com/mathigatti/midi2voice)
[murf.ai](https://murf.ai) AI voices and youtube video extractor.
[svc voice processing](https://colab.research.google.com/drive/1128nhe0empM7u4uo5hbZx5lqjgjG1OSf#scrollTo=oFr2MWaQfR6X)
[svc - hudding face voice models  catalog](https://huggingface.co/QuickWick/Music-AI-Voices/tree/main)
[svc - model training](https://colab.research.google.com/drive/1r9pmTyVepvRn4pohadPEizKY0zoA9E2x?usp=sharing)
[svc - github](https://github.com/svc-develop-team/so-vits-svc)
# imagen
https://www.midjourney.com/
[Dall-E](https://huggingface.co/spaces/dalle-mini/dalle-mini)
[StyleGan3](https://github.com/NVlabs/stylegan3)
[Parti - Pathways Autoregressive Text-to-Image model](https://github.com/google-research/parti)
[Runway](https://runwayml.com/) - Explore more than 30+ AI powered creative tools to ideate, generate and edit content like never before.
[vall-e](https://valle-demo.github.io/)
[stability AI] - Stable Diffusion
https://stablediffusionweb.com/
https://laion.ai/
https://haveibeentrained.com/
# video
wan 2.1
https://wonderdynamics.com/  - An AI tool that automatically animates, lights and composes CG characters into a live-action scene
gen-2 - by runwayml
https://research.runwayml.com/gen2

# texto
# interfaces de usuario
chatbox
poe
lmstudio 
llama.cpp server

# implementaciones locales basadas en prompt
ollama
llama.cpp
# asistentes de código

![[1103 vibe coding#vibe coding (a Marzo de 2025)]]


# 3d assests
[MotionDiffuse](https://mingyuan-zhang.github.io/projects/MotionDiffuse.html)



---

# comparativa de hardware para entrenamiento 
### **1. GPU**
- The model of the GPU being compared.
- Includes integrated GPUs (Apple M1) and discrete GPUs (NVIDIA RTX 3070, K80, T4, P100).

---

### **2. Compute Units / Cores**
- Number of cores or compute units available for processing.
- NVIDIA GPUs list CUDA cores, while the Apple M1 uses integrated cores optimized for GPU tasks.

---

### **3. TFLOPS (FP32)**
- Teraflops for 32-bit floating point operations (standard precision).
- Higher values indicate better performance for training standard neural networks.

---

### **4. TFLOPS (FP16)**
- Teraflops for 16-bit floating point operations (half-precision).
- Important for mixed-precision training, which is faster and consumes less memory.

---

### **5. Training Speed (Token/sec)**
- Estimated speed of training, measured in tokens processed per second.
- Based on typical transformer models (e.g., GPT-2, BERT).
- Higher values indicate faster processing.

---

### **6. Memory (GB)**
- Amount of GPU memory available.
- Important for holding model weights, gradients, and large batches of data during training.

---

### **7. Power Consumption (W)**
- Approximate power usage in watts.
- Higher power consumption generally indicates better performance but at higher energy costs.

---

### **8. Performance Tier**
- A general rating of the GPU's performance based on its specifications and expected efficiency.
- Tiers: **Medium**, **High**, **Very High**, **Extremely High**.

---

### **9. Approx. Time per 1MB (seconds)**
- Estimated time to process **1 MB of text data** (about 200,000 tokens).
- Calculated as: 
  ```markdown
  Processing Time (seconds) = 200,000 / Training Speed (Token/sec)
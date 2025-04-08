# música
# sonido
# imagen
# video

wan 2.1
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
## basados en nvim
copilot
magenta
gen
dap
## basados en vscode
cline
copilot
tabnine
	  
## autónomos (forks de vscode)
cursor
windsurf
vscodium
eclipse theia




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
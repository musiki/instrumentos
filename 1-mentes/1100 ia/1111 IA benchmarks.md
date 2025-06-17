
# clusters de cómputo dedicados a IA mas importantes, (2025)

| #   | Nombre           | País        | Ciudad           | Propiedad                     | CPU              | GPU                    | FLOPS (Rmax)        | Nodos   | RAM    | Almacenamiento  | Red               | Energía (MW) | Agua  | Arquitectura clave            | Año  | Uso IA  | Algoritmos clave          | Responsable principal                         | Tiempo GPT-3   | Energía GPT-3 |
| --- | ---------------- | ----------- | ---------------- | ----------------------------- | ---------------- | ---------------------- | ------------------- | ------- | ------ | --------------- | ----------------- | ------------ | ----- | ----------------------------- | ---- | ------- | ------------------------- | --------------------------------------------- | -------------- | ------------- |
| 1   | Oracle OCI AI    | EE.UU.      | Ashburn          | Oracle (privado)              | AMD EPYC         | A100+H100 (~131k GPUs) | ~2.4 zettaFLOPS*    | >8,000  | ?      | VAST, NVMe      | OCI fabric        | ~20+         | alta  | Escalado masivo multi-tenancy | 2024 | Sí      | IA multimodal, clientes   | Oracle Cloud AI team                          | ~5–7 días      | ~1.1 GWh      |
| 2   | xAI Colossus     | EE.UU.      | Memphis          | xAI (privado)                 | ?                | H100 (100k GPUs)       | ~100 exaFLOPS*      | ~12,500 | ?      | ?               | Spectrum-X        | ~50–100*     | alta  | Liquid-cooled AI training     | 2024 | Sí      | LLMs (Grok-3)             | xAI / Elon Musk                               | ~3–5 días est. | ~0.8 GWh      |
| 2   | DeepSeek PetaHub | China       | Hangzhou         | DeepSeek (privado)            | ARM Neoverse V2  | H100 (8,192 GPUs)      | ~8 exaFLOPS (FP16)* | 1,024   | 8 PB   | 200 PB          | InfiniBand NDR400 | 4.5          | media | NVIDIA DGX H100 SuperPOD      | 2024 | Sí      | LLMs, código              | DeepSeek AI Team                              | ~1 día         | ~0.5 GWh      |
| 3   | ABCI 3.0         | Japón       | Kashiwa          | AIST (estatal)                | Intel Xeon       | H200                   | >3 exaFLOPS (FP8)   | ?       | 6 PB   | 50 PB           | InfiniBand 400G   | ~5–8         | baja  | Ultra-paralelo para IA        | 2025 | Sí      | IA en japonés, industrial | RIKEN + AIST                                  | ~7–9 días est. | ~1.3 GWh      |
| 4   | El Capitan       | EE.UU.      | Livermore        | DOE/LLNL (estatal)            | AMD EPYC         | Instinct MI300A        | 1.74 exaFLOPS       | 11,136  | 5.4 PB | NVMe Rabbit     | Slingshot         | 30           | alta  | APU CPU+GPU integrada         | 2024 | Sí      | Sim multi-física, LLM     | Lawrence Livermore Lab                        | ~7 días        | ~1.5 GWh      |
| 5   | Frontier         | EE.UU.      | Oak Ridge        | DOE/ORNL (estatal)            | AMD EPYC         | Instinct MI250X        | 1.35 exaFLOPS       | 9,408   | 4.9 PB | Lustre          | Slingshot-11      | 20–25        | alta  | CPU-GPU AMD HPC stack         | 2022 | Sí      | LLMs, física cuántica     | Oak Ridge National Lab                        | ~7–10 días     | ~1.5 GWh      |
| 6   | OpenAI Azure     | EE.UU.      | Iowa (no espec.) | Microsoft/OpenAI (privado)    | ?                | A100+H100 (tens of k)  | ~10–20 exaFLOPS*    | ?       | ?      | ?               | Azure fabric      | ~10–20*      | alta  | Model/data parallelism        | 2020 | Sí      | LLMs (GPT-4, ChatGPT)     | Microsoft / OpenAI                            | ~5–7 días est. | ~1.0 GWh      |
| 7   | Dojo (Tesla)     | EE.UU.      | Palo Alto        | Tesla (privado)               | D1 Chip (custom) | D1 accelerators        | >1.0 exaFLOPS**     | 10,000+ | 1.2 PB | Exa-scale array | DojoNet           | ~2.5         | baja  | Training custom ASICs         | 2024 | Sí      | Visión, autoaprendizaje   | Ganesh Venkataramanan                         | ~5 días est.   | ~0.9 GWh      |
| 8   | JUPITER          | Alemania    | Jülich           | EuroHPC/Jülich                | NVIDIA Grace ARM | H100                   | 0.79 exaFLOPS       | >10,000 | 1.2 PB | NVMe            | InfiniBand        | 7–9          | baja  | ARM CPU + Hopper modular      | 2024 | Sí      | IA soberana europea       | FZ Jülich / EuroHPC                           | ~10 días       | ~1.2 GWh      |
| 9   | LUMI             | Finlandia   | Kajaani          | EuroHPC consortium            | AMD EPYC         | MI250X                 | 0.38 exaFLOPS       | 3,560   | 2.0 PB | 117 PB          | InfiniBand        | 7.1          | baja  | Energía 100% hidroeléctrica   | 2022 | Sí      | IA, simulaciones físicas  | CSC (Finland)                                 | ~15 días       | ~1.8 GWh      |
| 10  | Isambard-AI      | Reino Unido | Bristol          | UKRI + U. Bristol             | NVIDIA Grace ARM | Grace-Hopper           | ~0.25 exaFLOPS*     | ~5,000  | 1.5 PB | 20 PiB          | InfiniBand        | <5           | baja  | GH200 AI-optimizado           | 2024 | Sí      | BioIA, simulaciones       | Simon McIntosh-Smith                          | ~12 días       | ~1.3 GWh      |
| 11  | Leonardo         | Italia      | Bologna          | EuroHPC/CINECA                | AMD EPYC         | A100                   | 0.25 exaFLOPS       | 3,456   | 1.5 PB | 100 PB          | NVIDIA IB         | ~6           | media | Módulos booster + datos       | 2022 | Sí      | IA italiana y ciencias    | CINECA Bologna                                | ~15 días       | ~1.7 GWh      |
| 12  | Meta RSC         | EE.UU.      | Menlo Park       | Meta (privado)                | AMD EPYC         | A100 (16k GPUs)        | ~0.22 exaFLOPS*     | >2,000  | 3 PB   | 175 PB          | InfiniBand        | ~10          | alta  | Mega-cluster entrenamiento    | 2022 | Sí      | LLaMA, imagen+texto       | Meta AI                                       | ~10 días       | ~1.4 GWh      |
| 13  | Clementina XXI   | Argentina   | Buenos Aires     | CONICET + MinCyT (pública)    | AMD EPYC         | NVIDIA A100 (8x)       | ~15 PFLOPS*         | ~50     | 24 TB  | ~2 PB           | 100 Gb Ethernet   | <1           | baja  | IA nacional, clúster modular  | 2023 | Sí      | Modelos BERT/GPT pequeños | Polo Científico Tecnológico                   | ~30–40 días    | ~0.4 GWh      |
| 14  | Fire-Flyer 2     | China       | Hangzhou         | DeepSeek/High-Flyer (privado) | ?                | H800 (2,048 GPUs)      | ~2 PFLOPS*          | 256     | ?      | ?               | InfiniBand        | ~3–5*        | baja  | MoE, FP8 mixed-precision      | 2024 | Sí      | LLMs (DeepSeek-V3, R1)    | Liang Wenfeng / DeepSeek                      | ~5–7 días est. | ~1.2 MWh      |
| 15  | Santos Dumont    | Brasil      | Petrópolis       | LNCC (pública)                | Intel Xeon E5    | NVIDIA V100            | ~1.1 PFLOPS         | 360     | 0.7 PB | ~1 PB           | InfiniBand        | 0.8–1.2      | baja  | Biomedicina, IA, simulación   | 2015 | Parcial | IA biomédica y climática  | Laboratório Nacional de Computação Científica | >2 meses       | ~0.5 GWh      |


*Nota*: Los valores marcados con * son estimaciones basadas en datos disponibles o proyecciones. Los valores con ** indican datos preliminares o no confirmados.


*Nota*: Los valores marcados con * son estimaciones basadas en datos disponibles o proyecciones. Los valores con ** indican datos preliminares o no confirmados.

	•	El símbolo * indica estimación basada en rendimiento FP8 (IA optimizada).
	•	“Tiempo GPT‑3” es estimado para 175B parámetros en condiciones óptimas.
	•	La columna “Agua” refiere a intensidad relativa de refrigeración líquida (baja/alta).


> [!tip]  FLOPS
>  son las siglas de ***Floating-Point Operations Per Second*** (operaciones de coma flotante por segundo), 
>  
>  1. una medida del rendimiento de un ordenador, especialmente para tareas que implican cálculos numéricos (por ejemplo, simulaciones científicas o entrenamiento de inteligencia artificial). 
>  2. Cuenta cuántas operaciones aritméticas en coma flotante (como la suma o multiplicación de decimales) puede realizar un sistema en un segundo.
> 3. Se utiliza para evaluar superordenadores (por ejemplo, las clasificaciones TOP500) y clusters de IA.
> 4. Un mayor número de FLOPS indica una mayor potencia de cálculo, crucial para entrenar grandes modelos lingüísticos como GPT-3 o simular la física.
> 5. La precisión es importante (por ejemplo, FP64 para el trabajo científico, FP8 para la IA), lo que afecta a los valores de FLOPS.
> 6. Ejemplo: Un clúster con 1 petaFLOPS puede realizar 1 cuatrillón de cálculos por segundo, mientras que 1 exaFLOPS maneja 1 quintillón, es decir, mil veces más.


Traducción realizada con la versión gratuita del traductor DeepL.com


# upon deepseek

| #   | Nombre              | País        | Ciudad           | Propiedad                  | CPU                     | GPU                          | FLOPS (Rmax)             | Nodos    | RAM       | Almacenamiento  | Red               | Energía (MW) | Agua  | Arquitectura clave              | Año  | Uso IA  | Algoritmos clave            | Responsable principal               | Tiempo GPT-3   | Energía GPT-3 |
| --- | ------------------- | ----------- | ---------------- | -------------------------- | ----------------------- | ---------------------------- | ------------------------ | -------- | --------- | --------------- | ----------------- | ------------ | ----- | ------------------------------- | ---- | ------- | -------------------------- | ----------------------------------- | -------------- | ------------- |
| 1   | Oracle OCI AI       | EE.UU.      | Distribuido      | Oracle (privado)           | AMD EPYC                | A100+H100 (~131k GPUs)       | ~2.4 zettaFLOPS (FP8)*   | >8k      | ?         | VAST, NVMe      | OCI fabric        | ~20+         | alta  | escalado masivo multi-tenancy   | 2024 | Sí      | IA multimodal              | Oracle Cloud AI team                | ~5–7 días      | ~1.1 GWh      |
| 3   | El Capitan          | EE.UU.      | Livermore        | DOE/LLNL (estatal)         | EPYC                    | Instinct MI300A              | 1.74 exaFLOPS            | 11,136   | 5.4 PB    | NVMe Rabbit     | Slingshot         | 30           | alta  | APU CPU+GPU integrada           | 2024 | Sí      | sim multi-física, LLM      | Lawrence Livermore Lab              | ~7 días        | ~1.5 GWh      |
| 4   | Frontier            | EE.UU.      | Oak Ridge        | DOE/ORNL (estatal)         | EPYC                    | Instinct MI250X              | 1.35 exaFLOPS            | 9,408    | 4.9 PB    | Lustre          | Slingshot-11      | 22           | alta  | CPU-GPU AMD HPC stack           | 2022 | Sí      | LLMs, física cuántica      | Oak Ridge National Lab              | ~8 días        | ~1.5 GWh      |
| 6   | JUPITER             | Alemania    | Jülich           | EuroHPC/Jülich             | Grace ARM               | H100                         | 0.79 exaFLOPS            | >10k     | 1.2 PB    | NVMe            | InfiniBand        | 8.5          | baja  | ARM CPU + Hopper modular        | 2024 | Sí      | IA soberana europea        | FZ Jülich / EuroHPC                 | ~10 días       | ~1.2 GWh      |
| 7   | ABCI 3.0            | Japón       | Tokio            | AIST (estatal)             | Intel Xeon              | H200                         | >3 exaFLOPS (FP8)        | 1,536    | 6 PB      | 50 PB           | InfiniBand 400G   | 7            | baja  | ultra-paralelo para IA          | 2025 | Sí      | IA industrial, japonés     | RIKEN + AIST                        | ~8 días est.   | ~1.3 GWh      |
| 8   | LUMI                | Finlandia   | Kajaani          | EuroHPC consortium         | EPYC                    | MI250X                       | 0.38 exaFLOPS            | 3,560    | 2.0 PB    | 117 PB          | Infiniband        | 7.1          | baja  | energía 100% hidroeléctrica     | 2022 | Sí      | IA, simulaciones físicas   | CSC (Finland)                       | ~15 días       | ~1.8 GWh      |
| 9   | Isambard-AI         | Reino Unido | Bristol          | UKRI + U. Bristol          | Grace ARM               | Grace-Hopper                 | ~0.25 exaFLOPS*          | ~5k      | 1.5 PB    | 20 PiB          | InfiniBand        | 4.8          | baja  | GH200 AI-optimizado             | 2024 | Sí      | BioIA, simulaciones        | Simon McIntosh-Smith                | ~12 días       | ~1.3 GWh      |
| 10  | Leonardo            | Italia      | Bolonia          | EuroHPC/CINECA             | EPYC                    | A100                         | 0.25 exaFLOPS            | 3,456    | 1.5 PB    | 100 PB          | NVIDIA IB         | 6.5          | media | módulos booster + datos         | 2022 | Sí      | IA italiana y ciencias     | CINECA Bologna                      | ~15 días       | ~1.7 GWh      |
| 11  | Meta RSC            | EE.UU.      | Menlo Park       | Meta (privado)             | EPYC                    | A100 (16k GPUs)              | ~0.22 exaFLOPS*          | >2k      | 3 PB      | 175 PB          | InfiniBand        | 9.5          | alta  | mega-cluster entrenamiento      | 2022 | Sí      | LLaMA, imagen+texto        | Meta AI                             | ~10 días       | ~1.4 GWh      |
| 12  | Dojo (Tesla)        | EE.UU.      | Austin           | Tesla (privado)            | D1 Chip (custom)        | D1 accelerators              | >1.0 exaFLOPS (FP16)**   | 10k+     | ?         | Exa-scale array | DojoNet           | 3.0          | baja  | training custom ASICs           | 2024 | Sí      | visión, autoaprendizaje    | Ganesh Venkataramanan               | ~5 días est.   | ~0.9 GWh      |
| 13  | Clementina XXI      | Argentina   | Buenos Aires     | CONICET + MinCyT (pública) | AMD EPYC                | NVIDIA A100 (8x)             | ~15 PFLOPS*              | ~50+     | 24 TB     | ~2 PB           | 100 Gb Ethernet   | 0.9          | baja  | IA nacional, clúster modular    | 2023 | Sí      | modelos BERT/GPT pequeños  | Polo Científico Tecnológico         | ~30–40 días    | ~0.4 GWh      |
| 14  | Santos Dumont       | Brasil      | Petrópolis       | LNCC (pública)             | Intel Xeon Platinum     | NVIDIA V100                  | ~1.1 PFLOPS              | 360      | 0.7 PB    | ~1 PB           | Infiniband        | 1.0          | baja  | biomedicina, IA, simulación     | 2023 | Parcial | IA biomédica y climática   | Laboratório Nacional de Computação  | >2 meses       | ~0.5 GWh      |


## oracle OCI supercluster (distribuido)
![](https://i.imgur.com/0JctOIW.png)

## colossus (US)

![](https://i.imgur.com/Uop9PFw.png)
![](https://i.imgur.com/8XPv02f.png)


## el capitan (US)
![](https://i.imgur.com/PZ2R2IA.png)
## frontier
![](https://i.imgur.com/psEf4vZ.png)
## jupiter (DE)
![](https://i.imgur.com/p8BWqvH.png)
## lumi (FI)
![](https://i.imgur.com/y2SYJvW.png)
## isambard (UK)
![](https://i.imgur.com/WV1pgJy.png)
## clementine XXI (AR)
![](https://i.imgur.com/V0gUlhb.png)

# comparativas 

### Resumen de datos sobre energía para entrenar GPT-3 (de la tabla)
- **Oracle OCI AI**: ~1.1 GWh total, ~5–7 días → ~157.14 MWh/día (1,100,000 kWh ÷ 7).
- **xAI Colossus**: ~0.8 GWh total, ~3–5 días → ~160 MWh/día (800,000 kWh ÷ 5).
- **DeepSeek Fire-Flyer 2**: ~1.2 MWh total, ~5–7 días → ~0.1714 MWh/día (1,200 kWh ÷ 7).
- **OpenAI Azure**: ~1.0 GWh total, ~5–7 días → ~142.86 MWh/día (1,000,000 kWh ÷ 7).
- **Clementina XXI**: ~0.4 GWh total, ~30–40 días → ~10 MWh/día (400,000 kWh ÷ 40).
- **Nota**: Estos son promedios diarios basados en la energía total dividida por la duración estimada del entrenamiento, según la tabla.

### Consumo eléctrico urbano (por millón de habitantes, de respuesta previa)
- **EE.UU.**: ~32,877 kWh/día (Nueva York, escalado desde 12,000 kWh/año per cápita).
- **China**: ~12,329 kWh/día (Hangzhou, escalado desde 4,500 kWh/año per cápita, promedio China 2023).
- **Argentina**: ~3,288 kWh/día (Buenos Aires, escalado desde 1,200 kWh/año per cápita, aproximado con datos latinoamericanos).

### Cinco casos
1. Para entrenar un modelo GPT-3 desde cero en **EE.UU**. con el clúster Oracle OCI AI, gastaríamos la **misma** energía que consume diariamente la bulliciosa ciudad de *Ashburn para un millón de habitantes*—unos 32,877 kWh
2. En **EE.UU.**, utilizar el clúster xAI Colossus en Memphis para entrenar un modelo GPT-3 desde cero consumiría aproximadamente ***cinco*** veces la electricidad diaria de un *millón de memphianos*—160,000 kWh frente a sus 32,877 kWh.
3. En **China**, emplear el clúster DeepSeek Fire-Flyer 2 en Hangzhou para entrenar un modelo GPT-3 desde cero requeriría apenas 1,200 kWh *diarios*, una ***mínima fracción*** de los 12,329 kWh que alimentan a un *millón de residentes hangzhouneses cada día.*
4. Para entrenar un modelo GPT-3 desde cero en **EE.UU**. con el clúster OpenAI Azure en Iowa, usaríamos unos 142,860 kWh *diarios*—más de ***cuatro*** veces los 32,877 kWh que iluminan hogares y granjas de un *millón de ioweses.*
5. En **Argentina**, entrenar un modelo GPT-3 desde cero en el clúster Clementina XXI en Buenos Aires demandaría 10,000 kWh *diarios*—casi el ***triple*** de los 3,288 kWh que sostienen a un *millón de porteños cada día.*


# GPU Benchmark Comparison with Processing Time

| GPU                       | Compute Units / Cores | TFLOPS (FP32) | TFLOPS (FP16) | Training Speed (Token/sec) | Memory (GB) | Power Consumption (W) | Performance Tier | Approx. Time per 1MB ± 200k tokens (seconds)    |
| ------------------------- | --------------------- | ------------- | ------------- | -------------------------- | ----------- | --------------------- | ---------------- | -------------------------------------------- |
| Apple M1 (Integrated GPU) | 8-core GPU            | 5.2           | 2.6           | 0.9                        | 16          | 70                    | Medium           | 222,                                            |
| NVIDIA RTX 3070           | 5888 CUDA cores       | 20.3          | 8.5           | 4.8                        | 8           | 220                   | High             |                                                 |
| NVIDIA K80                | 2496 CUDA cores       | 8.7           | 4.5           | 2.1                        | 12          | 300                   | Medium                                                             |
| NVIDIA T4                 | 2560 CUDA cores       | 12.5          | 6.1           | 2.4                        | 16          | 70                    | High                                                               |
| NVIDIA P100               | 3584 CUDA cores       | 15.7          | 7.9           | 3.6                        | 16          | 250                   | Very High                                                          |

processing time calculation will be:
$$ \text{Processing Time (seconds)} = \frac{200,000 \text{ tokens}}{\text{Training Speed (Token/sec)}} $$

---

## 📌 Explicación de cada columna

### **1. GPU**
- El modelo de la GPU que se está comparando.
- Incluye GPU integradas (Apple M1) y GPU externas (NVIDIA RTX 3070, K80, T4, P100).

---

### **2. Unidades de cálculo / núcleos**
- Número de núcleos o unidades de cálculo disponibles para el procesamiento.
- Las GPU NVIDIA incluyen núcleos CUDA, mientras que la Apple M1 utiliza núcleos integrados optimizados para tareas de GPU.

---

### **3. TFLOPS (FP32)**
- Teraflops para operaciones en coma flotante de 32 bits (precisión estándar).
- Los valores más altos indican un mejor rendimiento para entrenar redes neuronales estándar.

---

### **4. TFLOPS (FP16)**
- Teraflops para operaciones en coma flotante de 16 bits (media precisión).
- Importante para la formación de precisión mixta, que es más rápida y consume menos memoria.

---

### **5. Velocidad de entrenamiento (Token/seg)**
- Velocidad estimada de entrenamiento, medida en tokens procesados por segundo.
- Basado en modelos de transformador típicos (por ejemplo, GPT-2, BERT).
- Los valores más altos indican un procesamiento más rápido.

---

### **6. Memoria (GB)**
- Cantidad de memoria disponible en la GPU.
- Importante para almacenar los pesos del modelo, los gradientes y grandes lotes de datos durante el entrenamiento.

---

### **7. Consumo de energía (W)**
- Consumo de energía aproximado en vatios.
- Un mayor consumo de energía suele indicar un mejor rendimiento, pero con un mayor coste energético.

---

### **8. Nivel de rendimiento**
- Una clasificación general del rendimiento de la GPU basada en sus especificaciones y la eficiencia esperada.
- Niveles: **Medio**, **Alto**, **Muy alto**, **Extremadamente alto**.

---

### **9. Tiempo aproximado por 1 MB (segundos)**
- Tiempo estimado para procesar **1 MB de datos de texto** (unos 200.000 tokens).
- Calculado como:
  ```markdown
  Tiempo de procesamiento (segundos) = 200.000 / Velocidad de entrenamiento (Token/seg)
#concept #ai 


<grid drag="60 55" drop="5 10" bg="black" align="left">
## BPE
#### aplicado en ia-bert-text
</grid>

---

#### 🔍 **¿Qué es BPE (Byte Pair Encoding)?**
**Byte Pair Encoding (BPE)** es un método de **compresión de datos y tokenización** ampliamente usado en modelos de lenguaje como GPT-2 para descomponer palabras en subpalabras o tokens más pequeños. 

---
### 🔍 **¿Cómo Funciona BPE?**
1. **Inicialización:** Se parte de un vocabulario que contiene solo caracteres individuales.
2. **Conteo de Frecuencias:** Encuentra las parejas de caracteres adyacentes con mayor frecuencia.
3. **Creación de un Nuevo Token:** Reemplaza la pareja más frecuente por un nuevo token.
4. **Repetición:** El proceso se repite hasta alcanzar el vocabulario deseado.

---
### 🔍 **Fórmula Matemática del BPE:**
El proceso de BPE se puede expresar con la siguiente fórmula:
<math display="block">
<br>
<br>
  <mrow>
    <mo>argmax</mo><mo>(</mo><mi>x</mi>, <mi>y</mi><mo>)</mo>
    <mo>=</mo>
    <msup>
      <mo>∑</mo>
      <mrow>
        <mi>i</mi><mo>=</mo><mn>1</mn>
      </mrow>
    </msup>
    <mi>freq</mi><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub>, <msub><mi>y</mi><mi>i</mi></msub><mo>)</mo>
  </mrow>
</math>

---
### 📌 **Código Python para Tokenización (BPE):**
```python
from transformers import GPT2Tokenizer

tokenizer = GPT2Tokenizer.from_pretrained('gpt2')

# Ejemplo de texto
texto = "El río de palabras se desbordó en la noche..."

tokens = tokenizer.encode(texto)
print(f"Tokens: {tokens}")
print(f"Texto Original: {tokenizer.decode(tokens)}")
```

---
### 2. **Forward Pass:**
Durante el Forward Pass, el modelo genera predicciones sobre el siguiente token basándose en la secuencia anterior usando la arquitectura Transformer.

---
### 🔍 **Fórmula Matemática del Forward Pass:**
El modelo genera la siguiente palabra basada en la secuencia anterior utilizando:



<br>
<br>
<math display="block">
  <mrow>
    <mi>P</mi><mo>(</mo><msub><mi>w</mi><mi>t</mi></msub><mo>|</mo>
    <msub><mi>w</mi><mn>1</mn></msub>, <msub><mi>w</mi><mn>2</mn></msub>, 
    <mo>...</mo>, <msub><mi>w</mi><mrow><mi>t</mi><mo>-</mo><mn>1</mn></mrow></msub>
    <mo>)</mo>
    <mo>=</mo>
    <mi>Softmax</mi><mo>(</mo><msub><mi>W</mi><mi>o</mi></msub> <msub><mi>h</mi><mi>t</mi></msub><mo>)
  </mrow>
</math>

---
### 🔍 **Descripción:**

<math display="block">
<br>
  <mrow>
    <mtext>h<sub>t</sub> </mtext><mtext>: Representación del token generada por el Transformer</mtext>
  </mrow>
  <br>
  <mrow>
    <mtext>W</mtext><sub>o</sub><mo>:</mo> <mtext>Matriz de pesos que proyecta</mtext> <mtext>h</mtext><sub>t</sub> <mtext>al espacio del vocabulario.</mtext>
  </mrow>
  <mrow>
<br>
    <mtext>Softmax</mtext><mo>:</mo> <mtext>Convierte los valores en probabilidades.</mtext>
  </mrow>
</math>
<grid drag="60 55" drop="5 10" bg="black" align="left">
# Instrumentalidades
## Clase 5
</grid>
<grid drag="-5 10" drop="5 -10" bg="black">
![[i1-header]]
</grid>

<grid drag="25 55" drop="-5 10" bg="black" align="top">
→ desde la voz<br>
→ hasta la hiperrealidad<br>
→ instrumentalidad y agencia<br>
</grid>


---

0. voz
1. instrumentos acústicos
2. amplificación pasiva
3. amp-transductores entrada 
4. amp-transductores salida
5. manipuladoras externos
6. controladores-interfaces analógicas
7. sistemas embebidos
8. interfaces y protocolos de control
9. hipérfonos
10. entornos de hiperrealidad

---

# 0. voz

---


![[17-aparato vocal]]


---

# 1. instrumentos acústicos 

---

![[oscilación armónica en objetos elásticos]]

---

# amplificación pasiva

---

### ¿Qué es la amplificación pasiva?

- Amplificación sin necesidad de energía externa o componentes activos.
- Uso de cavidades, membranas, resonadores y acoplamientos mecánicos.
- Transforma pequeños movimientos o fricciones en sonidos audibles.

---

### Ejemplo 1: *Lion’s Roar*

- Percusión de fricción.
- Una cuerda pasa por una membrana tensa (generalmente cuero o plástico).
- Se frota la cuerda con un trapo húmedo.
- El sonido se transmite a la membrana, que actúa como resonador.

<iframe title="Jaap Stiggelbout Bespeelt de Lion's roar" src="https://www.youtube.com/embed/BS4R1wgiKEk?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---

### Ejemplo 2: Spring drum

- Tubo o cuerpo resonante (madera, plástico).
- Un resorte largo está fijado en uno de sus extremos.
- Al frotar o agitar el resorte, el cuerpo resuena.
- Combinación de fricción, impulso y propagación mecánica.


<iframe title="Spring Drum | Remo" src="https://www.youtube.com/embed/nQLufXyfEEY?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---

### Principio de funcionamiento físico

#### Transferencia de energía + resonancia acústica

<p>
<strong>Excitador</strong>: cuerda frotada, resorte agitado. <br>
<strong>Transmisor</strong>: unión material (cuerda-membrana, resorte-caja). <br>
<strong>Resonador</strong>: membrana o cuerpo hueco que vibra con mayor amplitud. <br>
Resultado: amplificación sin electrónica.
</p>

\\[
P_{\\text{acústico}} \\propto A^2 f^2 \\rho c
\\]

<p>
<em>A</em>: amplitud de vibración. <br>
<em>f</em>: frecuencia. <br>
<em>ρ</em>: densidad del medio. <br>
<em>c</em>: velocidad del sonido.
</p>

---

### Diseño experimental

- Explorar diferentes combinaciones de:
  - Materiales (resortes, membranas, cuerdas).
  - Formas de caja (cilindros, esferas, conos).
  - Tipos de fricción o golpeo.
- Objetivo: diseñar nuevos objetos que **auto-amplifiquen** su señal sonora sin electrónica.

---


# 3. transducción (entrada)


---

<iframe title="Sound of a guitar string cooling down on a piezo contact mic" src="https://www.youtube.com/embed/6OH0-4RxmIs?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>


---

### Principio piezoeléctrico: base material

- Algunos **cristales no centrosimétricos** (ej: cuarzo, titanato de bario, PVDF) generan una carga eléctrica al ser deformados mecánicamente.
- Esta propiedad se llama **piezoelectricidad directa**.
- El efecto inverso (generar deformación al aplicar voltaje) también existe, pero no se usa en micrófonos.

---

### Estructura de un transductor piezoeléctrico

- **Electrodos** metálicos (ej. cobre, plata).
- **Material piezoeléctrico** polarizado (cerámica o polímero).
- **Sustrato** o soporte rígido (ej. latón).
- Aislado con un **dieléctrico** que impide cortocircuito y filtra altas frecuencias.

<grid bg="white">
<img src="piezo_cross_section.png" width="520">
</grid>

---

### Polarización y dieléctrico

- El material se **polariza** aplicando un campo eléctrico a alta temperatura (efecto de *ferroelectricidad remanente*).
- Se forma un dipolo eléctrico permanente.
- Al deformarse, los dipolos cambian de orientación → se genera un campo eléctrico medible.
- El dieléctrico regula la respuesta capacitiva y la sensibilidad.

---

### Modelado físico

El piezoeléctrico puede modelarse como un **generador de carga** en paralelo con un **condensador $C_p$** y una **resistencia de fuga $R_p$**:

$$
V(t) = \frac{d_{33}}{\epsilon_r \epsilon_0} \cdot \frac{F(t)}{A}
$$

Donde:  
- $d_{33}$ = coeficiente piezoeléctrico (m/V)  
- $\epsilon_r$ = permitividad relativa  
- $\epsilon_0$ = permitividad del vacío  
- $F(t)$ = fuerza aplicada  
- $A$ = área activa

---

##  mics e instrumentos  / objetos acústicos 

### Stanislas Pili - Regime Orizzontale

<iframe title="Stanislas Pili - REGIME ORIZZONTALE" src="https://www.youtube.com/embed/Kl-8oIPb7x8?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>


---

# 4. transductores: salida

---

## sintetizador victoriano 

<iframe title="Matt Miller   Victorian Oscillator" src="https://www.youtube.com/embed/I-RoQeW9ano?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

note: John Bowers (1957) trabaja con electrónica casera, instrumentos de fabricación propia y reconstrucciones de antiguos dispositivos de imagen y sonido, junto con tecnología digital contemporánea, y ha adoptado un enfoque muy diferente a la invención de instrumentos con su "Victorian Synthesiser". Este proyecto en curso pretende construir un instrumento "con el tipo de piezas y capacidades que tienen los sintetizadores tradicionales (osciladores, filtros, envolventes de amplitud, modulación) pero utilizando técnicas conocidas por los victorianos". 

---


---

 

## transductores táctiles

---

### david tudor, Rolen Star transducer (Rain Forest, 1970 )

![](https://i.imgur.com/rcXZEbK.png)


---

<iframe title="HOW TO SEE | David Tudor's Rainforest V (variation 1) in 360!" src="https://www.youtube.com/embed/SL3el1i_vG0?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---

![](https://i.imgur.com/ZuzFV9P.png)

Regenskog, 2010 Piksel, Bergen NO

---

### Carola Bauckholt (Doppelbelichtung, 2016)

<iframe title="Carola Bauckholt — Doppelbelichtung [w/ score]" src="https://www.youtube.com/embed/B_UcXMeoQpA?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---

<iframe title="Carola Bauckholt &quot;Doppelbelichtung&quot; for violin and electronics (2016)" src="https://www.youtube.com/embed/oAKePb1FA_Q?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---

<iframe src="https://www.daytonaudio.com/category/180/exciters-tactile-transducers" allow="fullscreen" allowfullscreen="" style="height:100%;width:100%; aspect-ratio: 16 / 9; "></iframe>

---

<iframe title="Transducer vs Pickup Mic" src="https://www.youtube.com/embed/aX9_gYFhLQM?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---


## Emilio Adasme Campos - Trempor Machine 
<iframe title="Emilio Adasme Campos — Tremor Machine [w/ score]" src="https://www.youtube.com/embed/gmu4COOB2MA?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>



---

# TP Aplicación Instrumentalidades

1. Elegir y detectar un principio potencial de **instrumentalidad** en acciones , objetos cotidianos, o combinatorias tecnológicas de las etapas de interacción, producción de sonido (excitación, activación) y resonancia (amplificación analógica o electrónica).

2. Nombrar el **principio de funcionamiento**. Ejemplo de prompt: nombrar el principio de funcionamiento de cuando activo una regla fijada a una mesa , la presiono y genera un sonido. Respuesta : oscilación simple.... 

3. Generar una instrumentalidad inventada aplicando el principio de funcionamiento al gesto instrumental.
	1. Escribir una micro-obra de al menos 3 gestos.
	2. Anotar la disposición material . 
	3. Diseñar los n-gramas necesarios para la interacción entre los componentes de variabilidad y fundamentales del instrumento. 
4. Entrega:
	1. Presentar la partitura: disposición material y micro-obra. 
	2. explicar el funcionamiento con un texto de hasta 300 palabras.
	3. simular el output, con samples, grabaciones o IA. 

---


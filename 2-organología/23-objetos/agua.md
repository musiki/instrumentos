| Tipo de interacción | Descripción acústica                   | Gesto principal      | Controlabilidad | Ejemplos sonoros/instrumentales                   |
|---------------------|----------------------------------------|----------------------|------------------|---------------------------------------------------|
| Chapoteo            | Ruido amplio, transitorio, amplio espectro | Percusión del agua con manos u objetos | Media              | Juegos, percusión acuática, danzas tribales       |
| Goteo               | Pulsos discretos, armónicos o percutivos   | Caída vertical por gravedad        | Alta               | Hidrófonos, dripping scores, Steve Reich (early works) |
| Escurrir            | Flujo continuo y variable               | Movimiento en superficie o sobre objetos | Media-Alta         | Instrumentos como *rain sticks*, danza del agua   |
| Ola                 | Masa en movimiento periódico, resonante    | Movimiento amplio y lento        | Baja               | Paisajes sonoros marinos, instalaciones inmersivas|
| Borboteo            | Burbujas que estallan, con armónicos medios | Aire introducido en agua         | Alta               | Pajas en agua, efectos de sintetizador acuático   |
| Chorro              | Flujo continuo a presión                 | Expulsión por manguera o sifón    | Alta               | Tuberías, fuentes musicales (Water Organ)         |
| Turbulencia         | Mezcla caótica, amplio rango espectral     | Agitación intensa del agua       | Baja               | Performances de improvisación con cubas           |
| Resonancia contenida| Oscilaciones internas en un recipiente     | Golpe o fricción sobre recipiente lleno | Alta               | Tazas, copas, hidrocristales (copas musicales)    |
| Vaporización        | Transición de estado con ruido sibilante   | Calor aplicado al agua           | Baja               | Hervidores musicales, instalaciones térmicas      |
| Condensación        | Retorno del agua como líquido, goteo lento  | Enfriamiento                   | Baja               | Esculturas sonoras, climatización sonora          |


## modelos físicos

| Interacción          | Física dominante                              | Teorías o ecuaciones relevantes                                                                                           | Posibles parámetros de simulación                      |
| -------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Chapoteo             | Dinámica de impacto / cavitación              | - Ecuación de Navier-Stokes<br>- Ley de Bernoulli (transitorios)<br>- Modelos de splash (Smoothed Particle Hydrodynamics) | Velocidad de impacto, volumen, profundidad, viscosidad |
| Goteo                | Caída libre + tensión superficial             | - Ley de Stokes (caída en fluido)<br>- Fórmula de Rayleigh para gotas<br>- Tensión superficial ($\sigma$)                 | Altura, viscosidad, tamaño de gota, intervalo temporal |
| Escurrir             | Flujo laminar o transicional sobre superficie | - Navier-Stokes (flujo sobre superficie)<br>- Ley de Poiseuille (flujo laminar)<br>- Número de Reynolds                   | Pendiente, rugosidad, viscosidad, flujo, temperatura   |
| Ola                  | Dinámica ondulatoria superficial              | - Ecuación de onda no lineal<br>- Ecuaciones de Boussinesq<br>- Solitones                                                 | Longitud de ola, altura, frecuencia, profundidad       |
| Borboteo             | Interfaz aire-agua + presión + oscilación     | - Osciladores no lineales<br>- Burbuja de Minnaert<br>- Cavitación                                                        | Presión del gas, frecuencia de entrada, volumen        |
| Chorro               | Flujo turbulento presurizado                  | - Ecuación de continuidad<br>- Número de Mach si supersónico<br>- Vorticidad y corte                                      | Diámetro de salida, presión, viscosidad                |
| Turbulencia          | Caos fluido, alta no linealidad               | - Ecuación de Navier-Stokes (régimen turbulento)<br>- Número de Reynolds muy alto<br>- Teoría de Kolmogorov               | Energía inicial, geometría, viscosidad, obstáculos     |
| Resonancia contenida | Resonancia acústica + dinámica de fluido      | - Modos propios del recipiente<br>- Helmholtz resonator equation<br>- Capacidad + masa fluida                             | Forma del recipiente, volumen de agua, nivel           |
| Vaporización         | Termodinámica + cinética molecular            | - Ley de Clausius-Clapeyron<br>- Ecuación de estado del gas ideal                                                         | Temperatura, presión ambiente, volumen de agua         |
| Condensación         | Termodinámica de cambio de fase inverso       | - Misma ecuación que vapor, pero con pérdidas<br>- Transferencia de calor                                                 | Gradiente térmico, superficie de condensación          |
|                      |                                               |                                                                                                                           |                                                        |



Glosario de conceptos clave
	•	Navier-Stokes: describe el movimiento de fluidos viscosos (líquidos y gases). Es la base para todo simulador de fluidos realistas (como FLIP, SPH, LBM, etc.)
	•	Número de Reynolds: $Re = \frac{\rho v L}{\mu}$ → determina si el flujo es laminar (ordenado) o turbulento (caótico).
	•	Ecuación de Helmholtz: usada para estimar frecuencias resonantes de cavidades acústicas llenas de líquido o aire.
	•	Burbuja de Minnaert: frecuencia de resonancia de una burbuja en un fluido, modelada como oscilador no lineal:
$$f = \frac{1}{2\pi R} \sqrt{\frac{3\gamma P_0}{\rho}}$$

Aquí tenés la tipología de interacciones con agua como instrumento musical, organizada como lista, con los títulos de las teorías o ecuaciones relevantes y su formulación matemática en LaTeX, lista para usar en simulaciones o en Obsidian:

⸻

1.	Chapoteo (Splash / Cavitación)
•	Ecuaciones de Navier-Stokes (fluido viscoso incomprensible)
$$\rho\left(\frac{\partial\vec{v}}{\partial t} + \vec{v}\cdot\nabla\vec{v}\right) = -\nabla p + \mu\nabla^2\vec{v} + \vec{f}$$
•	Ley de Bernoulli (versión simplificada para régimen no turbulento)
$$P + \frac{1}{2}\rho v^2 + \rho gh = \text{constante}$$
2.	Goteo (Drop Formation)
•	Ecuación de Rayleigh para vibración de una gota
$$f_n = \frac{1}{2\pi} \sqrt{\frac{n(n-1)(n+2)\sigma}{\rho R^3}}$$
•	Ley de Stokes (velocidad terminal de una gota)
$$v = \frac{2}{9}\cdot\frac{r^2(\rho_p - \rho_f)g}{\mu}$$
3.	Escurrir (Flowing Water)
•	Flujo laminar (Ley de Poiseuille)
$$Q = \frac{\pi r^4 \Delta P}{8 \mu L}$$
•	Número de Reynolds
$$Re = \frac{\rho v L}{\mu}$$
4.	Ola (Ondas de superficie)
•	Ecuación de onda lineal en superficie
$$\eta(x,t) = A\cos(kx - \omega t)$$
•	Relación de dispersión para ondas en aguas profundas
$$\omega^2 = gk$$
5.	Borboteo (Burbujeo)
•	Frecuencia de burbuja de Minnaert
$$f = \frac{1}{2\pi R} \sqrt{\frac{3\gamma P_0}{\rho}}$$
6.	Chorro (Jet Stream)
•	Ecuación de continuidad
$$A_1 v_1 = A_2 v_2$$
•	Número de Mach (si flujo supersónico)
$$M = \frac{v}{c}$$
7.	Turbulencia
•	Teoría de Kolmogorov (escala de longitud mínima)
$$\eta = \left(\frac{\nu^3}{\epsilon}\right)^{1/4}$$
•	Reynolds elevado → turbulencia cuando
$$Re > 4000$$
8.	Resonancia contenida (Vibración de cavidades)
•	Frecuencia de resonador de Helmholtz
$$f = \frac{c}{2\pi} \sqrt{\frac{A}{V L_\text{eff}}}$$
9.	Vaporización
•	Ecuación de Clausius-Clapeyron (transición líquido-gas)
$$\frac{dP}{dT} = \frac{L}{T(V_g - V_l)}$$
10.	Condensación

•	Misma que la anterior, en dirección opuesta
•	Proceso dependiente de: gradiente térmico, superficie, presión parcial.




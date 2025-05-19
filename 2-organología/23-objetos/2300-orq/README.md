
![](https://i.imgur.com/dzqhCbc.png)

# códigos de instrumentos orquestales


## según grilla orquestal grilla orquestal

1. genéricos
	1. 00 electrónicos
	2. 00 cuerdas
	3. 00 cinemáticos
	4. 00 fx

2. maderas
	1. 01 flautas
	2. 02 oboes
	3. 03 clarinetes
	4. 04 saxofones
	5. 05 fagot
3. bronces
	1. 06 corno frances
	2. 07 trompetas
	3. 08 trombones
	4. 09 tubas
4. percusión
	1. 10 timbales
	2. 11 percusión placas
	3. 12 percusión 
	4. 12 drumset
5. teclados, cuerdas y voces
	1. 14 cañas libres
	2. 15 teclados
	3. 16 órgano
	4. 17 coro
	5. 17 voces
	6. 18 punzados guitarras
	7. 18 punzados arpas
6. cuerdas
	1. 19 violín
	2. 20 viola
	3. 21 violoncello
	4. 22 contrabajo

---

## según Hornbostel-Sachs


### 1. Aerófonos (4)

Instrumentos que producen sonido por vibración del aire sin uso de cuerdas o membranas.
- Flautas (421.12 – flautas traversas)
- Oboes (422.11 – oboes de lengüeta doble)
- Fagotes (422.11 – también lengüeta doble)
- Clarinetes (422.21 – lengüeta simple, tubo cilíndrico)
- Corno francés (423.1 – trompas naturales / valvuladas)
- Trompetas (423.2 – trompetas con válvulas)
- Trombones (423.22 – con vara deslizante)
- Tubas (423.23 – válvulas y tubo cónico)
- Acordeón (412.132 – aerófono libre, lengüetas libres en caja)
- Harmónica (412.132 – igual categoría que acordeón)
- Órgano (pipe organ: 421.2 – tubos de aire, pero también hay órganos electrónicos y electromecánicos)

---

### 2. Membranófonos (2)

Instrumentos cuyo sonido proviene de una membrana tensada que vibra.
- Timbales (211.11 – membranófonos con forma de caldero, golpeados)
- Batería / Drumset (211.2 – conjunto de varios membranófonos y algunos idiófonos)
- Percusión con parche (ej. tambor, bombo): 211.2 o variantes según morfología

---

### 3. Idiófonos (1)

Instrumentos cuyo cuerpo vibra completamente para generar sonido.
- Glockenspiel (111.212 – placas metálicas golpeadas)
- Celesta (aunque con teclado, las láminas resuenan por martillos: 111.222 + 53)
- Xilófono (111.212 – si se incluye)
- Campanas, placas, triángulo (111.242 – idiófonos suspendidos)
- Piano (es debatido; según Hornbostel-Sachs, es 314.122-4 – cordófono percutido por martillo, pero suele considerarse dentro de teclado e idiófonos por función)

---

### 4. Cordófonos (3)

Instrumentos que generan sonido mediante la vibración de cuerdas.
- Piano (314.122-4 – cordófono percutido con teclado)
- Arpa (322.22 – cuerdas punteadas verticalmente)
- Guitarra (321.322 – cuerdas punteadas con mango)
- Violín (321.322 – cuerdas frotadas con arco, sin trastes)
- Viola (321.322)
- Violoncello (321.322)
- Contrabajo (321.322)

---

### 5. Electrónicamente activados o voz humana (5 / 5’ / 52)

Instrumentos o fuentes donde la vibración no es mecánica.
- Coro / Voces (no se clasifica como instrumento, pero en sistemas extendidos: 5 – fuentes vocales naturales)
- Órgano eléctrico / sintetizador (53 – electrófonos puros)



---
# Escala perceptual multidimensional de timbres musicales segun Grey

```run-python
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Datos especulativos de posiciones timbricas en un espacio tridimensional
instrumentos = {
    "Flauta": (8, 2, 3),
    "Oboe": (6, 5, 4),
    "Clarinete": (4, 3, 6),
    "Fagot": (3, 4, 7),
    "Corno francés": (5, 5, 6),
    "Trompeta": (9, 4, 4),
    "Trombón": (6, 6, 6),
    "Tuba": (3, 5, 8),
    "Violín": (7, 4, 5),
    "Viola": (5, 4, 6),
    "Cello": (4, 4, 7),
    "Contrabajo": (3, 3, 8),
    "Arpa": (7, 2, 5),
    "Piano": (8, 3, 5),
    "Glockenspiel": (10, 1, 2),
    "Timbales": (5, 6, 7),
    "Xilófono": (9, 2, 3),
    "Batería": (6, 7, 6),
}

fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')

x = [v[0] for v in instrumentos.values()]
y = [v[1] for v in instrumentos.values()]
z = [v[2] for v in instrumentos.values()]
labels = list(instrumentos.keys())

ax.scatter(x, y, z, c='cyan', s=60, depthshade=True)

for i, label in enumerate(labels):
    ax.text(x[i], y[i], z[i], label, fontsize=9)

ax.set_xlabel("Brillantez")
ax.set_ylabel("Rugosidad")
ax.set_zlabel("Cuerpo / Profundidad")
ax.set_title("Mapa 3D de Cercanías Timbres Orquestales (Modelo Gray-Hartke)")

plt.tight_layout()
plt.show()

```

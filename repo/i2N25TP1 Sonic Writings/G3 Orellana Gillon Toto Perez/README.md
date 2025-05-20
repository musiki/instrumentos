# Bombo Experimental

Integrantes: Maggie Gillon, Camila Toto, Antonella Perez, Agostina Orellana

A partir del capitulo “Writing Music” (traducido al español como Escritura Musical) del libro Sonic Writings de Thor Magnusson, nos inspiramos en la notación musical del teórico italiano Guido D´Arezzo, quien utilizaba líneas de colores para las diferentes alturas tonales. Este nuevo instrumento que creamos pertenece a la familia de los membranófonos y no posee altura. Por este motivo, utilizamos colores con el fin de representar las distintas intensidades de un terremoto, otorgándole una tonalidad especifica a cada una de ellas mediante la escala de magnitud Richter.
Para ejecutar este instrumento, inventamos una notación que consiste en lo siguiente:

![](https://i.imgur.com/FcsAqLp.png)

Se presentan 5 líneas de distintos colores con grados que representan la escala sísmica:
- 2.0 (línea verde) muy leve.
- 4.0 (línea amarilla) moderado.
- 6.0 (línea naranja) fuerte.
- 8.0 (línea roja) destructivo.
- 10.0 (línea negra) desastrozo.
Esta notación no tiene pulso ni ritmo regular: cada circulo negro representa el golpe de la baqueta. En la membrana del bombo, hay 5 sectores en los cuales se distribuyen estas diferentes intensidades: el grado más fuerte se encuentra ubicado en el centro del parche y los mas leves ubicados en los extremos del mismo.
![](https://i.imgur.com/8jrT5Kg.png)


## BOMBO SÍSMICO EXPERIMENTAL
Bombo ubicado sobre el suelo, que al ser percutido en su parche superior, las vibraciones del mismo se trasmiten por su parche inferior, simulando sonidos y vibraciones de un terremoto.
A su vez genera colores que representan las intensidades valuadas en la escala Richter.
Al ser ejecutado, como anteriormente se explicó, su vibración sonora se expande a lo largo del espacio, en una forma de simulación, sin necesidad de llegar a las intensidades reales de un terremoto. Se busca que el espectador perciba la experiencia sensorial de este tipo de evento natural, sin sufrir sus consecuencias.
Este bombo experimental posee parches transparentes. En el interior del mismo se encuentran luces de diferentes colores, las cuales se proyectan a través de la membrana, propagándose así en el lugar. Estas luces no son al azar, sino que cada una corresponde al grado de magnitud Richter.

![](https://i.imgur.com/gCoy9DX.png)

IMAGEN 1.
![](https://i.imgur.com/Y4hypSZ.png)

IMAGEN 2.
![](https://i.imgur.com/CkCjGsa.png)

**IMAGEN 3.**
![](https://i.imgur.com/awtFRFf.png)

**IMAGEN 4.**
Código de programación de cada imagen:

## Imagen 1

```python
import matplotlib.pyplot as plt
import numpy as np

from matplotlib.patches import Rectangle, Circle, Polygon, Ellipse
from matplotlib.collections import PatchCollection

plt.style.use('dark_background')
fig, ax = plt.subplots(figsize=(10, 8))
ax.set_xlim(-5, 5)
ax.set_ylim(-5, 5)
ax.set_aspect('equal')
ax.axis('off')

# Membranophone base (bombo) - horizontal rectangle
bombo = Rectangle((-2, -1), 4, 2, facecolor='pink', edgecolor='white', linewidth=2)
ax.add_patch(bombo)

# Earthquake waves - concentric circles with Richter scale values
richter_colors = ['#00ff00', '#ffff00', '#ff8000', '#ff0000', '#800000']
richter_values = [2.0, 4.0, 6.0, 8.0, 10.0]
for i, (r, color) in enumerate(zip([1.5, 2.5, 3.5, 4.5, 5.5], richter_colors)):
	wave = Circle((0, -3), r, fill=False, color=color, linewidth=2, linestyle='--')
	ax.add_patch(wave)
	ax.text(0, -3-r-0.2, f'{richter_values[i]}', color='cyan', ha='center')

	# Percussion interface (top)
	striker = Polygon([[0, 1], [1, 0.5], [0, 0], [-1, 0.5]], closed=True,
	facecolor='orange', edgecolor='white')
	ax.add_patch(striker)
	
	# Impact arrow
	ax.arrow(0, 2, 0, -0.8, head_width=0.3, head_length=0.3, fc='white', ec='white')
	
	# Color-changing mechanism (bottom)
	color_wheel = Ellipse((0, -3), 1.5, 0.8, angle=45,
	facecolor='none', edgecolor='white', linewidth=2)
	ax.add_patch(color_wheel)

# Color spectrum
for i, color in enumerate(['red', 'green', 'blue', 'yellow', 'purple']):
	ax.add_patch(Rectangle((-4 + i*0.8, -4.5), 0.7, 0.7, facecolor=color))

	# Performer position
	ax.add_patch(Circle((0, 3), 0.3, facecolor='white', edgecolor='none'))
	ax.plot([0, 0], [2.7, 1.2], 'w:', linewidth=1)
	
	# Labels
	ax.text(0, 1.5, 'PERCUSIÓN', color='white', ha='center')
	ax.text(0, -1.5, 'BOMBO MEMBRANÓFONO', color='white', ha='center')
	ax.text(0, -4, 'GENERADOR SÍSMICO', color='white', ha='center')
	ax.text(-3.5, -5, 'ESCALA CROMÁTICA SÍSMICA', color='white')
	
	# Material indicators
	ax.text(2.5, 0, '3', color='pink') # Skin membrane
	ax.text(-3, -4, '6', color='orange') # Wooden frame
```



## Imagen 2

```python
# EXECUTE-CODE language: python, hide_output: false

import matplotlib.pyplot as plt
import io
import base64
import matplotlib.pyplot as plt
plt.rcParams['font.family'] = 'Segoe UI Emoji'  # Or 'Apple Color Emoji' or 'Noto Color Emoji'

matplotlib.use('Agg')

# Build figure
fig, ax = plt.subplots(figsize=(10, 8))
plt.gcf().patch.set_alpha(0.0)
ax.set_title('BOMBO SÍSMICO EXPERIMENTAL', color='#FF00FF', fontsize=16, pad=20)
ax.axis('off')

# Add minimal graphic content for test
ax.text(0.5, 0.5, '🎵 Bombo Sismico 🎵', color='white', fontsize=20, ha='center', va='center', transform=ax.transAxes)

# Save to memory
buf = io.BytesIO()
plt.savefig(buf, format='png', bbox_inches='tight', transparent=True, dpi=300)
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')

# OUTPUT ONLY RAW HTML (no print string prefix)
html_output = f'<img src="data:image/png;base64,{img_base64}" style="max-width: 100%;">'

# Direct output for Execute Code plugin to render as HTML
print(html_output)
```







Generamos las imagenes a partir del siguiente programa: [https://soog.zztt.org/](https://soog.zztt.org/)


**IMAGENES 3 Y 4**
Imágenes aproximadas a la idea del instrumento a través de META AI.
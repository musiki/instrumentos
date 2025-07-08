
La fórmula general para calcular la posición de los agujeros en una flauta de tubo abierto a partir de una escala en cents, se basa en la relación logarítmica entre la longitud del tubo acústico y la frecuencia.

⸻

Fórmula para calcular la posición de un agujero

Para una flauta cilíndrica con ambos extremos abiertos (como una flauta dulce o traversa simple), la frecuencia fundamental está dada por:

$$
f = \frac{v}{2L}
$$

Donde:
	•	$f$ es la frecuencia deseada (nota)
	•	$v$ es la velocidad del sonido (aprox. 343 m/s a 20°C)
	•	$L$ es la longitud acústica efectiva del tubo (desde el bisel hasta el extremo o agujero)

Para cada nota en cents respecto a la tónica, la relación de frecuencias es:

$$
f_n = f_0 \cdot 2^{\frac{c_n}{1200}}
$$

Entonces, la longitud desde el embocadura al agujero que produce esa nota es:

$$
L_n = \frac{v}{2f_n} = \frac{v}{2f_0 \cdot 2^{\frac{c_n}{1200}}} = \frac{L_0}{2^{\frac{c_n}{1200}}}
$$

Donde $L_0$ es la longitud total para la tónica ($c_0 = 0$).

⸻

Asunciones
	•	Tono fundamental: $C_4$ (Do4 = 261.63 Hz)
	•	Temperatura ambiente: 20°C ⇒ $v = 343$ m/s
	•	Longitud total de la flauta calculada para $C_4$:
$$
L_0 = \frac{343}{2 \cdot 261.63} \approx 0.655\ \text{m}
$$

⸻

1. Escala temperada en cents:

CENTS: 0 200 400 500 700 900 1100

Posición de agujeros:

$$
L_n = \frac{L_0}{2^{\frac{c_n}{1200}}}
$$

Nota	Cents	$L_n$ (m)	$L_n$ (mm)
C	0	0.655	655.0
D	200	0.583	582.9
E	400	0.519	518.9
F	500	0.490	489.7
G	700	0.436	435.9
A	900	0.388	387.9
B	1100	0.344	343.6


⸻

2. Escala inventada en cents:

CENTS: 0 168 369 510 720 860 1130

Paso	Cents	$L_n$ (m)	$L_n$ (mm)
1	0	0.655	655.0
2	168	0.597	597.3
3	369	0.524	523.9
4	510	0.478	478.1
5	720	0.430	429.6
6	860	0.396	395.9
7	1130	0.337	336.8


⸻

Observaciones
	1.	Estas son posiciones acústicas teóricas desde el bisel hasta el centro de cada agujero.
	2.	No se ha compensado aún por el efecto del diámetro del tubo, diámetro del agujero, ni por correcciones de embocadura o finger hole chimneys.
	3.	Este modelo supone agujeros simples y alineados, sin llaves ni registros.

¿Querés que pasemos esto a un esquema gráfico en Mermaid o SVG para ilustrar la geometría? También se puede convertir en script generativo (p. ej., en Python o JS para impresión 3D).



## para fusion360

```python
# === Escala definida en CENTS ===
# Escala: 0 168 369 510 720 860 1130
scale_cents = [0, 168, 369, 510, 720, 860, 1130]

# Parámetros acústicos
v = 343  # velocidad del sonido en m/s
f0 = 261.63  # frecuencia fundamental (Do4)
L0 = v / (2 * f0) * 1000  # longitud en mm

# Cálculo de posiciones desde embocadura
positions = [L0 / (2 ** (c / 1200)) for c in scale_cents]

# === Script para Fusion 360 ===
import adsk.core, adsk.fusion, traceback

def run(context):
    ui = None
    try:
        app = adsk.core.Application.get()
        ui = app.userInterface
        design = app.activeProduct

        # Crear nuevo componente
        rootComp = design.rootComponent
        occs = rootComp.occurrences
        transform = adsk.core.Matrix3D.create()
        newOcc = occs.addNewComponent(transform)
        comp = adsk.fusion.Component.cast(newOcc.component)

        # Parámetros de la flauta
        tube_length = 660  # mm (ligeramente más largo que L0)
        tube_radius = 10   # mm
        hole_radius = 2    # mm

        # Crear cilindro principal (flauta)
        sketches = comp.sketches
        xyPlane = comp.xYConstructionPlane
        sketch = sketches.add(xyPlane)
        sketchCircles = sketch.sketchCurves.sketchCircles
        sketchCircles.addByCenterRadius(adsk.core.Point3D.create(0, 0, 0), tube_radius)

        # Extrusión del tubo
        prof = sketch.profiles.item(0)
        extrudes = comp.features.extrudeFeatures
        distance = adsk.core.ValueInput.createByReal(tube_length)
        ext = extrudes.addSimple(prof, distance, adsk.fusion.FeatureOperations.NewBodyFeatureOperation)

        # Crear agujeros en el tubo
        for i, pos in enumerate(positions):
            # Crear plano en posición del agujero
            holePlane = comp.constructionPlanes.addByOffset(xyPlane, adsk.core.ValueInput.createByReal(pos))
            holeSketch = sketches.add(holePlane)
            holeSketchCircles = holeSketch.sketchCurves.sketchCircles
            holeSketchCircles.addByCenterRadius(adsk.core.Point3D.create(0, tube_radius, 0), hole_radius)

            # Extruir corte del agujero
            holeProf = holeSketch.profiles.item(0)
            holeExt = extrudes.addSimple(
                holeProf,
                adsk.core.ValueInput.createByReal(-tube_radius * 2),
                adsk.fusion.FeatureOperations.CutFeatureOperation
            )

        ui.messageBox("Flauta generada con escala personalizada.")

    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))
```

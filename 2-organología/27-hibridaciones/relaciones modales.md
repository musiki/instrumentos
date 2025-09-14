# Ontología de Relaciones Audiovisuales desde la Sincresis

## Sincresis (Chion 1994)
### Definición
- Fusión perceptual inmediata entre sonido e imagen
- Independiente de lógica racional
- Base de la percepción audiovisual integrada

---

### Dimensiones
#### **Dimensión Vertical (Relaciones Armónicas)**
- **Unísono audiovisual** (correspondencia realista)
- **Consonancia audiovisual** (refuerzo convencional de imagen y sonido)
- **Disonancia audiovisual** (discordancia perceptual)

---

#### **Dimensión Horizontal (Relaciones Temporales)**
- **Unísono temporal** (simultaneidad absoluta)
- **Animación temporal** (un medio dinamiza al otro)
- **Contrapunto audiovisual** (independencia estructural de imagen y sonido)

---

## Relaciones Audiovisuales según Basanta (2012)
### 1. Relación Isomórfica (Alta Sincresis)
#### **Subtipos**
- **Isomorfía física** (sonido y luz generados por el mismo fenómeno físico)
- **Isomorfía mapeada** (relación programada entre sonido y luz)

#### **Ejemplos**
- Condemned Bulbs (Artificiel)
- Láser Show (Robin Fox)

---

### 2. Coincidencia como Metáfora (Baja Sincresis)
- La simultaneidad de sonido y luz es metafórica, no perceptualmente integrada
- El sonido indica **presencia del objeto visual** más que una relación intrínseca

#### **Ejemplo**
- Klangbojen (Bernhard Gál)

![](https://www.youtube.com/watch?v=OoPfpSO-J48)

---

### 3. Relaciones Consonantes (Sincresis Parcial)
- Sonido y luz se refuerzan convencionalmente
- Aún cuando no provengan del mismo fenómeno, la relación es coherente

#### **Ejemplo**
- Array (United Visual Artists)
![](https://www.youtube.com/watch?v=I_k-icpVb9Y)

---

### 4. Relaciones Disonantes (Sincresis Parcial)
- Oposición de convenciones perceptuales
- La imagen y el sonido desafían la expectativa del espectador

#### **Ejemplo**
- Room Dynamics (Basanta)
![](https://www.youtube.com/watch?v=UQjLm1VZ-og)
- Horizontes de Sucesos (Azzigotti)
![](https://www.youtube.com/watch?v=2zwKj8rToko)
---

### 5. Relaciones Contrapuntísticas
- Imagen y sonido funcionan como **dos voces independientes**
- Aplicación de técnicas de **hocket, polifonía reglada**

#### **Ejemplo**
- Room Dynamics (Basanta), con variaciones de hocket audiovisual

---

## Factores que Modulan la Sincresis
### **1. Dimensión Perceptual**
- Fuerza del "pegamento perceptual" entre sonido e imagen
- Propiedades morfológicas compartidas refuerzan la unión

### **2. Dimensión Ecológica**
- ¿El sonido y la imagen son creíbles en un contexto real?
- Ejemplo: un golpe de puño con sonido de trueno es **disonante** pero puede ser aceptado en un contexto cinematográfico

### **3. Dimensión Temporal**
- Simultaneidad perfecta refuerza la fusión
- Pequeños desajustes pueden fortalecer o debilitar la sincresis

---

## Extensiones de la Ontología
### **1. Aplicación en la Composición Audiovisual**
- Uso de sincresis para reforzar la inmersión
- Aplicación en instalación interactiva y medios generativos

### **2. Relación con Crossmodalidad**
- Vinculación con estudios de percepción (Whitelaw 2008)
- Comparación con efectos como la **ilusión de McGurk**

### **3. Expansión a Espacios Multidimensionales**
- Propuesta de Basanta: Espacio de 3 ejes (Armonía, Temporalidad, Fuerza Perceptual)
- Visualización de relaciones audiovisuales como "trayectorias" en este espacio

---

## Referencias
- Chion, Michel. *Audio-Vision: Sound on Screen* (1994)
- Basanta, Adam. *Shades of Synchresis* (2012)
- Coulter, John. *Electroacoustic Music with Moving Images* (2010)
- Whitelaw, Mitchell. *Synaesthesia and Cross-Modality in Contemporary Audiovisuals* (2008)



```run-python
import plotly.express as px
import pandas as pd

# Define hierarchical data for audiovisual relations
data = [
    # Root category: Synchresis
    ("Sincresis", 0, 0, 1, "Raíz", 20),
    
    # Vertical relations (Harmony)
    ("Unísono Audiovisual", 1, 0, 0.9, "Armonía", 8),
    ("Consonancia Audiovisual", 1, 0.5, 0.7, "Armonía", 7),
    ("Disonancia Audiovisual", 1, -0.5, 0.5, "Armonía", 7),
    
    # Horizontal relations (Temporality)
    ("Unísono Temporal", -1, 0, 0.9, "Temporalidad", 8),
    ("Animación Temporal", -1, 0.5, 0.7, "Temporalidad", 7),
    ("Contrapunto Audiovisual", -1, -0.5, 0.5, "Temporalidad", 7),
    
    # Perceptual Bond Relations
    ("Relación Isomórfica", 0.5, 1, 0.8, "Perceptual Bond", 6),
    ("Coincidencia como Metáfora", -0.5, 1, 0.6, "Perceptual Bond", 6),
    ("Relaciones Consonantes", 0.5, -1, 0.6, "Perceptual Bond", 6),
    ("Relaciones Disonantes", -0.5, -1, 0.4, "Perceptual Bond", 6),
    ("Relaciones Contrapuntísticas", 0, 1, 0.5, "Perceptual Bond", 6)
]

# Create DataFrame
df = pd.DataFrame(data, columns=["Concepto", "X", "Y", "Z", "Categoría", "Peso"])

# Create 3D scatter plot
fig = px.scatter_3d(
    df, x="X", y="Y", z="Z",
    text="Concepto",
    color="Categoría",
    size="Peso",
    hover_name="Concepto",
    title="Distribución 3D de Relaciones Audiovisuales en el Espacio Sincresis",
    labels={"X": "Armonía", "Y": "Temporalidad", "Z": "Perceptual Bond"}
)

# Show figure
fig.show()
```


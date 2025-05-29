
# instrumentalidad aplicada para tecnologías DIY


taxonomía de instrumentalización tecnológica gradual desde la voz a sistemas complejos, con tecnologías disponibles para instrumentos hacelo-por-vos-mismo (DIY) 

## 0. voz
- Resonadores: cavidades internas del cuerpo
- Modulación: cuerdas vocales, boca, lengua
- Registro corporal de lo expresivo
## 1. instrumentos acústicos
- **Materiales**: cañas, madera, metal, cuerda
- Idiófonos, aerófonos, membranófonos
- Percusión de superficie (superficies de la vida cotidiana)
- **Concepto**: *instrumento-acción*, *instrumento-encontrado* (objet trouvé sonoro)

## 2. amplificación pasiva
- Cajas de resonancia DIY
- Tubos, embudos, membranas
- Estructuras de acoplamiento y caja acústica
- **Didáctica**: exploración de materiales como extensión del cuerpo
- **Filosofía**: *acoplamiento ecológico* (Gibson, Ingold)

## 3. amplificación: transductores de entrada
### mics diy
- Piezoeléctricos (mic de contacto)
- Electret (rescatados de celulares, componentes)
- Inductores (bobinas recicladas, diy, componentes)
- **Materiales**: cobre, cerámica, imanes, cápsulas recicladas
- mics dinámicos (de juguetes o componentes)
### acoplados al objeto
sensor de contacto vibración
inversión de speaker a mic

## 4. amplificación : transductores de salida
#### pre-amplificación
- Preamps simples (LM386, TL072)

#### amplificación
- Amplificadores clase D DIY (TPA3118)
#### actuadores
alto-parlantes
transductores
saser

## 5. manipuladores externos

motores DC
	cepillos de diente, batidores, vibradores, agitadores acústicos
	ventiladores de mano
activadores
servos
motores PAP

## 6. controladores interfaces analógicas
- potenciometros
- FSR (sensor de fuerza)
- LDR (sensor de luz)
- Conductividad (circuit bending)

## 7. sistemas embebidos
- Control digital de sensores y motores
- Generación de sonido por PWM, DACs o librerías específicas


(ordenadas por costo)
1. ATtiny
2. ESP8266 / ESP32
3. Arduino Nano / Uno
4. Teensy
5. Raspberry Pi Zero / 4
6. Bela


## 8. interfaces y protocolos de control
- touchpads baratos o caseros (conductividad, papel , aluminio)
- OSC, MIDI, HID
- Joysticks
- WebCams y Camaras conectables (OpenCV, MediaPipe)
- Trackpad, mouse, sensores capacitividos


## 9. hipérfonos

- HTML/CSS/JavaScript
- WebAudio API (síntesis, enrutamiento, filtros)
- Tone.js (sintetizador de alto nivel)
- MediaPipe (detección de gestos, manos, cuerpo)
- Three.js (visualización 3D de instrumentos)
- socket.io (para performance colectivas y chat musicales)
- MIDI OSC / WebSockets

maxmsp
	m4l
	 flucoma
	 rave

touchdesigner
     primitivos
     osc
## 10. Entornos de hiperrealidad

- Simulación física en tiempo real (GPU, WebGL, shaders)

#### en WEB
- three.js
- a-frame (multijugador avatares)
- play-canvas
- babylonjs

#### en entornos de juegos

- unity
- UnrealEngine

#### otros

- Control remoto en red (IoT socket.io  musical)
- Modelado acústico no lineal
- Instrumentos distribuidos (varios dispositivos sincronizados)
- Realidad aumentada con sonido interactivo  (spat)
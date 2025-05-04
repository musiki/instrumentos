#síntesisneural 

## ¿Qué es RAVE?
RAVE es un autocodificador, lo que significa que toma sonido como entrada, genera sonido como salida y se entrena para reconstruir los sonidos entrantes del conjunto de datos. Este procesamiento se basa en dos procesos separados

un proceso de codificación, en el que una ventana dada de audio entrante (digamos 2048 muestras) se transforma en un conjunto de variables latentes (128 parámetros en general)
y un proceso de descodificación, que invierte estas 128 variables latentes de nuevo en sonido.

Podemos describir así el proceso de transformación de RAVE: 

1. RAVE traduce el audio entrante en un conjunto de parámetros de síntesis, que se utilizan para generar de nuevo el sonido. 
2. Como cada modelo se entrena con un número limitado de datos (sonidos orquestales, sonidos de la NASA, etc.), intentará extraer estos parámetros incluso si el sonido de entrada no coincide con la base de datos original. Por ejemplo: si RAVE ha sido entrenado en sonidos de piano, y se le da un sonido de violín, intentará extraer de él parámetros de síntesis para generarlo como un sonido de piano.

Esta es también la razón por la que puedes usar RAVE como un efecto de audio transformando el audio entrante, pero también como un sintetizador controlando directamente estos parámetros de síntesis latentes. Como 128 dimensiones es demasiado para ser controladas manualmente, normalmente se reducen a ocho dimensiones, que puedes manipular dentro del VST.

Jugando con RAVE dentro del DAW

Uso de RAVE como efecto
RAVE VST es un efecto de audio, ya que puede transformar una entrada de audio con una red neuronal seleccionada. Sin embargo, puedes usarlo como sintetizador; lo veremos más adelante. Si abres el editor de plug-ins, verás esta interfaz :

![](https://i.imgur.com/q2RJigU.png)
Menú de selección de modelo : donde se selecciona el modelo RAVE que se está reproduciendo.

Explorador de modelos : abre la interfaz para descargar modelos del sitio web del Foro.

Información : muestra información sobre RAVE VST.
Ruido latente : inyecta algo de ruido en las variables latentes del audio entrante.

Anchura estéreo : recrea el estéreo a partir de modelos mono aleatorizando algunas variables latentes antes de la decodificación.

Usar Prior : si está disponible, usa prior a las latentes generadas
Latent Bias : sesga las latentes con un valor estático
Escala latente: escala la trayectoria entrante en un factor estático.
Mute with Playback : corta la salida del plug-in cuando la DAW está en pausa
Gain : ganancia de entrada del audio entrante antes de la transformación del modelo.
Channel mode : si el modelo es mono (todos lo han sido hasta ahora), qué canal seleccionar para la transformación : L, R, o (L+R)
Umbral : umbral de compresión del audio antes de la transformación
Ratio : umbral de compresión del audio antes de la transformación
Dry/Wet : mezcla la salida del modelo con la señal seca
Ganancia : ganancia global de salida
Latencia : el tamaño del búfer que se utilizará para la transformación del modelo. Un tamaño de búfer bajo significa poca latencia, pero una mayor sobrecarga de la CPU.
Latencia adaptativa : cuando está activada, calcula el tiempo de transformación del modelo para añadirlo a la latencia global. Si se activa, se actualiza el cálculo de la latencia.
Esto puede ser un poco complicado a primera vista, así que vamos a hacerlo funcionar paso a paso. Para hacer que RAVE VST transforme el sonido, primero tienes que seleccionar un modelo en el menú de Selección de Modelo (1). Si es la primera vez que instalas RAVE VST, no deberías tener ningún modelo disponible; si es así, primero tendrás que hacer clic en el Explorador de modelos (2) para acceder al panel Explorador de modelos (captura de pantalla de abajo) selecciona un modelo en la lista de la izquierda (18), y luego haz clic en el botón Descargar (20). También puede importar un modelo personalizado utilizando el botón Importar su modelo personalizado (19). A continuación, vuelva a la interfaz principal haciendo clic en Reproducir (21)
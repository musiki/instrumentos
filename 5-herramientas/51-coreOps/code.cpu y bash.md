

## 🏗️ ¿Qué es una computadora moderna?

- Un sistema compuesto por múltiples componentes físicos (hardware) y software.
- Permite procesar información, ejecutar programas y realizar cálculos.

---

## ⚙️ CPU - Unidad Central de Procesamiento

- Conocida como el "cerebro" de la computadora.
- Ejecuta instrucciones y cálculos lógicos.
- **Ejemplo:** Intel i9, AMD Ryzen 9.

---

## 🎮 GPU - Unidad de Procesamiento Gráfico

- Especializada en renderizado de gráficos.
- Acelera procesos visuales en juegos y edición de video.
- **Ejemplo:** NVIDIA RTX 3090, AMD Radeon RX 6800.

---

## 🛠️ Memoria RAM y ROM

- **RAM**: Memoria volátil, almacena datos temporales.
- **ROM**: Memoria permanente, usada para el firmware.
- **Ejemplo de RAM:** 16GB DDR4.
- **Ejemplo de ROM:** BIOS/UEFI.

---

## 💾 Almacenamiento - HDD vs SSD

- **HDD (Disco Duro Mecánico)**: Más barato, pero más lento.
- **SSD (Unidad de Estado Sólido)**: Más rápido y eficiente.
- **Ejemplo:** SSD NVMe 1TB vs HDD 1TB.

---

## 🎤 Periféricos de Entrada y Salida

- **Entrada:** Teclado, ratón, micrófono, escáner.
- **Salida:** Monitor, altavoces, impresora.

---

# 🖥️ Introducción a Bash
## 📜 ¿Qué es Bash?

- Bash es un **intérprete de comandos** usado en sistemas Unix y Linux.
- Permite interactuar con el sistema operativo desde la terminal.

---

### 📂 `ls` - Listar archivos
```bash
ls
ls -l
ls -la
```
📝 **Tip:** `ls -la` muestra archivos ocultos.

---

### 📌 `cd` - Cambiar de directorio
```bash
cd /home/usuario
cd ..
cd ~
```
📝 **Tip:** `cd ..` sube un nivel en la estructura de carpetas.

---


## 🧭 Comandos equivalentes: Linux ↔ Windows

| Acción                     | Linux     | Windows CMD      | PowerShell                     |
|---------------------------|-----------|------------------|--------------------------------|
| Listar archivos           | `ls`      | `dir`            | `Get-ChildItem` (`ls` alias)   |
| Crear carpeta             | `mkdir`   | `mkdir` / `md`   | `mkdir` (`New-Item -ItemType Directory`) |
| Mover archivo/carpeta     | `mv`      | `move`           | `Move-Item`                    |
| Copiar archivo/carpeta    | `cp`      | `copy` / `xcopy` | `Copy-Item`                    |
| Borrar archivo            | `rm file` | `del file`       | `Remove-Item file`             |
| Borrar carpeta            | `rm -r`   | `rmdir /S`       | `Remove-Item -Recurse`         |
| Cambiar carpeta           | `cd`      | `cd`             | `Set-Location` (`cd` alias)    |
| Ver contenido archivo     | `cat`     | `type`           | `Get-Content` (`cat` alias)    |
| Limpiar pantalla          | `clear`   | `cls`            | `Clear-Host` (`cls` alias)     |

---


⸻

🧠 Notas
	•	PowerShell permite usar alias Unix-like, por lo que podés escribir ls, cat, mv, etc., y funcionarán.
	•	En CMD clásico, los comandos son más limitados y menos consistentes.

⸻


### 🛠️ `mkdir` - Crear carpetas
```bash
mkdir nueva_carpeta
```
📝 **Tip:** Usa `mkdir -p` para crear subdirectorios.

---

### 📋 `cp` - Copiar archivos
```bash
cp archivo.txt copia.txt
```
📝 **Tip:** `cp -r` copia carpetas completas.

---

### 🔄 `mv` - Mover y renombrar archivos
```bash
mv archivo.txt nueva_ruta/
mv archivo.txt nuevo_nombre.txt
```

---

### 🗑️ `rm` - Eliminar archivos y carpetas
```bash
rm archivo.txt
rm -rf carpeta/
```
⚠️ **¡Cuidado!** `rm -rf` elimina sin confirmación.

---

### 🌎 `pwd` - Mostrar ruta actual
```bash
pwd
```
📍 Muestra la ubicación actual en el sistema.

---

### 🛠️ `.bashrc` y `.zshrc` - Configuración del shell
```bash
nano ~/.bashrc
source ~/.bashrc
```
📌 **Permite personalizar la terminal.**

---

### 📦 Manejadores de paquetes
```bash
brew install nombre_paquete   # MacOS
choco install nombre_paquete  # Windows
```
📦 **Facilitan la instalación de programas en sistemas operativos.**

---

### 📄 `cat` y `echo` - Ver y escribir en archivos
```bash
cat archivo.txt
echo "Hola" > nuevo.txt
```
📌 `cat` muestra contenido, `echo` escribe en archivos.

---

### ⚠️ `kill` y `top` - Gestionar procesos
```bash
top
kill PID
```
📌 `top` muestra procesos activos, `kill` los detiene.

---

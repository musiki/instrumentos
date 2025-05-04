Here’s a step-by-step tutorial in Markdown format for Obsidian on how to use Git as a local version control system, creating and tracking changes to text files.

# Git Local Version Control Tutorial

## 📝 Introduction
This tutorial guides you through **basic Git version control** using a simple workflow with `.txt` files. You will:
1. Create files and track changes.
2. Commit different versions.
3. Use Git to **check, restore, and recover** past versions.



## ✅ **Step 1: Initialize Git**
First, navigate to your project folder in the terminal:
```sh
mkdir git-test && cd git-test
```


Initialize a new Git repository:

```
git init
```

✍️ Step 2: Create and Commit the First Version

Create 1.txt and add initial content:

```
echo "hello version 1" > 1.txt
```
Check the file:

```
cat 1.txt
```
Add the file to Git and commit it:

```
git add 1.txt
git commit -m "Added 1.txt with version 1"
```
✍️ Step 3: Modify the File and Commit Again

Modify 1.txt:

```
echo "hello version 2" > 1.txt
```
Check the change:

```
cat 1.txt
```
Stage and commit:

```
git add 1.txt
git commit -m "Updated 1.txt to version 2"
```
✍️ Step 4: Add a New File

Create another file:

```
echo "hello 2 version 1" > 2.txt
```
Add and commit:

```
git add 2.txt
git commit -m "Added 2.txt with version 1"
```
🔍 Step 5: View Git History

To see commit history:

```
git log --oneline --graph --all
```
To view detailed changes:

```
git log -p
```

♻️ Step 6: Restore an Old Version

To check previous commits:

```
git log --oneline
```

Restore 1.txt from the first commit:

```
git checkout <commit-hash> -- 1.txt
```

Verify:

```
cat 1.txt
```

🚨 Step 7: Undo a Commit

To undo the last commit but keep changes:

```
git reset HEAD~
```

To undo and delete the changes:

```
git reset --hard HEAD~
```

💾 Step 8: Create a Backup Branch

Before making risky changes, create a backup:

```
git branch backup-main
```

Switch back if needed:

```
git checkout backup-main
```

🛑 Step 9: Use Stash for Temporary Backups

If you need to switch branches but have unfinished changes:

```
git stash
```

Restore later:

```
git stash pop
```

🎯 Summary

✔ Track changes: git log --oneline
✔ Recover files: git checkout \<commit-hash> file.txt
✔ Undo commits: git reset HEAD~
✔ Create backup branch: git branch backup-main
✔ Temporary backup: git stash

🚀 Now you can manage and recover versions of files using Git locally!



# Para manejar versiones de código de manera ordenada


y sin subir cada cambio al repositorio remoto, te recomiendo un flujo basado en snapshots locales con Git, aprovechando git stash, branches temporales, y etiquetas (tags) para marcar versiones clave.

✅ Mejor práctica para gestionar versiones en Cursor con Git

1. Configurar un flujo de versiones locales con snapshots

Cada vez que pidas un cambio significativo en Cursor, puedes hacer un snapshot del estado actual del código sin subirlo a GitHub. Esto te permite:
	•	Volver a cualquier estado anterior fácilmente.
	•	No llenar el historial de commits con pequeños cambios.
	•	Evitar conflictos innecesarios con el repositorio remoto.

🚀 Método recomendado:
	1.	Inicia un nuevo branch de desarrollo

```
git checkout -b dev-cursor
```
Esto separa tu trabajo de main o master.
	2.	Cada cierto número de cambios, crea un snapshot local

```
git commit -am "Snapshot: versión estable con cambios en X"
```

Si tienes archivos sin trackear aún:


```
git add .
git commit -m "Snapshot: cambios en Y"
```

Esto te permite mantener una historia limpia sin subirlo aún al repositorio.
	3.	Usar tags para marcar versiones clave
Cuando alcances una versión importante que podrías querer recuperar en el futuro, usa un tag:

git tag snapshot-v1

Y para ver los snapshots guardados:

```
git tag
```


Para volver a un snapshot en el futuro:


```
git checkout snapshot-v1
```

	4.	Usar stash para pruebas sin ensuciar el historial
Si estás probando algo pero no estás seguro de si vale la pena guardar el cambio:

```
git stash
```

Para restaurar los cambios:

```
git stash pop
```

Si decides que un stash es importante, puedes convertirlo en un commit:

```
git stash apply
git commit -am "Recuperando cambios del stash"
```
	5.	Una vez seguro de los cambios, fusionar con main o subir al remoto
Cuando tengas una versión estable y probada, puedes fusionarla con main y subirla:

```
git checkout main
git merge dev-cursor
git push origin main
```
🎯 Resumen del flujo óptimo

✔ Trabajar en dev-cursor
✔ Hacer snapshots con commits locales
✔ Usar git tag para marcar versiones clave
✔ Usar git stash para cambios temporales
✔ Solo subir cambios cuando sea necesario

💡 Este método te da control total sobre tu código sin llenar el repositorio con versiones innecesarias. 🚀
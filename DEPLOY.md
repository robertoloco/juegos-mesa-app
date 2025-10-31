# 🚀 Guía Rápida de Despliegue

## Opción 1: GitHub Desktop (Más Fácil)

1. **Abre GitHub Desktop**
2. **File → Add Local Repository**
3. Selecciona la carpeta: `C:\Users\rober\Documents\GitHub\juegos-mesa-app`
4. Click en **"Publish repository"**
5. Asegúrate de que **"Keep this code private"** esté DESMARCADO (para que GitHub Pages funcione gratis)
6. Click en **Publish**

### Activar GitHub Pages:

1. Ve a tu repositorio en GitHub.com
2. **Settings** → **Pages** (menú lateral izquierdo)
3. En **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
4. **Save**
5. Espera 1-2 minutos

✅ **Tu sitio estará en**: `https://TU_USUARIO.github.io/juegos-mesa-app/`

---

## Opción 2: Línea de Comandos

```powershell
# 1. Inicializar git (si no está inicializado)
cd C:\Users\rober\Documents\GitHub\juegos-mesa-app
git init

# 2. Hacer commit de los archivos
git add .
git commit -m "Initial commit: Juegos de Grupo"

# 3. Crear repositorio en GitHub.com primero, luego:
git remote add origin https://github.com/TU_USUARIO/juegos-mesa-app.git
git branch -M main
git push -u origin main

# 4. Activar GitHub Pages (ver arriba)
```

---

## 🧪 Probar Localmente

Abre directamente el archivo en tu navegador:
```
C:\Users\rober\Documents\GitHub\juegos-mesa-app\index.html
```

O usa un servidor local:
```powershell
# Con Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

---

## ✅ Checklist

- [ ] Repositorio creado en GitHub
- [ ] Código subido (push)
- [ ] Repositorio es público
- [ ] GitHub Pages activado en Settings → Pages
- [ ] Esperado 1-2 minutos para que se active
- [ ] Probado la URL: `https://TU_USUARIO.github.io/juegos-mesa-app/`

---

## 🐛 Problemas Comunes

**"404 - Not Found"**
→ Espera 2-3 minutos más, GitHub Pages tarda en activarse

**"403 - Forbidden"**
→ Tu repositorio debe ser público (Settings → General → Change visibility)

**"Sala no encontrada" al probar**
→ Es normal, necesitas crear una sala primero como organizador

---

## 🎉 ¡Ya está!

Comparte la URL con tu grupo y ¡a jugar!

# 🎮 Juegos de Grupo - Plataforma Web

Plataforma para jugar **Blanco** y **El Lobo** en grupo desde cualquier dispositivo móvil.

## 🎯 Características

- ✅ **Sin backend necesario** - Todo funciona con localStorage del navegador
- 📱 **Móvil-friendly** - Diseño responsive optimizado para móviles
- 🎲 **Dos juegos incluidos**:
  - **Blanco**: Descubre quién no tiene la palabra secreta
  - **El Lobo**: Aldeanos vs Lobos - ¿quién sobrevivirá?
- 🔒 **Salas privadas** - Código único de 4 caracteres para cada sala
- ⏱️ **Auto-limpieza** - Las salas se borran automáticamente después de 24 horas

## 🚀 Cómo usarlo

1. **El organizador**:
   - Selecciona "Crear Nueva Sala"
   - Elige el juego (Blanco o El Lobo)
   - Introduce la palabra secreta (solo para Blanco)
   - Introduce los nombres de todos los jugadores separados por comas
   - Comparte el código de sala de 4 caracteres

2. **Cada jugador**:
   - Selecciona "Unirse a Sala"
   - Introduce su nombre exacto y el código de sala
   - Ve su rol asignado secretamente

## 📦 Desplegar en GitHub Pages

### Paso 1: Crear el repositorio

```powershell
# Si ya estás en el directorio juegos-mesa-app:
git init
git add index.html README.md
git commit -m "Initial commit: Juegos de Grupo"
```

### Paso 2: Subir a GitHub

```powershell
# Crear repo en GitHub y conectarlo
git remote add origin https://github.com/TU_USUARIO/juegos-mesa-app.git
git branch -M main
git push -u origin main
```

O usa GitHub Desktop:
1. Abre GitHub Desktop
2. File → Add Local Repository
3. Selecciona la carpeta `juegos-mesa-app`
4. Publish repository

### Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en **Save**
6. Espera 1-2 minutos

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/juegos-mesa-app/
```

## 🔧 Tecnologías

- **HTML5** - Estructura
- **CSS3** - Estilos modernos con gradientes y animaciones
- **JavaScript Vanilla** - Sin dependencias externas
- **localStorage** - Persistencia de salas (sin servidor)

## 💾 ¿Necesito un backend?

**No**. Esta aplicación usa `localStorage` del navegador, que es:

✅ **Ventajas**:
- 100% gratis
- No necesita servidor
- Funciona en GitHub Pages
- Perfecto para grupos pequeños (5-15 personas)
- Sin configuración

⚠️ **Limitaciones**:
- Las salas solo existen en el navegador del organizador
- Si el organizador cierra/recarga la página, otros pueden unirse pero no se crean nuevas salas
- Cada navegador tiene su propio localStorage independiente
- Máximo ~5-10MB de datos

### Si necesitas backend real (opcional)

Si tu grupo es muy grande o quieres persistencia permanente, considera:

**Opción 1: Firebase (Recomendado - Gratis)**
- Firebase Realtime Database tiene plan gratuito generoso
- Sincronización en tiempo real entre dispositivos
- [Tutorial rápido aquí](https://firebase.google.com/docs/database/web/start)

**Opción 2: Supabase (Gratis)**
- PostgreSQL con API REST automática
- 500MB de base de datos gratis
- [Supabase.com](https://supabase.com/)

**Opción 3: Vercel + Serverless Functions (Gratis)**
- Funciones serverless gratuitas
- Perfecto para lógica simple
- [Vercel.com](https://vercel.com/)

## 🎮 Reglas de los Juegos

### 🎭 Blanco
1. Todos los jugadores reciben la misma palabra excepto uno (el Blanco)
2. El Blanco recibe "BLANCO" en lugar de la palabra
3. Por turnos, cada jugador da una pista sobre su palabra
4. El objetivo:
   - **Blanco**: Adivinar la palabra sin ser descubierto
   - **Otros**: Descubrir quién es el Blanco sin revelar la palabra

### 🐺 El Lobo
1. Algunos jugadores son Lobos, el resto Aldeanos
2. Los Lobos se conocen entre sí
3. De día, todos votan para eliminar a alguien
4. De noche, los Lobos eligen eliminar a un Aldeano
5. El objetivo:
   - **Lobos**: Eliminar a todos los Aldeanos
   - **Aldeanos**: Eliminar a todos los Lobos

## 📱 Compatibilidad

- ✅ Chrome (Android/iOS)
- ✅ Safari (iOS)
- ✅ Firefox (Android)
- ✅ Edge (Windows/Android)

## 🐛 Solución de problemas

**"Sala no encontrada"**
- Verifica que el código esté correcto (4 caracteres)
- La sala existe solo en el navegador del organizador
- Las salas se borran después de 24 horas

**"Tu nombre no está en la lista"**
- Escribe tu nombre exactamente como lo puso el organizador
- Los espacios importan: "Juan" ≠ "Juan " ≠ " Juan"

**La página no carga**
- GitHub Pages tarda 1-2 minutos en activarse la primera vez
- Limpia la caché del navegador (Ctrl+F5)
- Verifica que el repositorio sea público

## 📄 Licencia

MIT - Usa, modifica y comparte libremente

## 🤝 Contribuciones

¿Ideas para más juegos? ¡Abre un Issue o Pull Request!

Ideas futuras:
- Mafia
- Among Us (versión física)
- Resistencia
- Secret Hitler

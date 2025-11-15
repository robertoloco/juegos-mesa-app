# 🎮 Juegos de Grupo - Plataforma Web

Plataforma para jugar **Blanco**, **El Lobo**, **Código Secreto**, **Quick Stop** y **Love Letter** en grupo desde cualquier dispositivo móvil.

## 🎯 Características

- 🔥 **Backend con Firebase** - Sincronización en tiempo real entre dispositivos
- 📱 **Móvil-friendly** - Diseño responsive optimizado para móviles
- 🎲 **Cinco juegos incluidos**:
  - **Blanco**: Descubre quién no tiene la palabra secreta
  - **El Lobo**: Aldeanos vs Lobos - ¿quién sobrevivirá?
  - **Código Secreto (Codenames)**: Equipos compiten encontrando agentes
  - **Quick Stop (Basta!)**: Completa categorías con la letra indicada
  - **Love Letter**: Juego de deducción y faroleo con cartas
- 🔒 **Salas privadas** - Código único de 4 caracteres para cada sala
- ⏱️ **Auto-limpieza** - Las salas se borran automáticamente después de 24 horas
- 🆓 **100% Gratis** - Firebase tiene plan gratuito generoso

## ⚙️ Configuración de Firebase (REQUERIDO)

### Paso 1: Crear proyecto en Firebase

1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Haz clic en **"Agregar proyecto"**
3. Nombra tu proyecto (ej: `juegos-mesa-app`)
4. Desactiva Google Analytics (no lo necesitas)
5. Haz clic en **"Crear proyecto"**

### Paso 2: Configurar Realtime Database

1. En el menú lateral: **Build → Realtime Database**
2. Haz clic en **"Crear base de datos"**
3. Selecciona ubicación (ej: `United States (us-central1)`)
4. **Importante**: Selecciona **"Empezar en modo de prueba"**
5. Haz clic en **"Habilitar"**

### Paso 3: Obtener credenciales

1. Haz clic en el ícono de engranaje ⛙️ junto a "Visión general del proyecto"
2. Selecciona **"Configuración del proyecto"**
3. En la sección "Tus apps", haz clic en el botón **`</>`** (Web)
4. Nombra tu app (ej: `juegos-web`)
5. Copia la configuración que aparece
6. Abre el archivo `firebase-config.js` en tu proyecto
7. Reemplaza los valores `TU_XXX_AQUI` con los valores de Firebase

**Ejemplo de cómo debe quedar:**

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPp",
  authDomain: "juegos-mesa-app.firebaseapp.com",
  databaseURL: "https://juegos-mesa-app-default-rtdb.firebaseio.com",
  projectId: "juegos-mesa-app",
  storageBucket: "juegos-mesa-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### Paso 4: Configurar reglas de seguridad (Opcional pero recomendado)

Para producción, actualiza las reglas en **Realtime Database → Reglas**:

```json
{
  "rules": {
    "rooms": {
      "$roomCode": {
        ".read": true,
        ".write": true,
        ".indexOn": ["createdAt"]
      }
    }
  }
}
```

## 🚀 Cómo usarlo

1. **El organizador**:
   - Selecciona "Crear Nueva Sala"
   - Elige el juego (Blanco, Lobo, Código Secreto, Quick Stop o Love Letter)
   - Configura el juego según sea necesario
   - Comparte el código de sala de 4 caracteres

2. **Cada jugador**:
   - Selecciona "Unirse a Sala"
   - Introduce su nombre y el código de sala
   - Ve su rol o comienza a jugar

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
- **Firebase Realtime Database** - Sincronización en tiempo real

## 💾 Backend con Firebase

Esta aplicación usa **Firebase Realtime Database**, que ofrece:

✅ **Ventajas**:
- 🆓 **100% gratis** hasta 10GB de datos y 100k conexiones simultáneas
- 🔄 **Sincronización en tiempo real** entre todos los dispositivos
- ☁️ **Sin servidor propio** - Firebase se encarga de todo
- 🔒 **Salas compartidas** - Todos pueden acceder con el código
- ⏱️ **Auto-limpieza** - Las salas se borran automáticamente después de 24h

### Límites del plan gratuito

- 1GB de datos almacenados
- 10GB de transferencia mensual
- 100k conexiones simultáneas

**💡 Perfecto para grupos de hasta 100+ jugadores**

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

### 🔐 Código Secreto (Codenames)
1. Dos equipos (Rojo y Azul) con un "spymaster" cada uno
2. Tablero de 25 palabras con roles:
   - 9 agentes rojos
   - 8 agentes azules
   - 7 transeúntes inocentes
   - 1 asesino (💥 pierdes instantáneamente si lo eliges)
3. El **spymaster** ve todos los roles y da pistas de UNA palabra + número
   - Ejemplo: "animales 3" (3 palabras relacionadas con animales)
4. El **equipo** adivina las palabras basándose en la pista
5. Gana el equipo que encuentre todos sus agentes primero

### 🏃 Quick Stop (Basta / Stop / Tutti Frutti)
1. Categorías predefinidas: Nombre, Animal, Ciudad, Objeto, Comida, Color
2. Una letra aleatoria se elige al inicio de cada ronda
3. Todos escriben palabras que empiecen con esa letra para cada categoría
4. El primero en terminar grita "¡STOP!"
5. Puntuación:
   - Respuesta única: **10 puntos**
   - Respuesta repetida: **5 puntos**
   - Sin respuesta: **0 puntos**
6. Se juegan varias rondas y gana quien tenga más puntos totales

### 💌 Love Letter
1. Cada jugador comienza con 1 carta en su mano
2. En tu turno: robas 1 carta y luego juegas 1 carta
3. Cada carta tiene un efecto especial:
   - **Guardia (1)**: Adivina la carta de un jugador
   - **Sacerdote (2)**: Mira la carta de un jugador
   - **Barón (3)**: Compara tu carta con otro jugador
   - **Doncella (4)**: Estás protegido hasta tu próximo turno
   - **Príncipe (5)**: Un jugador descarta y roba una nueva carta
   - **Rey (6)**: Intercambia tu carta con otro jugador
   - **Condesa (7)**: Debes jugarla si tienes Rey o Príncipe
   - **Princesa (8)**: Si la descartas, quedas eliminado
4. Gana la ronda el último jugador en pie o quien tenga la carta más alta
5. El primer jugador en alcanzar los puntos objetivo gana la partida

## 📱 Compatibilidad

- ✅ Chrome (Android/iOS)
- ✅ Safari (iOS)
- ✅ Firefox (Android)
- ✅ Edge (Windows/Android)

## 🐛 Solución de problemas

**"Sala no encontrada"**
- Verifica que el código esté correcto (4 caracteres)
- Asegúrate de haber configurado Firebase correctamente
- Las salas se borran después de 24 horas

**"Tu nombre no está en la lista"** (Blanco/Lobo/Código Secreto)
- Escribe tu nombre exactamente como lo puso el organizador
- Los espacios importan: "Juan" ≠ "Juan " ≠ " Juan"

**"Error al crear sala" o "Error al unirse"**
- Revisa que hayas configurado `firebase-config.js` correctamente
- Abre la consola del navegador (F12) para ver el error específico
- Verifica que la Realtime Database esté creada y en modo de prueba

**La página no carga**
- GitHub Pages tarda 1-2 minutos en activarse la primera vez
- Limpia la caché del navegador (Ctrl+F5)
- Verifica que el repositorio sea público
- Asegúrate de que `firebase-config.js` esté en la raíz del proyecto

## 📄 Licencia

MIT - Usa, modifica y comparte libremente

## 🤝 Contribuciones

¿Ideas para más juegos? ¡Abre un Issue o Pull Request!

Ideas futuras:
- Mafia
- Among Us (versión física)
- Resistencia
- Secret Hitler

---

## 💌 Love Letter - Integración

**NOTA**: Love Letter está implementado pero requiere integración manual en `index.html`. 

Sigue las instrucciones en `LOVE-LETTER-INTEGRATION.md` para añadir el juego completo.

Archivos:
- `loveletter-implementation.js` - Código completo del juego
- `LOVE-LETTER-INTEGRATION.md` - Guía paso a paso para integrar

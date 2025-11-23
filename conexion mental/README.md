# 🧠 Conexión Mental

**El juego de palabras definitivo para jugar con amigos**

[![Jugar Ahora](https://img.shields.io/badge/Jugar-Ahora-blueviolet?style=for-the-badge)](https://tuusuario.github.io/conexion-mental/)

## 🎮 ¿Qué es?

Conexión Mental es un juego estilo **Tabú/Alias** moderno y optimizado para móviles. Perfecto para fiestas, reuniones familiares o simplemente pasar un buen rato con amigos.

## ✨ Características

- 🎯 **3 Niveles de dificultad**: Fácil, Medio, Difícil
- 📱 **100% Móvil-Responsive**: Diseñado para jugar en el móvil
- 👥 **2-6 Equipos**: Configurable según jugadores
- ⏱️ **Temporizador Personalizable**: De 15 a 120 segundos
- 📚 **300+ Palabras Reales**: En castellano con definiciones auténticas
- 🎨 **Diseño Moderno**: Gradientes, animaciones y efectos visuales
- 📳 **Vibración Táctil**: Feedback al acertar (en móviles compatibles)
- 🏆 **Sistema de Puntuación**: Primer equipo en 10 puntos gana
- 💡 **Sistema de Pistas**: Ver definición si necesitas ayuda
- ⏸️ **Pausa**: Detén el juego cuando quieras

## 🚀 Cómo Jugar

1. **Selecciona la dificultad** (Fácil recomendado para empezar)
2. **Elige el número de equipos** (2-6)
3. **Ajusta el tiempo** por ronda (30s recomendado)
4. **¡Comenzar!**

### Durante el juego:

- Una palabra aparece en pantalla
- Tu equipo debe adivinarla usando descripciones
- **NO puedes decir la palabra** ni sus derivados
- Si la adivinan, **toca tu equipo** para sumar punto
- Si no la saben, pulsa **PASAR** para siguiente palabra
- Si necesitas ayuda, pulsa **VER PISTA**

**¡Primer equipo en 10 puntos gana!** 🏆

## 📦 Estructura del Proyecto

```
conexion-mental/
├── index.html       # HTML principal
├── style.css        # Estilos modernos
├── app.js           # Lógica del juego
├── palabras.js      # Diccionario castellano
└── README.md        # Este archivo
```

## 🌐 Publicar en GitHub Pages

### Opción 1: Desde GitHub Web

1. Sube los archivos a tu repositorio
2. Ve a **Settings** → **Pages**
3. En **Source** selecciona `main` branch
4. Guarda y espera 2-3 minutos
5. Tu juego estará en: `https://tuusuario.github.io/nombre-repo/`

### Opción 2: Desde la Terminal

```bash
git add .
git commit -m "🎮 Juego Conexión Mental completo"
git push origin main
```

Luego activa GitHub Pages en la configuración del repositorio.

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones, gradientes, flexbox, grid
- **JavaScript Vanilla**: Sin dependencias
- **Mobile-First Design**: Optimizado para móviles

## 📱 Compatibilidad

✅ Chrome (Desktop & Mobile)  
✅ Safari (iOS & macOS)  
✅ Firefox  
✅ Edge  
✅ Opera  

## 🎨 Personalización

### Cambiar colores de equipos

Edita en `app.js` línea 27:

```javascript
const colores = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
```

### Añadir más palabras

Edita `palabras.js` y añade objetos al array:

```javascript
{ palabra: "Nueva", definicion: "Descripción aquí" }
```

### Cambiar puntos para ganar

Edita `app.js` línea 81:

```javascript
if (equipos[index].puntos >= 10) { // Cambia 10 por lo que quieras
```

## 🐛 Soporte

¿Encontraste un bug? [Abre un issue](https://github.com/tuusuario/conexion-mental/issues)

## 📄 Licencia

MIT License - Siéntete libre de usar, modificar y compartir

## 🙌 Créditos

Desarrollado con ❤️ para jugar con amigos

---

**¡Disfruta el juego!** 🎉

¿Te gustó? Dale ⭐ al repositorio

# 💌 Integración de Love Letter - Instrucciones

## Archivos involucrados
- `index.html` - Archivo principal donde se añadirán los cambios
- `loveletter-implementation.js` - Código completo del juego (ya creado)

## Pasos para integrar

### 1. Añadir la tarjeta del juego en la pantalla de creación

En `index.html`, busca las tarjetas de juegos (alrededor de línea 287-290) y añade DESPUÉS de Quick Stop:

```html
<div class="game-card" onclick="selectGame('loveletter')">
    <h3>💌 Love Letter</h3>
    <p>Juego de deducción y faroleo. Sé el último en pie o termina con la carta más alta.</p>
</div>
```

### 2. Añadir configuración específica de Love Letter

Busca las configuraciones de juegos (alrededor de línea 303-311) y añade DESPUÉS de quickstopConfig:

```html
<!-- Configuración Love Letter -->
<div id="loveletterConfig" class="hidden">
    <label>Puntos para Ganar:</label>
    <input type="number" id="pointsToWin" value="4" min="2" max="10">
    
    <div class="info">
        💡 Cada ronda ganada otorga 1 punto. El primer jugador en alcanzar este número gana la partida.
    </div>
</div>
```

### 3. Actualizar el mensaje informativo

Busca el mensaje "Mínimo 3 jugadores..." (alrededor de línea 316-318) y reemplázalo con:

```html
<div class="info">
    ℹ️ Mínimo 3 jugadores para Blanco/Lobo, 4 para Código Secreto, 2-4 para Love Letter
</div>
```

### 4. Añadir estilos CSS

Busca los estilos CSS (después de `.board-card`, alrededor de línea 216-228) y añade:

```css
.love-letter-card {
    background: white;
    border: 3px solid #667eea;
    border-radius: 12px;
    padding: 20px;
    margin: 10px 0;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.love-letter-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.love-letter-card.selected {
    border-color: #ffd700;
    background: #fffbea;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.love-letter-card.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
}

.card-number {
    font-size: 32px;
    font-weight: bold;
    color: #667eea;
}

.card-name {
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
    color: #333;
}

.card-effect {
    font-size: 13px;
    color: #666;
    line-height: 1.4;
}

.player-list {
    display: grid;
    gap: 10px;
    margin: 15px 0;
}

.player-item {
    background: #f8f9fa;
    padding: 12px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.player-item.eliminated {
    opacity: 0.5;
    border-left-color: #dc3545;
    text-decoration: line-through;
}

.player-item.current-turn {
    background: #e7f3ff;
    border-left-color: #ffd700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}
```

### 5. Actualizar función selectGame()

Busca la función `selectGame` (alrededor de línea 402-429) y:

a) Añade esta línea en la sección de ocultar configs (después de línea 411):
```javascript
document.getElementById('loveletterConfig').classList.add('hidden');
```

b) Añade este bloque después del else if de quickstop (después de línea 416):
```javascript
} else if (game === 'loveletter') {
    document.getElementById('loveletterConfig').classList.remove('hidden');
```

### 6. Actualizar validación en createGame()

Busca la función `createGame` y actualiza las validaciones de jugadores:

a) En la línea que dice `if (players.length < 3 && selectedGame !== 'codigo')` (alrededor de línea 548), cámbiala a:
```javascript
if (players.length < 3 && selectedGame !== 'codigo' && selectedGame !== 'loveletter') {
```

b) Después del bloque de validación de Código Secreto (alrededor de línea 556), añade:
```javascript
if ((players.length < 2 || players.length > 4) && selectedGame === 'loveletter') {
    alert('Love Letter necesita entre 2 y 4 jugadores');
    return;
}
```

### 7. Añadir creación de sala para Love Letter

Busca el bloque `} else if (selectedGame === 'quickstop') {` (alrededor de línea 615-621) y añade DESPUÉS:

```javascript
} else if (selectedGame === 'loveletter') {
    room.pointsToWin = parseInt(document.getElementById('pointsToWin').value) || 4;
    room.currentRound = 1;
    room.deck = [];
    room.discardPile = [];
    room.currentTurnIndex = 0;
    room.roundInProgress = false;
    
    room.players = {};
    players.forEach((name) => {
        room.players[name] = {
            hand: [],
            score: 0,
            eliminated: false,
            protected: false
        };
    });
    room.playerOrder = players;
}
```

### 8. Actualizar creatorJoinGame() y joinGame()

En ambas funciones, busca el bloque que dice:
```javascript
// Jugar según el tipo de juego
if (room.game === 'quickstop') {
    ...
} else if (room.game === 'codigo') {
    ...
} else if (room.game === 'blanco' || room.game === 'lobo') {
    ...
}
```

Y añade ANTES del último `else if`:
```javascript
} else if (room.game === 'loveletter') {
    playLoveLetter(roomCode, playerName);
```

### 9. Copiar todo el código JavaScript de Love Letter

Al FINAL del archivo `index.html`, justo ANTES de `</script>` (alrededor de línea 853-854), copia TODO el contenido del archivo `loveletter-implementation.js`.

## Verificación

Después de integrar todos los pasos:

1. Abre `index.html` en tu navegador
2. Crea una nueva sala y selecciona "Love Letter"
3. Añade 2-4 nombres de jugadores
4. Configura los puntos para ganar (por defecto 4)
5. Crea la sala
6. Únete con tu nombre
7. Deberías ver la pantalla de inicio de ronda

## Problemas comunes

- **"No se muestra la tarjeta de Love Letter"**: Verifica que añadiste la tarjeta en el HTML correctamente
- **"Error al crear sala"**: Revisa que añadiste el bloque de validación y creación de Love Letter
- **"No pasa nada al unirme"**: Verifica que añadiste `playLoveLetter` en las funciones de unirse
- **"Las cartas no se ven bien"**: Revisa que copiaste todos los estilos CSS

## Mejoras futuras opcionales

- Mejorar la interfaz de selección de jugadores (usando botones en lugar de prompts)
- Añadir animaciones cuando se juegan cartas
- Mostrar un historial de acciones de la ronda
- Añadir sonidos al jugar cartas

¡Listo! Love Letter ahora está integrado en tu aplicación.

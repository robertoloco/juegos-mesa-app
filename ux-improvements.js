// UX Improvements for Juegos Mesa App

// Game selector dropdown replacement
function initGameSelector() {
    const gameSelectorHTML = `
        <label>Selecciona el Juego:</label>
        <select id="gameSelector" onchange="selectGameFromDropdown(this.value)" style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 10px; font-size: 16px; margin-bottom: 20px;">
            <option value="">-- Elige un juego --</option>
            <option value="blanco">🎭 Blanco</option>
            <option value="lobo">🐺 El Lobo</option>
            <option value="codigo">🔐 Código Secreto</option>
            <option value="quickstop">🏃 Quick Stop</option>
            <option value="loveletter">💌 Love Letter</option>
            <option value="timesup">⏱️ Time's Up</option>
            <option value="overunder">📊 Over/Under</option>
            <option value="spyfall">🕵️ Spyfall</option>
            <option value="conexion">🧠 Conexión Mental</option>
        </select>

        <!-- Game Info Display -->
        <div id="gameInfo" class="hidden" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
            <h3 id="gameInfoTitle" style="margin-bottom: 10px;"></h3>
            <p id="gameInfoDesc" style="margin-bottom: 15px; opacity: 0.95;"></p>
            <div id="gameInfoPlayers" style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 8px; font-size: 14px;"></div>
        </div>
    `;

    // Replace game-select div
    const gameSelectDiv = document.querySelector('.game-select');
    if (gameSelectDiv) {
        gameSelectDiv.outerHTML = gameSelectorHTML;
    }
}

// Game data for dropdown
const GAME_DATA = {
    blanco: {
        title: '🎭 Blanco',
        desc: 'Todos tienen una palabra excepto el Blanco. ¡Descúbrelo sin revelar tu palabra!',
        players: 'Mínimo 3 jugadores'
    },
    lobo: {
        title: '🐺 El Lobo',
        desc: 'Aldeanos vs Lobos. Los lobos deben eliminar aldeanos sin ser descubiertos.',
        players: 'Mínimo 3 jugadores'
    },
    codigo: {
        title: '🔐 Código Secreto',
        desc: 'Dos equipos compiten dando pistas para encontrar sus agentes.',
        players: 'Mínimo 4 jugadores (2 por equipo)'
    },
    quickstop: {
        title: '🏃 Quick Stop',
        desc: 'Completa categorías con palabras que empiecen con la letra indicada.',
        players: 'No requiere lista de jugadores'
    },
    loveletter: {
        title: '💌 Love Letter',
        desc: 'Juego de deducción y faroleo. Sé el último en pie o termina con la carta más alta.',
        players: '2-4 jugadores'
    },
    timesup: {
        title: '⏱️ Time\'s Up',
        desc: '3 rondas con las mismas palabras: Describe, Una palabra, Mímica.',
        players: 'Mínimo 4 jugadores (2 equipos)'
    },
    overunder: {
        title: '📊 Over/Under',
        desc: 'Adivina si la respuesta es MÁS o MENOS. Datos curiosos y apuestas rápidas.',
        players: 'Cualquier número de jugadores'
    },
    spyfall: {
        title: '🕵️ Spyfall',
        desc: 'Descubre al espía antes de que él descubra la ubicación secreta.',
        players: 'Mínimo 3 jugadores'
    },
    conexion: {
        title: '🧠 Conexión Mental',
        desc: 'Juego cooperativo de palabras. ¡Conectad vuestras mentes!',
        players: '2-6 equipos'
    }
};

// New selectGame function for dropdown
function selectGameFromDropdown(game) {
    if (!game) {
        document.getElementById('gameInfo').classList.add('hidden');
        selectedGame = null;
        // Hide all configs
        document.getElementById('blancoConfig').classList.add('hidden');
        document.getElementById('quickstopConfig').classList.add('hidden');
        document.getElementById('loveletterConfig').classList.add('hidden');
        document.getElementById('timesupConfig').classList.add('hidden');
        return;
    }

    selectedGame = game;

    // Show game info
    const info = GAME_DATA[game];
    document.getElementById('gameInfoTitle').textContent = info.title;
    document.getElementById('gameInfoDesc').textContent = info.desc;
    document.getElementById('gameInfoPlayers').textContent = '👥 ' + info.players;
    document.getElementById('gameInfo').classList.remove('hidden');

    // Show/hide specific config
    document.getElementById('blancoConfig').classList.add('hidden');
    document.getElementById('quickstopConfig').classList.add('hidden');
    document.getElementById('loveletterConfig').classList.add('hidden');
    document.getElementById('timesupConfig').classList.add('hidden');

    if (game === 'blanco') {
        document.getElementById('blancoConfig').classList.remove('hidden');
    } else if (game === 'quickstop') {
        document.getElementById('quickstopConfig').classList.remove('hidden');
    } else if (game === 'loveletter') {
        document.getElementById('loveletterConfig').classList.remove('hidden');
    } else if (game === 'timesup') {
        document.getElementById('timesupConfig').classList.remove('hidden');
    }

    // Quick Stop no necesita lista de jugadores
    if (game === 'quickstop') {
        document.getElementById('playerNames').value = 'No requerido';
        document.getElementById('playerNames').disabled = true;
    } else {
        document.getElementById('playerNames').disabled = false;
        if (document.getElementById('playerNames').value === 'No requerido') {
            document.getElementById('playerNames').value = '';
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Only init if we're on the create game screen
    if (document.getElementById('createGameScreen')) {
        initGameSelector();
    }
});

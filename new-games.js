// ============================================
// NUEVOS JUEGOS - Lógica y Datos
// ============================================

// --- DATOS OVER/UNDER ---
const OVER_UNDER_QUESTIONS = [
    { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", a: 206 },
    { q: "¿Altura de la Torre Eiffel en metros?", a: 330 },
    { q: "¿Año de llegada del hombre a la Luna?", a: 1969 },
    { q: "¿Cuántos países hay en el mundo (ONU)?", a: 195 },
    { q: "¿Duración en minutos de la película Titanic?", a: 195 },
    { q: "¿Cuántas teclas tiene un piano estándar?", a: 88 },
    { q: "¿Velocidad de la luz en km/s (aprox)?", a: 300000 },
    { q: "¿Cuántos elementos hay en la tabla periódica?", a: 118 },
    { q: "¿Año de inicio de la Primera Guerra Mundial?", a: 1914 },
    { q: "¿Cuántos corazones tiene un pulpo?", a: 3 },
    { q: "¿Distancia de la Tierra al Sol en millones de km?", a: 150 },
    { q: "¿Cuántos jugadores hay en un equipo de rugby?", a: 15 },
    { q: "¿Año de lanzamiento del primer iPhone?", a: 2007 },
    { q: "¿Cuántos estados tiene Estados Unidos?", a: 50 },
    { q: "¿Temperatura de ebullición del agua en grados Celsius?", a: 100 }
];

// --- DATOS SPYFALL ---
const SPYFALL_LOCATIONS = {
    'Avión de Pasajeros': ['Piloto', 'Azafata', 'Pasajero de Primera Clase', 'Mecánico', 'Polizón', 'Copiloto', 'Pasajero Nervioso'],
    'Playa': ['Socorrista', 'Surfista', 'Vendedor de Helados', 'Turista Quemado', 'Nadador', 'Niño con Castillo de Arena', 'Ladrón de Bolsos'],
    'Teatro': ['Actor Principal', 'Director', 'Maquillador', 'Técnico de Luces', 'Espectador', 'Crítico', 'Vendedor de Entradas'],
    'Casino': ['Crupier', 'Jugador Profesional', 'Seguridad', 'Camarera', 'Gerente', 'Tramposo', 'Turista con Suerte'],
    'Circo': ['Payaso', 'Domador', 'Acróbata', 'Mago', 'Vendedor de Palomitas', 'Espectador Asombrado', 'Presentador'],
    'Banco': ['Cajero', 'Gerente', 'Ladrón', 'Guardia de Seguridad', 'Cliente Rico', 'Cliente Pidiendo Préstamo', 'Conductor de Camión Blindado'],
    'Hospital': ['Cirujano', 'Enfermera', 'Paciente', 'Anestesista', 'Conductor de Ambulancia', 'Visitante', 'Farmacéutico'],
    'Hotel': ['Recepcionista', 'Botones', 'Huésped', 'Limpiadora', 'Gerente', 'Cocinero', 'Barman'],
    'Restaurante': ['Chef', 'Camarero', 'Cliente', 'Crítico Gastronómico', 'Lavaplatos', 'Músico', 'Dueño'],
    'Supermercado': ['Cajero', 'Reponedor', 'Cliente con Prisa', 'Carnicero', 'Seguridad', 'Gerente', 'Niño Perdido'],
    'Universidad': ['Profesor', 'Estudiante Novato', 'Decano', 'Conserje', 'Estudiante Dormido', 'Bibliotecario', 'Entrenador'],
    'Zoológico': ['Cuidador', 'Veterinario', 'Visitante', 'Niño', 'Vendedor de Souvenirs', 'Fotógrafo', 'Guía'],
    'Estación Espacial': ['Astronauta', 'Ingeniero', 'Comandante', 'Médico', 'Turista Espacial', 'Alien Infiltrado', 'Científico'],
    'Barco Pirata': ['Capitán', 'Loro', 'Cocinero', 'Vigía', 'Prisionero', 'Carpintero', 'Artillero']
};

// --- LÓGICA OVER/UNDER ---
async function startOverUnderRound(roomCode) {
    const question = OVER_UNDER_QUESTIONS[Math.floor(Math.random() * OVER_UNDER_QUESTIONS.length)];
    // Generar línea de referencia (entre 80% y 120% de la respuesta real)
    const line = Math.floor(question.a * (Math.random() * 0.4 + 0.8));

    await database.ref(`rooms/${roomCode}`).update({
        currentQuestion: question,
        line: line,
        phase: 'betting', // betting, reveal
        bets: {},
        roundInProgress: true
    });
}

function playOverUnder(roomCode, playerName) {
    const gameContent = document.getElementById('gameContent');
    const gameHeader = document.getElementById('gameHeader');

    gameHeader.innerHTML = renderGameHeader(roomCode, 'overunder');

    roomRef.on('value', (snapshot) => {
        const room = snapshot.val();
        if (!room) return;

        if (!room.roundInProgress) {
            gameContent.innerHTML = `
                <h2 style="text-align: center; color: #667eea;">📊 Over/Under</h2>
                <div style="text-align: center; padding: 40px;">
                    <p style="margin: 20px 0;">¡Adivina si la respuesta es MÁS o MENOS!</p>
                    ${room.players[playerName].score !== undefined ? `<p>Tu Puntuación: ${room.players[playerName].score}</p>` : ''}
                    ${Object.keys(room.players)[0] === playerName ?
                    '<div class="btn" onclick="startOverUnderRound(\'' + roomCode + '\')">Nueva Pregunta</div>' :
                    '<p style="color: #666;">Esperando al líder...</p>'}
                </div>
                ${renderScoreboard(room)}
            `;
            return;
        }

        if (room.phase === 'betting') {
            const myBet = room.bets && room.bets[playerName];

            let html = `
                <h2 style="text-align: center; color: #667eea;">📊 Over/Under</h2>
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0;">
                    <h3 style="margin-bottom: 15px;">Pregunta:</h3>
                    <p style="font-size: 24px; font-weight: bold;">${room.currentQuestion.q}</p>
                </div>
            `;

            if (myBet) {
                html += `
                    <div style="text-align: center; margin: 20px;">
                        <p>Has apostado: <strong>${myBet === 'over' ? 'MÁS (+)' : 'MENOS (-)'}</strong></p>
                        <p>Esperando a los demás...</p>
                    </div>
                `;
            } else {
                html += `
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div class="btn" style="background: #48bb78;" onclick="submitOverUnderBet('${roomCode}', '${playerName}', 'over')">MÁS (+)</div>
                        <div class="btn" style="background: #f56565;" onclick="submitOverUnderBet('${roomCode}', '${playerName}', 'under')">MENOS (-)</div>
                    </div>
                    <p style="text-align: center; margin-top: 10px; color: #666;">¿Crees que la respuesta es mayor o menor a X?</p>
                    <div style="text-align: center; font-weight: bold; font-size: 20px; margin: 10px;">¿Es más o menos de: ${room.line}?</div>
                `;
            }

            // Mostrar quién ha votado
            const voters = Object.keys(room.bets || {}).length;
            const totalPlayers = Object.keys(room.players).length;
            html += `<p style="text-align: center; margin-top: 20px;">Votos: ${voters}/${totalPlayers}</p>`;

            if (voters === totalPlayers && Object.keys(room.players)[0] === playerName) {
                html += `<div class="btn" onclick="revealOverUnder('${roomCode}')">Revelar Respuesta</div>`;
            }

            gameContent.innerHTML = html;
        } else if (room.phase === 'reveal') {
            let html = `
                <h2 style="text-align: center; color: #667eea;">📊 Resultado</h2>
                <div style="background: white; border: 3px solid #667eea; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0;">
                    <p>La respuesta correcta era:</p>
                    <h1 style="font-size: 48px; color: #667eea;">${room.currentQuestion.a}</h1>
                    <p>Referencia: ${room.line}</p>
                </div>
                <div style="margin-bottom: 20px;">
            `;

            Object.keys(room.players).forEach(p => {
                const bet = room.bets[p];
                const won = (bet === 'over' && room.currentQuestion.a > room.line) ||
                    (bet === 'under' && room.currentQuestion.a < room.line);

                html += `
                    <div style="background: ${won ? '#c6f6d5' : '#fed7d7'}; padding: 10px; margin: 5px 0; border-radius: 8px; display: flex; justify-content: space-between;">
                        <span>${p} (${bet === 'over' ? '+' : '-'})</span>
                        <strong>${won ? '+1 Punto' : '0 Puntos'}</strong>
                    </div>
                `;
            });

            html += `</div>
                ${Object.keys(room.players)[0] === playerName ?
                    '<div class="btn" onclick="startOverUnderRound(\'' + roomCode + '\')">Siguiente Ronda</div>' :
                    '<p style="text-align: center;">Esperando siguiente ronda...</p>'}
                ${renderScoreboard(room)}
            `;

            gameContent.innerHTML = html;
        }
    });

    showScreen('gameScreen');
}

async function submitOverUnderBet(roomCode, playerName, bet) {
    await database.ref(`rooms/${roomCode}/bets/${playerName}`).set(bet);
}

async function revealOverUnder(roomCode) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();

    const updates = { phase: 'reveal' };

    // Calcular puntuaciones
    Object.keys(room.players).forEach(p => {
        const bet = room.bets[p];
        const won = (bet === 'over' && room.currentQuestion.a > room.line) ||
            (bet === 'under' && room.currentQuestion.a < room.line);

        if (won) {
            const currentScore = room.players[p].score || 0;
            updates[`players/${p}/score`] = currentScore + 1;
        }
    });

    await database.ref(`rooms/${roomCode}`).update(updates);
}

// --- LÓGICA SPYFALL ---
function playSpyfall(roomCode, playerName) {
    const gameContent = document.getElementById('gameContent');
    const gameHeader = document.getElementById('gameHeader');

    gameHeader.innerHTML = renderGameHeader(roomCode, 'spyfall');

    roomRef.on('value', (snapshot) => {
        const room = snapshot.val();
        if (!room) return;

        const player = room.players[playerName];
        const isSpy = player.role === 'Espía';

        let html = `
            <h2 style="text-align: center; color: #667eea;">🕵️ Spyfall</h2>
            <div style="background: ${isSpy ? '#2d3748' : '#fffbea'}; color: ${isSpy ? 'white' : '#333'}; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0; border: 2px solid #667eea;">
                <h3 style="margin-bottom: 10px;">Tu Rol:</h3>
                <h1 style="font-size: 32px; margin-bottom: 15px;">${player.role}</h1>
                ${isSpy ?
                '<p style="color: #fc8181;">¡Eres el Espía! Adivina la ubicación.</p>' :
                `<p><strong>Ubicación:</strong> ${room.location}</p><p>Encuentra al espía sin revelar demasiado.</p>`}
            </div>
        `;

        if (room.timerActive) {
            html += `
                <div style="text-align: center; font-size: 24px; font-weight: bold; margin: 20px;">
                    ⏱️ ${formatTime(room.timeRemaining)}
                </div>
            `;
        }

        html += `
            <div class="info">
                <h3>Posibles Ubicaciones:</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; margin-top: 10px;">
                    ${Object.keys(SPYFALL_LOCATIONS).map(loc =>
            `<span style="background: #edf2f7; padding: 5px 10px; border-radius: 15px; font-size: 12px; color: #4a5568;">${loc}</span>`
        ).join('')}
                </div>
            </div>
            
            ${Object.keys(room.players)[0] === playerName && !room.timerActive ?
                '<div class="btn" onclick="startSpyfallTimer(\'' + roomCode + '\')">Iniciar Temporizador (8 min)</div>' : ''}
        `;

        gameContent.innerHTML = html;
    });

    showScreen('gameScreen');
}

async function startSpyfallTimer(roomCode) {
    await database.ref(`rooms/${roomCode}`).update({
        timerActive: true,
        timeRemaining: 480 // 8 minutos
    });

    // El temporizador debe ser manejado por el cliente que lo inició o por todos (sincronizado)
    // Para simplificar, usamos la misma lógica que Time's Up en index.html
    if (window.spyfallInterval) clearInterval(window.spyfallInterval);

    window.spyfallInterval = setInterval(() => {
        database.ref(`rooms/${roomCode}`).once('value').then(snap => {
            const r = snap.val();
            if (r && r.timerActive && r.timeRemaining > 0) {
                database.ref(`rooms/${roomCode}/timeRemaining`).set(r.timeRemaining - 1);
            } else {
                clearInterval(window.spyfallInterval);
            }
        });
    }, 1000);
}

// --- LÓGICA CONEXIÓN MENTAL (THE MIND) ---
// Conexión Mental (The Mind) implementation removed. 
// Now using the user's custom implementation in conexion-implementation.js

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

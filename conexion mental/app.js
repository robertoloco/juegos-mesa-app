// Estado del juego
let juegoActivo = false;
let palabrasDisponibles = [];
let palabraActual = null;
let equipos = [];
let tiempoRestante = 30;
let intervaloTemporizador = null;
let pausado = false;

// Inicializar juego
function iniciarJuego() {
    const nivel = document.getElementById('nivel').value;
    const numEquipos = parseInt(document.getElementById('numEquipos').value);
    tiempoRestante = parseInt(document.getElementById('tiempoRonda').value);
    
    if (numEquipos < 2 || numEquipos > 6) {
        alert('⚠️ Elige entre 2 y 6 equipos');
        return;
    }
    
    // Copiar palabras del nivel seleccionado
    palabrasDisponibles = [...palabrasBase[nivel]];
    mezclarArray(palabrasDisponibles);
    
    // Crear equipos
    equipos = [];
    const colores = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
    for (let i = 0; i < numEquipos; i++) {
        equipos.push({
            nombre: `Equipo ${i + 1}`,
            puntos: 0,
            color: colores[i]
        });
    }
    
    crearEquipos();
    cambiarPantalla('pantallaJuego');
    juegoActivo = true;
    nuevaPalabra();
}

// Crear interfaz de equipos
function crearEquipos() {
    const container = document.getElementById('equiposContainer');
    container.innerHTML = '';
    
    equipos.forEach((equipo, index) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.onclick = () => sumarPunto(index);
        card.innerHTML = `
            <div class="team-name">${equipo.nombre}</div>
            <div class="team-score">${equipo.puntos}</div>
        `;
        card.style.borderTop = `4px solid ${equipo.color}`;
        container.appendChild(card);
    });
}

// Sumar punto a un equipo
function sumarPunto(index) {
    if (!juegoActivo || pausado) return;
    
    equipos[index].puntos++;
    
    // Vibración móvil
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // Animación visual
    const cards = document.querySelectorAll('.team-card');
    cards[index].style.transform = 'scale(1.1)';
    setTimeout(() => {
        cards[index].style.transform = '';
    }, 200);
    
    crearEquipos();
    
    // Verificar victoria (10 puntos)
    if (equipos[index].puntos >= 10) {
        mostrarVictoria(index);
    } else {
        nuevaPalabra();
    }
}

// Nueva palabra
function nuevaPalabra() {
    if (palabrasDisponibles.length === 0) {
        alert('🎉 ¡Se acabaron las palabras! Reinicia para continuar.');
        return;
    }
    
    // Resetear definición
    document.getElementById('definicion').classList.remove('visible');
    document.getElementById('verDefBtn').textContent = '💡 Ver Pista';
    
    // Tomar palabra aleatoria
    palabraActual = palabrasDisponibles.pop();
    
    const palabraEl = document.getElementById('palabra');
    palabraEl.style.opacity = '0';
    
    setTimeout(() => {
        palabraEl.textContent = palabraActual.palabra;
        palabraEl.style.opacity = '1';
        document.getElementById('definicion').textContent = palabraActual.definicion;
    }, 150);
    
    // Reiniciar temporizador
    detenerTemporizador();
    iniciarTemporizador();
}

// Empate (pasar palabra)
function empate() {
    if (!juegoActivo) return;
    nuevaPalabra();
}

// Toggle definición
function toggleDefinicion() {
    const def = document.getElementById('definicion');
    const btn = document.getElementById('verDefBtn');
    
    if (def.classList.contains('visible')) {
        def.classList.remove('visible');
        btn.textContent = '💡 Ver Pista';
    } else {
        def.classList.add('visible');
        btn.textContent = '✓ Pista mostrada';
    }
}

// Temporizador
function iniciarTemporizador() {
    tiempoRestante = parseInt(document.getElementById('tiempoRonda').value);
    actualizarCronometro();
    
    intervaloTemporizador = setInterval(() => {
        if (!pausado) {
            tiempoRestante--;
            actualizarCronometro();
            
            if (tiempoRestante <= 0) {
                detenerTemporizador();
                nuevaPalabra();
            }
        }
    }, 1000);
}

function detenerTemporizador() {
    if (intervaloTemporizador) {
        clearInterval(intervaloTemporizador);
        intervaloTemporizador = null;
    }
}

function actualizarCronometro() {
    const crono = document.getElementById('cronometro');
    crono.textContent = tiempoRestante;
    
    if (tiempoRestante <= 5) {
        crono.classList.add('warning');
    } else {
        crono.classList.remove('warning');
    }
}

// Pausar juego
function pausarJuego() {
    pausado = !pausado;
    const btn = event.target;
    btn.textContent = pausado ? '▶️' : '⏸️';
}

// Mostrar victoria
function mostrarVictoria(indexGanador) {
    juegoActivo = false;
    detenerTemporizador();
    
    const ganador = equipos[indexGanador];
    document.getElementById('ganadorTexto').textContent = `🎉 ${ganador.nombre} gana! 🎉`;
    
    // Crear podium
    const podium = document.getElementById('podium');
    podium.innerHTML = '';
    
    // Ordenar equipos por puntos
    const ranking = [...equipos].sort((a, b) => b.puntos - a.puntos);
    
    ranking.forEach((equipo, index) => {
        const item = document.createElement('div');
        item.className = 'podium-item';
        const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
        item.innerHTML = `
            <span>${emoji} ${equipo.nombre}</span>
            <span>${equipo.puntos} pts</span>
        `;
        podium.appendChild(item);
    });
    
    cambiarPantalla('pantallaVictoria');
    
    // Confeti (efecto visual)
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 100]);
    }
}

// Volver al inicio
function volverInicio() {
    juegoActivo = false;
    pausado = false;
    detenerTemporizador();
    equipos = [];
    palabrasDisponibles = [];
    cambiarPantalla('pantallaInicio');
}

// Cambiar pantalla
function cambiarPantalla(nombrePantalla) {
    document.querySelectorAll('.pantalla').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(nombrePantalla).classList.add('active');
}

// Mezclar array (Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Prevenir zoom en mobile (doble tap)
document.addEventListener('dblclick', (e) => {
    e.preventDefault();
}, { passive: false });

// Gestión de orientación móvil
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 100);
});

// Fullscreen en móvil
function intentarFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

console.log('🧠 Conexión Mental cargado correctamente');
console.log(`📚 Palabras disponibles: Fácil (${palabrasBase.facil.length}), Medio (${palabrasBase.medio.length}), Difícil (${palabrasBase.dificil.length})`);

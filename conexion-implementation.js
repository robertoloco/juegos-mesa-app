
// ============================================
// CONEXIÓN MENTAL - Implementación
// ============================================

// --- DICCIONARIO DE PALABRAS (palabras.js) ---
const CONEXION_PALABRAS = {
    "facil": [
        { palabra: "Casa", definicion: "Edificio para habitar" },
        { palabra: "Perro", definicion: "Animal doméstico leal" },
        { palabra: "Mesa", definicion: "Mueble con patas y superficie plana" },
        { palabra: "Sol", definicion: "Estrella que ilumina la Tierra" },
        { palabra: "Agua", definicion: "Líquido transparente e inodoro" },
        { palabra: "Pan", definicion: "Alimento hecho de harina" },
        { palabra: "Libro", definicion: "Conjunto de páginas con texto" },
        { palabra: "Gato", definicion: "Felino doméstico" },
        { palabra: "Flor", definicion: "Parte colorida de las plantas" },
        { palabra: "Árbol", definicion: "Planta grande con tronco" },
        { palabra: "Coche", definicion: "Vehículo con motor" },
        { palabra: "Teléfono", definicion: "Aparato para comunicarse" },
        { palabra: "Silla", definicion: "Asiento con respaldo" },
        { palabra: "Ventana", definicion: "Abertura en la pared" },
        { palabra: "Puerta", definicion: "Entrada de una habitación" },
        { palabra: "Zapato", definicion: "Calzado para los pies" },
        { palabra: "Mano", definicion: "Extremidad con cinco dedos" },
        { palabra: "Ojo", definicion: "Órgano de la vista" },
        { palabra: "Boca", definicion: "Abertura para comer" },
        { palabra: "Nariz", definicion: "Órgano del olfato" },
        { palabra: "Oreja", definicion: "Órgano del oído" },
        { palabra: "Cabeza", definicion: "Parte superior del cuerpo" },
        { palabra: "Brazo", definicion: "Extremidad superior" },
        { palabra: "Pierna", definicion: "Extremidad inferior" },
        { palabra: "Pie", definicion: "Extremidad para caminar" },
        { palabra: "Pelo", definicion: "Filamentos en la piel" },
        { palabra: "Diente", definicion: "Pieza para masticar" },
        { palabra: "Corazón", definicion: "Órgano que bombea sangre" },
        { palabra: "Luna", definicion: "Satélite de la Tierra" },
        { palabra: "Estrella", definicion: "Cuerpo celeste luminoso" },
        { palabra: "Nube", definicion: "Masa de vapor en el cielo" },
        { palabra: "Lluvia", definicion: "Agua que cae del cielo" },
        { palabra: "Nieve", definicion: "Precipitación helada" },
        { palabra: "Viento", definicion: "Aire en movimiento" },
        { palabra: "Mar", definicion: "Masa grande de agua salada" },
        { palabra: "Río", definicion: "Corriente de agua dulce" },
        { palabra: "Montaña", definicion: "Elevación natural del terreno" },
        { palabra: "Playa", definicion: "Orilla del mar con arena" },
        { palabra: "Campo", definicion: "Terreno extenso fuera de la ciudad" },
        { palabra: "Ciudad", definicion: "Población grande" },
        { palabra: "Calle", definicion: "Vía pública urbana" },
        { palabra: "Plaza", definicion: "Espacio público abierto" },
        { palabra: "Parque", definicion: "Zona verde para pasear" },
        { palabra: "Escuela", definicion: "Lugar donde se estudia" },
        { palabra: "Hospital", definicion: "Centro de salud" },
        { palabra: "Tienda", definicion: "Establecimiento comercial" },
        { palabra: "Restaurante", definicion: "Local donde se come" },
        { palabra: "Café", definicion: "Bebida con cafeína" },
        { palabra: "Leche", definicion: "Líquido blanco nutritivo" },
        { palabra: "Queso", definicion: "Alimento lácteo sólido" },
        { palabra: "Huevo", definicion: "Producto de las aves" },
        { palabra: "Carne", definicion: "Parte comestible de animales" },
        { palabra: "Pescado", definicion: "Animal acuático comestible" },
        { palabra: "Fruta", definicion: "Alimento dulce de las plantas" },
        { palabra: "Verdura", definicion: "Hortaliza comestible" },
        { palabra: "Arroz", definicion: "Cereal básico asiático" },
        { palabra: "Pasta", definicion: "Alimento de harina italiana" },
        { palabra: "Sopa", definicion: "Plato líquido caliente" },
        { palabra: "Ensalada", definicion: "Plato frío de vegetales" },
        { palabra: "Postre", definicion: "Dulce al final de la comida" },
        { palabra: "Helado", definicion: "Postre congelado dulce" },
        { palabra: "Chocolate", definicion: "Dulce de cacao" },
        { palabra: "Azúcar", definicion: "Sustancia dulce" },
        { palabra: "Sal", definicion: "Condimento blanco" },
        { palabra: "Aceite", definicion: "Grasa líquida para cocinar" },
        { palabra: "Vinagre", definicion: "Líquido ácido condimento" },
        { palabra: "Vino", definicion: "Bebida alcohólica de uva" },
        { palabra: "Cerveza", definicion: "Bebida alcohólica de malta" },
        { palabra: "Jugo", definicion: "Líquido extraído de frutas" },
        { palabra: "Refresco", definicion: "Bebida carbonatada dulce" },
        { palabra: "Vaso", definicion: "Recipiente para beber" },
        { palabra: "Plato", definicion: "Recipiente para comida" },
        { palabra: "Cuchara", definicion: "Utensilio cóncavo" },
        { palabra: "Tenedor", definicion: "Utensilio con puntas" },
        { palabra: "Cuchillo", definicion: "Utensilio para cortar" },
        { palabra: "Botella", definicion: "Recipiente para líquidos" },
        { palabra: "Taza", definicion: "Recipiente con asa" },
        { palabra: "Bolsa", definicion: "Recipiente flexible" },
        { palabra: "Caja", definicion: "Recipiente rígido" },
        { palabra: "Lápiz", definicion: "Instrumento para escribir" },
        { palabra: "Papel", definicion: "Material para escribir" },
        { palabra: "Tijera", definicion: "Instrumento para cortar" },
        { palabra: "Pegamento", definicion: "Sustancia adhesiva" },
        { palabra: "Goma", definicion: "Material elástico" },
        { palabra: "Regla", definicion: "Instrumento para medir" },
        { palabra: "Color", definicion: "Lápiz de colores" },
        { palabra: "Pintura", definicion: "Pigmento líquido" },
        { palabra: "Pincel", definicion: "Herramienta para pintar" },
        { palabra: "Cuaderno", definicion: "Conjunto de hojas" },
        { palabra: "Mochila", definicion: "Bolsa para la espalda" },
        { palabra: "Reloj", definicion: "Aparato que mide el tiempo" },
        { palabra: "Calendario", definicion: "Sistema de fechas" },
        { palabra: "Camisa", definicion: "Prenda de la parte superior" },
        { palabra: "Pantalón", definicion: "Prenda para las piernas" },
        { palabra: "Falda", definicion: "Prenda femenina de cintura" },
        { palabra: "Vestido", definicion: "Prenda de una pieza" },
        { palabra: "Abrigo", definicion: "Prenda de abrigo larga" },
        { palabra: "Chaqueta", definicion: "Prenda de abrigo corta" },
        { palabra: "Jersey", definicion: "Prenda de lana" },
        { palabra: "Camiseta", definicion: "Prenda ligera sin cuello" }
    ],
    "medio": [
        { palabra: "Mariposa", definicion: "Insecto con alas coloridas" },
        { palabra: "Ballena", definicion: "Mamífero marino gigante" },
        { palabra: "Delfín", definicion: "Cetáceo inteligente" },
        { palabra: "Elefante", definicion: "Mamífero con trompa" },
        { palabra: "Jirafa", definicion: "Animal de cuello largo" },
        { palabra: "León", definicion: "Gran felino rey de la selva" },
        { palabra: "Tigre", definicion: "Felino con rayas" },
        { palabra: "Serpiente", definicion: "Reptil sin patas" },
        { palabra: "Tortuga", definicion: "Reptil con caparazón" },
        { palabra: "Cocodrilo", definicion: "Reptil acuático peligroso" },
        { palabra: "Águila", definicion: "Ave rapaz majestuosa" },
        { palabra: "Búho", definicion: "Ave nocturna sabia" },
        { palabra: "Pingüino", definicion: "Ave marina no voladora" },
        { palabra: "Pato", definicion: "Ave acuática palmípeda" },
        { palabra: "Gallina", definicion: "Ave doméstica ponedora" },
        { palabra: "Vaca", definicion: "Mamífero productor de leche" },
        { palabra: "Caballo", definicion: "Mamífero equino domesticado" },
        { palabra: "Cerdo", definicion: "Mamífero doméstico rosado" },
        { palabra: "Oveja", definicion: "Mamífero productor de lana" },
        { palabra: "Conejo", definicion: "Mamífero pequeño con orejas largas" },
        { palabra: "Ratón", definicion: "Roedor pequeño" },
        { palabra: "Hormiga", definicion: "Insecto trabajador social" },
        { palabra: "Abeja", definicion: "Insecto productor de miel" },
        { palabra: "Mosca", definicion: "Insecto volador molesto" },
        { palabra: "Araña", definicion: "Arácnido tejedor de redes" },
        { palabra: "Escorpión", definicion: "Arácnido con aguijón" },
        { palabra: "Cangrejo", definicion: "Crustáceo con pinzas" },
        { palabra: "Pulpo", definicion: "Molusco con ocho brazos" },
        { palabra: "Medusa", definicion: "Animal marino gelatinoso" },
        { palabra: "Tiburón", definicion: "Pez depredador marino" },
        { palabra: "Atún", definicion: "Pez grande comestible" },
        { palabra: "Salmón", definicion: "Pez rosado migratorio" },
        { palabra: "Trucha", definicion: "Pez de río comestible" },
        { palabra: "Volcán", definicion: "Montaña que expulsa lava" },
        { palabra: "Terremoto", definicion: "Movimiento sísmico terrestre" },
        { palabra: "Tsunami", definicion: "Ola gigante destructiva" },
        { palabra: "Huracán", definicion: "Tormenta tropical intensa" },
        { palabra: "Tornado", definicion: "Remolino de viento destructivo" },
        { palabra: "Relámpago", definicion: "Descarga eléctrica atmosférica" },
        { palabra: "Trueno", definicion: "Sonido del rayo" },
        { palabra: "Arcoíris", definicion: "Fenómeno óptico multicolor" },
        { palabra: "Aurora", definicion: "Luz polar en el cielo" },
        { palabra: "Eclipse", definicion: "Ocultación de un astro" },
        { palabra: "Cometa", definicion: "Cuerpo celeste con cola" },
        { palabra: "Asteroide", definicion: "Roca espacial pequeña" },
        { palabra: "Galaxia", definicion: "Sistema de estrellas" },
        { palabra: "Planeta", definicion: "Cuerpo que orbita una estrella" },
        { palabra: "Satélite", definicion: "Cuerpo que orbita un planeta" },
        { palabra: "Telescopio", definicion: "Instrumento para ver lejos" },
        { palabra: "Microscopio", definicion: "Instrumento para ver pequeño" },
        { palabra: "Brújula", definicion: "Instrumento de orientación" },
        { palabra: "Termómetro", definicion: "Instrumento para medir temperatura" },
        { palabra: "Barómetro", definicion: "Instrumento para medir presión" },
        { palabra: "Balanza", definicion: "Instrumento para pesar" },
        { palabra: "Báscula", definicion: "Aparato para medir peso" },
        { palabra: "Computadora", definicion: "Máquina electrónica de procesamiento" },
        { palabra: "Teclado", definicion: "Dispositivo con teclas" },
        { palabra: "Ratón", definicion: "Dispositivo señalador" },
        { palabra: "Pantalla", definicion: "Superficie de visualización" },
        { palabra: "Impresora", definicion: "Dispositivo para imprimir" },
        { palabra: "Escáner", definicion: "Dispositivo para digitalizar" },
        { palabra: "Cámara", definicion: "Aparato para fotografiar" },
        { palabra: "Micrófono", definicion: "Dispositivo para captar sonido" },
        { palabra: "Altavoz", definicion: "Dispositivo para emitir sonido" },
        { palabra: "Auriculares", definicion: "Dispositivo personal de audio" },
        { palabra: "Tableta", definicion: "Dispositivo táctil portátil" },
        { palabra: "Lámpara", definicion: "Aparato de iluminación" },
        { palabra: "Bombilla", definicion: "Fuente de luz eléctrica" },
        { palabra: "Interruptor", definicion: "Dispositivo de encendido" },
        { palabra: "Enchufe", definicion: "Conexión eléctrica" },
        { palabra: "Batería", definicion: "Fuente de energía portátil" },
        { palabra: "Cable", definicion: "Conductor eléctrico" },
        { palabra: "Antena", definicion: "Dispositivo receptor de señales" },
        { palabra: "Motor", definicion: "Máquina que produce movimiento" },
        { palabra: "Engranaje", definicion: "Rueda dentada mecánica" },
        { palabra: "Palanca", definicion: "Barra para hacer fuerza" },
        { palabra: "Polea", definicion: "Rueda para elevar cargas" },
        { palabra: "Tornillo", definicion: "Pieza de fijación roscada" },
        { palabra: "Clavo", definicion: "Pieza metálica puntiaguda" },
        { palabra: "Martillo", definicion: "Herramienta para golpear" },
        { palabra: "Destornillador", definicion: "Herramienta para tornillos" },
        { palabra: "Llave", definicion: "Herramienta para tuercas" },
        { palabra: "Sierra", definicion: "Herramienta dentada para cortar" },
        { palabra: "Taladro", definicion: "Herramienta para perforar" },
        { palabra: "Pinza", definicion: "Herramienta para sujetar" },
        { palabra: "Alicate", definicion: "Herramienta de corte y sujeción" },
        { palabra: "Espejo", definicion: "Superficie que refleja" },
        { palabra: "Cristal", definicion: "Material transparente duro" },
        { palabra: "Cerámica", definicion: "Material de arcilla cocida" },
        { palabra: "Madera", definicion: "Material de los árboles" },
        { palabra: "Piedra", definicion: "Material mineral sólido" },
        { palabra: "Arena", definicion: "Partículas de roca" },
        { palabra: "Arcilla", definicion: "Tierra moldeable" },
        { palabra: "Cemento", definicion: "Material de construcción" },
        { palabra: "Ladrillo", definicion: "Bloque de construcción" },
        { palabra: "Techo", definicion: "Cubierta superior de edificio" },
        { palabra: "Pared", definicion: "División vertical de espacio" },
        { palabra: "Suelo", definicion: "Base inferior de un lugar" }
    ],
    "dificil": [
        { palabra: "Efímero", definicion: "Que dura poco tiempo" },
        { palabra: "Paradoja", definicion: "Contradicción aparente" },
        { palabra: "Metáfora", definicion: "Comparación implícita" },
        { palabra: "Analogía", definicion: "Semejanza entre cosas distintas" },
        { palabra: "Sinónimo", definicion: "Palabra de igual significado" },
        { palabra: "Antónimo", definicion: "Palabra de significado opuesto" },
        { palabra: "Palíndromo", definicion: "Palabra que se lee igual al revés" },
        { palabra: "Onomatopeya", definicion: "Imitación de un sonido" },
        { palabra: "Hipérbole", definicion: "Exageración retórica" },
        { palabra: "Eufemismo", definicion: "Expresión suave de algo desagradable" },
        { palabra: "Jeroglífico", definicion: "Escritura con símbolos" },
        { palabra: "Caligrafía", definicion: "Arte de escribir bonito" },
        { palabra: "Tipografía", definicion: "Arte de diseñar letras" },
        { palabra: "Ortografía", definicion: "Escritura correcta" },
        { palabra: "Gramática", definicion: "Reglas del lenguaje" },
        { palabra: "Sintaxis", definicion: "Orden de las palabras" },
        { palabra: "Semántica", definicion: "Significado de las palabras" },
        { palabra: "Pragmática", definicion: "Uso del lenguaje en contexto" },
        { palabra: "Lingüística", definicion: "Ciencia del lenguaje" },
        { palabra: "Filología", definicion: "Estudio de textos antiguos" },
        { palabra: "Etimología", definicion: "Origen de las palabras" },
        { palabra: "Neologismo", definicion: "Palabra nueva" },
        { palabra: "Arcaísmo", definicion: "Palabra antigua en desuso" },
        { palabra: "Barbarismo", definicion: "Error en el lenguaje" },
        { palabra: "Solecismo", definicion: "Error sintáctico" },
        { palabra: "Pleonasmo", definicion: "Redundancia innecesaria" },
        { palabra: "Tautología", definicion: "Repetición de una idea" },
        { palabra: "Cacofonía", definicion: "Sonido desagradable" },
        { palabra: "Aliteración", definicion: "Repetición de sonidos iniciales" },
        { palabra: "Asonancia", definicion: "Repetición de vocales" },
        { palabra: "Consonancia", definicion: "Repetición de consonantes" },
        { palabra: "Ritmo", definicion: "Patrón de repetición temporal" },
        { palabra: "Melodía", definicion: "Secuencia de notas musicales" },
        { palabra: "Armonía", definicion: "Combinación agradable de sonidos" },
        { palabra: "Disonancia", definicion: "Combinación desagradable de sonidos" },
        { palabra: "Acorde", definicion: "Conjunto de notas simultáneas" },
        { palabra: "Octava", definicion: "Intervalo de ocho notas" },
        { palabra: "Bemol", definicion: "Nota rebajada medio tono" },
        { palabra: "Sostenido", definicion: "Nota elevada medio tono" },
        { palabra: "Pentagrama", definicion: "Cinco líneas musicales" },
        { palabra: "Clave", definicion: "Signo inicial del pentagrama" },
        { palabra: "Compás", definicion: "División del tiempo musical" },
        { palabra: "Tempo", definicion: "Velocidad de la música" },
        { palabra: "Allegro", definicion: "Tempo rápido" },
        { palabra: "Adagio", definicion: "Tempo lento" },
        { palabra: "Crescendo", definicion: "Aumento gradual del volumen" },
        { palabra: "Diminuendo", definicion: "Disminución gradual del volumen" },
        { palabra: "Fortissimo", definicion: "Muy fuerte" },
        { palabra: "Pianissimo", definicion: "Muy suave" },
        { palabra: "Staccato", definicion: "Notas separadas y cortas" },
        { palabra: "Legato", definicion: "Notas ligadas y fluidas" },
        { palabra: "Vibrato", definicion: "Oscilación del sonido" },
        { palabra: "Glissando", definicion: "Deslizamiento entre notas" },
        { palabra: "Trémolo", definicion: "Repetición rápida de una nota" },
        { palabra: "Trino", definicion: "Alternancia rápida entre dos notas" },
        { palabra: "Sinfonía", definicion: "Obra orquestal extensa" },
        { palabra: "Concierto", definicion: "Obra para solista y orquesta" },
        { palabra: "Sonata", definicion: "Composición instrumental" },
        { palabra: "Ópera", definicion: "Drama musical teatral" },
        { palabra: "Oratorio", definicion: "Obra vocal religiosa" },
        { palabra: "Cantata", definicion: "Composición vocal con partes" },
        { palabra: "Réquiem", definicion: "Misa de difuntos" },
        { palabra: "Coral", definicion: "Canto religioso" },
        { palabra: "Motete", definicion: "Composición vocal polifónica" },
        { palabra: "Madrigal", definicion: "Composición vocal secular" },
        { palabra: "Fuga", definicion: "Composición contrapuntística" },
        { palabra: "Canon", definicion: "Melodía imitada sucesivamente" },
        { palabra: "Rondó", definicion: "Forma musical circular" },
        { palabra: "Minueto", definicion: "Danza aristocrática francesa" },
        { palabra: "Vals", definicion: "Danza en tiempo ternario" },
        { palabra: "Tango", definicion: "Danza argentina pasional" },
        { palabra: "Flamenco", definicion: "Arte español de cante y baile" },
        { palabra: "Jazz", definicion: "Género musical improvisado" },
        { palabra: "Blues", definicion: "Género musical melancólico" },
        { palabra: "Rock", definicion: "Género musical enérgico" },
        { palabra: "Reggae", definicion: "Género jamaicano rítmico" },
        { palabra: "Salsa", definicion: "Género caribeño bailable" },
        { palabra: "Cumbia", definicion: "Género colombiano festivo" },
        { palabra: "Merengue", definicion: "Género dominicano rápido" },
        { palabra: "Bachata", definicion: "Género dominicano romántico" },
        { palabra: "Bolero", definicion: "Género romántico lento" },
        { palabra: "Ranchera", definicion: "Género mexicano tradicional" },
        { palabra: "Mariachi", definicion: "Conjunto musical mexicano" },
        { palabra: "Samba", definicion: "Género brasileño festivo" },
        { palabra: "Bossa Nova", definicion: "Género brasileño suave" },
        { palabra: "Fado", definicion: "Género portugués melancólico" },
        { palabra: "Celtic", definicion: "Música tradicional celta" },
        { palabra: "Klezmer", definicion: "Música tradicional judía" },
        { palabra: "Folklore", definicion: "Música tradicional popular" },
        { palabra: "Etnomusicología", definicion: "Estudio de música tradicional" },
        { palabra: "Musicoterapia", definicion: "Terapia con música" },
        { palabra: "Acústica", definicion: "Ciencia del sonido" },
        { palabra: "Amplificación", definicion: "Aumento del volumen" },
        { palabra: "Reverberación", definicion: "Persistencia del sonido" },
        { palabra: "Eco", definicion: "Reflexión del sonido" },
        { palabra: "Resonancia", definicion: "Amplificación por vibración" },
        { palabra: "Frecuencia", definicion: "Número de vibraciones por segundo" },
        { palabra: "Amplitud", definicion: "Altura de la onda sonora" },
        { palabra: "Timbre", definicion: "Calidad característica del sonido" }
    ]
};

// --- LÓGICA DEL JUEGO (Adaptada para Firebase) ---

let conexion_intervalo = null;

function playConexionMental(roomCode, playerName) {
    const gameContent = document.getElementById('gameContent');
    const gameHeader = document.getElementById('gameHeader');

    gameHeader.innerHTML = renderGameHeader(roomCode, 'conexion');

    // Inyectar estilos
    if (!document.getElementById('conexion-styles')) {
        const style = document.createElement('style');
        style.id = 'conexion-styles';
        style.textContent = `
            .conexion-wrapper {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
                color: #2D3436;
                padding: 20px;
                border-radius: 15px;
                min-height: 500px;
            }
            .conexion-card {
                background: white;
                border-radius: 20px;
                padding: 30px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                margin-bottom: 20px;
                text-align: center;
            }
            .conexion-word {
                font-size: 2.5em;
                font-weight: 900;
                color: #6C5CE7;
                margin-bottom: 20px;
            }
            .conexion-timer {
                font-size: 3em;
                font-weight: 900;
                color: white;
                text-shadow: 0 3px 10px rgba(0,0,0,0.3);
                margin: 20px 0;
            }
            .conexion-btn {
                width: 100%;
                padding: 15px;
                font-size: 1.2em;
                font-weight: 700;
                color: white;
                border: none;
                border-radius: 15px;
                cursor: pointer;
                margin-bottom: 10px;
                transition: transform 0.2s;
            }
            .conexion-btn:hover { transform: translateY(-2px); }
            .btn-start { background: linear-gradient(135deg, #6C5CE7, #A29BFE); }
            .btn-next { background: linear-gradient(135deg, #00B894, #55EFC4); }
            .btn-skip { background: linear-gradient(135deg, #FDCB6E, #FAB1A0); }
            .btn-hint { 
                background: rgba(108, 92, 231, 0.1); 
                color: #6C5CE7; 
                border: 2px solid #6C5CE7;
            }
            .team-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 15px;
                margin-top: 20px;
            }
            .team-card {
                background: white;
                border-radius: 15px;
                padding: 15px;
                cursor: pointer;
                transition: transform 0.2s;
                border-top: 4px solid #6C5CE7;
            }
            .team-card:hover { transform: translateY(-5px); }
            .team-score { font-size: 2em; font-weight: 900; color: #6C5CE7; }
            .definition { color: #636E72; margin: 15px 0; display: none; }
            .definition.visible { display: block; }
        `;
        document.head.appendChild(style);
    }

    // Escuchar cambios en Firebase
    roomRef.on('value', (snapshot) => {
        const room = snapshot.val();
        if (!room) return;

        // Inicializar estado si no existe
        if (!room.conexion) {
            if (room.players[playerName] && Object.keys(room.players)[0] === playerName) {
                // Solo el líder inicializa
                database.ref(`rooms/${roomCode}/conexion`).set({
                    status: 'setup', // setup, playing, victory
                    teams: [
                        { name: 'Equipo 1', score: 0, color: '#FF6B6B' },
                        { name: 'Equipo 2', score: 0, color: '#4ECDC4' }
                    ],
                    currentWord: null,
                    timer: 30,
                    timerActive: false,
                    config: {
                        difficulty: 'medio',
                        timePerRound: 30
                    }
                });
            }
            return; // Esperar siguiente update
        }

        const state = room.conexion;
        const isLeader = Object.keys(room.players)[0] === playerName;

        let html = `<div class="conexion-wrapper">`;

        if (state.status === 'setup') {
            html += `
                <div class="conexion-card">
                    <h2>🧠 Configuración</h2>
                    ${isLeader ? `
                        <div style="margin: 20px 0;">
                            <label>Dificultad:</label>
                            <select id="conexion-diff" style="padding: 10px; width: 100%; margin-bottom: 15px;">
                                <option value="facil" ${state.config.difficulty === 'facil' ? 'selected' : ''}>Fácil</option>
                                <option value="medio" ${state.config.difficulty === 'medio' ? 'selected' : ''}>Medio</option>
                                <option value="dificil" ${state.config.difficulty === 'dificil' ? 'selected' : ''}>Difícil</option>
                            </select>
                            
                            <label>Tiempo (segundos):</label>
                            <input type="number" id="conexion-time" value="${state.config.timePerRound}" style="padding: 10px; width: 100%; margin-bottom: 15px;">
                            
                            <button class="conexion-btn btn-start" onclick="conexion_startGame('${roomCode}')">🎮 COMENZAR</button>
                        </div>
                    ` : `
                        <p>Esperando a que el líder configure la partida...</p>
                    `}
                </div>
            `;
        } else if (state.status === 'playing') {
            html += `
                <div style="text-align: center;">
                    <div class="conexion-timer ${state.timer <= 5 ? 'warning' : ''}">${state.timer}</div>
                    
                    <div class="conexion-card">
                        ${state.currentWord ? `
                            <div class="conexion-word">${state.currentWord.palabra}</div>
                            <div id="conexion-def" class="definition">${state.currentWord.definicion}</div>
                            <button class="conexion-btn btn-hint" onclick="document.getElementById('conexion-def').classList.toggle('visible')">💡 Ver Pista</button>
                        ` : '<h2>¡Prepárate!</h2>'}
                    </div>

                    ${isLeader ? `
                        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px; margin-bottom: 20px;">
                            <button class="conexion-btn btn-next" onclick="conexion_nextWord('${roomCode}')">➡️ SIGUIENTE</button>
                            <button class="conexion-btn btn-skip" onclick="conexion_nextWord('${roomCode}')">⏭️ PASAR</button>
                        </div>
                    ` : ''}

                    <div class="team-grid">
                        ${state.teams.map((team, index) => `
                            <div class="team-card" style="border-color: ${team.color}" onclick="${isLeader ? `conexion_addPoint('${roomCode}', ${index})` : ''}">
                                <div>${team.name}</div>
                                <div class="team-score" style="color: ${team.color}">${team.score}</div>
                                ${isLeader ? '<small>Toca para sumar punto</small>' : ''}
                            </div>
                        `).join('')}
                    </div>
                    
                    ${isLeader ? `
                        <div style="margin-top: 20px;">
                            <button class="btn-icon" onclick="conexion_togglePause('${roomCode}')">${state.timerActive ? '⏸️ Pausar' : '▶️ Reanudar'}</button>
                        </div>
                    ` : ''}
                </div>
            `;
        } else if (state.status === 'victory') {
            const winner = state.teams.reduce((prev, current) => (prev.score > current.score) ? prev : current);
            html += `
                <div class="conexion-card">
                    <h1 style="font-size: 4em;">🏆</h1>
                    <h2>¡${winner.name} Gana!</h2>
                    <div class="team-score" style="color: ${winner.color}">${winner.score} pts</div>
                    ${isLeader ? `<button class="conexion-btn btn-start" onclick="conexion_resetGame('${roomCode}')">🔄 Nueva Partida</button>` : ''}
                </div>
            `;
        }

        html += `</div>`;
        gameContent.innerHTML = html;
    });

    showScreen('gameScreen');
}

// --- FUNCIONES DE CONTROL (Host) ---

async function conexion_startGame(roomCode) {
    const diff = document.getElementById('conexion-diff').value;
    const time = parseInt(document.getElementById('conexion-time').value);

    // Seleccionar palabras
    const words = [...CONEXION_PALABRAS[diff]];
    // Mezclar
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }

    await database.ref(`rooms/${roomCode}/conexion`).update({
        status: 'playing',
        wordsDeck: words,
        config: { difficulty: diff, timePerRound: time },
        timer: time,
        timerActive: true
    });

    conexion_nextWord(roomCode);
    conexion_startTimer(roomCode);
}

async function conexion_nextWord(roomCode) {
    const snapshot = await database.ref(`rooms/${roomCode}/conexion`).once('value');
    const state = snapshot.val();

    if (!state.wordsDeck || state.wordsDeck.length === 0) {
        alert('¡Se acabaron las palabras!');
        return;
    }

    const nextWord = state.wordsDeck.pop();

    await database.ref(`rooms/${roomCode}/conexion`).update({
        currentWord: nextWord,
        wordsDeck: state.wordsDeck
    });
}

async function conexion_addPoint(roomCode, teamIndex) {
    const snapshot = await database.ref(`rooms/${roomCode}/conexion`).once('value');
    const state = snapshot.val();

    const teams = state.teams;
    teams[teamIndex].score++;

    if (teams[teamIndex].score >= 10) {
        await database.ref(`rooms/${roomCode}/conexion`).update({
            teams: teams,
            status: 'victory',
            timerActive: false
        });
    } else {
        await database.ref(`rooms/${roomCode}/conexion`).update({
            teams: teams
        });
        conexion_nextWord(roomCode);
    }
}

async function conexion_togglePause(roomCode) {
    const snapshot = await database.ref(`rooms/${roomCode}/conexion`).once('value');
    const active = snapshot.val().timerActive;

    await database.ref(`rooms/${roomCode}/conexion/timerActive`).set(!active);

    if (!active) {
        conexion_startTimer(roomCode);
    }
}

function conexion_startTimer(roomCode) {
    if (conexion_intervalo) clearInterval(conexion_intervalo);

    conexion_intervalo = setInterval(async () => {
        const snapshot = await database.ref(`rooms/${roomCode}/conexion`).once('value');
        const state = snapshot.val();

        if (!state || !state.timerActive || state.status !== 'playing') {
            clearInterval(conexion_intervalo);
            return;
        }

        if (state.timer > 0) {
            await database.ref(`rooms/${roomCode}/conexion/timer`).set(state.timer - 1);
        } else {
            // Tiempo agotado - pausar o siguiente turno?
            // En este juego simple, solo para el tiempo.
            await database.ref(`rooms/${roomCode}/conexion/timerActive`).set(false);
            clearInterval(conexion_intervalo);
        }
    }, 1000);
}

async function conexion_resetGame(roomCode) {
    await database.ref(`rooms/${roomCode}/conexion`).update({
        status: 'setup',
        teams: [
            { name: 'Equipo 1', score: 0, color: '#FF6B6B' },
            { name: 'Equipo 2', score: 0, color: '#4ECDC4' }
        ],
        timerActive: false
    });
}

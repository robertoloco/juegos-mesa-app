// ============================================
// LOVE LETTER - Implementación completa
// ============================================

// Definición de cartas
const LOVE_LETTER_CARDS = {
    1: { name: 'Guardia', count: 5, effect: 'Elige un jugador y nombra una carta (excepto Guardia). Si tiene esa carta, queda eliminado.' },
    2: { name: 'Sacerdote', count: 2, effect: 'Mira la mano de otro jugador.' },
    3: { name: 'Barón', count: 2, effect: 'Compara tu mano con otro jugador. El que tenga el número más bajo queda eliminado.' },
    4: { name: 'Doncella', count: 2, effect: 'Estás protegido hasta tu próximo turno.' },
    5: { name: 'Príncipe', count: 2, effect: 'Elige un jugador (puedes elegirte a ti). Ese jugador descarta su mano y roba una nueva carta.' },
    6: { name: 'Rey', count: 1, effect: 'Intercambia tu mano con otro jugador.' },
    7: { name: 'Condesa', count: 1, effect: 'Si tienes Rey o Príncipe en tu mano, DEBES jugar esta carta.' },
    8: { name: 'Princesa', count: 1, effect: 'Si descartas esta carta, quedas eliminado.' }
};

// Crear mazo completo
function createLoveLetterDeck() {
    const deck = [];
    for (let value = 1; value <= 8; value++) {
        const card = LOVE_LETTER_CARDS[value];
        for (let i = 0; i < card.count; i++) {
            deck.push({ value, name: card.name, effect: card.effect });
        }
    }
    shuffleArray(deck);
    return deck;
}

// Iniciar nueva ronda de Love Letter
async function startLoveLetterRound(roomCode) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();
    
    // Crear y barajar mazo
    const deck = createLoveLetterDeck();
    
    // Remover 1 carta (sin revelar)
    const removedCard = deck.pop();
    
    // Repartir 1 carta a cada jugador
    const players = room.playerOrder;
    players.forEach((playerName) => {
        const card = deck.pop();
        database.ref(`rooms/${roomCode}/players/${playerName}`).update({
            hand: [card],
            eliminated: false,
            protected: false
        });
    });
    
    // Actualizar sala
    await database.ref(`rooms/${roomCode}`).update({
        deck: deck,
        discardPile: [],
        removedCard: removedCard,
        currentTurnIndex: 0,
        roundInProgress: true,
        waitingForAction: null
    });
}

// Jugar Love Letter
function playLoveLetter(roomCode, playerName) {
    const gameContent = document.getElementById('gameContent');
    
    roomRef.on('value', (snapshot) => {
        const room = snapshot.val();
        if (!room) return;
        
        const player = room.players[playerName];
        if (!player) {
            gameContent.innerHTML = '<p style="color: red;">No estás en esta partida.</p>';
            return;
        }
        
        const currentPlayer = room.playerOrder[room.currentTurnIndex];
        const isMyTurn = currentPlayer === playerName;
        
        // Comprobar si alguien ganó la partida completa
        const winner = Object.keys(room.players).find(p => room.players[p].score >= room.pointsToWin);
        if (winner) {
            gameContent.innerHTML = `
                <h2 style="text-align: center; color: #667eea;">💌 Love Letter - Fin de la Partida</h2>
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 15px; text-align: center; margin: 20px 0;">
                    <h1 style="font-size: 48px; margin: 0;">🏆 ${winner} GANA!</h1>
                    <p style="margin-top: 20px; font-size: 18px;">${room.players[winner].score} puntos</p>
                </div>
                ${renderScoreboard(room)}
            `;
            return;
        }
        
        // Pantalla de inicio de ronda
        if (!room.roundInProgress) {
            let html = `
                <h2 style="text-align: center; color: #667eea;">💌 Love Letter - Ronda ${room.currentRound}</h2>
                ${renderScoreboard(room)}
                <div style="text-align: center; margin: 30px 0;">
                    <p>Puntos para ganar: ${room.pointsToWin}</p>
                    ${room.playerOrder[0] === playerName ? 
                        '<div class="btn" onclick="startLoveLetterRound(\'' + roomCode + '\')">Iniciar Ronda</div>' :
                        '<p style="color: #666;">Esperando que el primer jugador inicie la ronda...</p>'}
                </div>
            `;
            gameContent.innerHTML = html;
            return;
        }
        
        // Comprobar fin de ronda
        const activePlayers = room.playerOrder.filter(p => !room.players[p].eliminated);
        if (activePlayers.length === 1) {
            // Un solo jugador queda - ganador
            const roundWinner = activePlayers[0];
            gameContent.innerHTML = `
                <h2 style="text-align: center; color: #667eea;">💌 Fin de Ronda ${room.currentRound}</h2>
                <div style="background: #fffbea; border: 3px solid #ffd700; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0;">
                    <h1 style="font-size: 36px; color: #667eea;">${roundWinner} gana la ronda!</h1>
                    <p>Era el último jugador en pie</p>
                </div>
                ${renderScoreboard(room)}
                ${playerName === room.playerOrder[0] ? 
                    '<div class="btn" onclick="endLoveLetterRound(\'' + roomCode + '\', \'' + roundWinner + '\')">Continuar a Siguiente Ronda</div>' :
                    '<p style="text-align: center; color: #666;">Esperando que el primer jugador continúe...</p>'}
            `;
            return;
        }
        
        if (room.deck.length === 0) {
            // Se acabó el mazo - gana el jugador con la carta más alta
            let highestValue = 0;
            let roundWinner = null;
            
            activePlayers.forEach(p => {
                const cardValue = room.players[p].hand[0].value;
                if (cardValue > highestValue) {
                    highestValue = cardValue;
                    roundWinner = p;
                }
            });
            
            gameContent.innerHTML = `
                <h2 style="text-align: center; color: #667eea;">💌 Fin de Ronda ${room.currentRound}</h2>
                <div style="background: #fffbea; border: 3px solid #ffd700; padding: 30px; border-radius: 15px; text-align: center; margin: 20px 0;">
                    <h1 style="font-size: 36px; color: #667eea;">${roundWinner} gana la ronda!</h1>
                    <p>Tenía la carta más alta: ${LOVE_LETTER_CARDS[highestValue].name} (${highestValue})</p>
                </div>
                <h3 style="margin-top: 20px;">Cartas finales:</h3>
                <div class="player-list">
                    ${activePlayers.map(p => {
                        const card = room.players[p].hand[0];
                        return `<div class="player-item">${p}: ${card.name} (${card.value})</div>`;
                    }).join('')}
                </div>
                ${renderScoreboard(room)}
                ${playerName === room.playerOrder[0] ? 
                    '<div class="btn" onclick="endLoveLetterRound(\'' + roomCode + '\', \'' + roundWinner + '\')">Continuar a Siguiente Ronda</div>' :
                    '<p style="text-align: center; color: #666;">Esperando que el primer jugador continúe...</p>'}
            `;
            return;
        }
        
        // Pantalla de juego normal
        let html = `
            <h2 style="text-align: center; color: #667eea;">💌 Love Letter - Ronda ${room.currentRound}</h2>
            <div style="background: ${isMyTurn ? '#e7f3ff' : '#f8f9fa'}; padding: 15px; border-radius: 10px; text-align: center; margin-bottom: 15px;">
                <strong>Turno de: ${currentPlayer}</strong> ${isMyTurn ? '(TÚ)' : ''}
                <br><small>Cartas en el mazo: ${room.deck.length}</small>
            </div>
        `;
        
        // Mostrar jugadores
        html += '<div class="player-list">';
        room.playerOrder.forEach(p => {
            const pPlayer = room.players[p];
            let className = 'player-item';
            if (pPlayer.eliminated) className += ' eliminated';
            if (p === currentPlayer && !pPlayer.eliminated) className += ' current-turn';
            
            html += `
                <div class="${className}">
                    <strong>${p}</strong> ${p === playerName ? '(TÚ)' : ''}
                    ${pPlayer.eliminated ? ' - ELIMINADO' : ''}
                    ${pPlayer.protected && !pPlayer.eliminated ? ' 🛡️ Protegido' : ''}
                    <br><small>Puntos: ${pPlayer.score}</small>
                </div>
            `;
        });
        html += '</div>';
        
        // Mostrar cartas descartadas
        if (room.discardPile.length > 0) {
            html += `
                <div style="margin: 15px 0;">
                    <strong>Descartes:</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px;">
                        ${room.discardPile.slice(-5).map(c => `
                            <span style="background: #e0e0e0; padding: 5px 10px; border-radius: 5px; font-size: 12px;">
                                ${c.name} (${c.value})
                            </span>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Mostrar mi mano
        if (!player.eliminated) {
            html += '<h3 style="margin-top: 20px;">Tu mano:</h3>';
            player.hand.forEach((card, index) => {
                html += `
                    <div class="love-letter-card">
                        <div class="card-number">${card.value}</div>
                        <div class="card-name">${card.name}</div>
                        <div class="card-effect">${card.effect}</div>
                    </div>
                `;
            });
            
            if (isMyTurn && !room.waitingForAction) {
                html += '<div class="btn" onclick="drawLoveLetterCard(\'' + roomCode + '\', \'' + playerName + '\')">Robar Carta</div>';
            } else if (isMyTurn && room.waitingForAction === 'chooseCard') {
                html += `
                    <h3 style="margin-top: 20px;">Elige una carta para jugar:</h3>
                    ${player.hand.map((card, index) => `
                        <div class="btn" onclick="playLoveLetterCard(\'' + roomCode + '\', \'' + playerName + '\', ${index})">
                            Jugar ${card.name} (${card.value})
                        </div>
                    `).join('')}
                `;
            }
        }
        
        gameContent.innerHTML = html;
    });
    
    showScreen('gameScreen');
}

function renderScoreboard(room) {
    let html = '<div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 15px 0;"><h3 style="margin-bottom: 10px;">Puntuación:</h3>';
    room.playerOrder.forEach(p => {
        html += `<div style="display: flex; justify-content: space-between; padding: 5px 0;">
            <span>${p}</span>
            <span style="font-weight: bold;">${room.players[p].score} puntos</span>
        </div>`;
    });
    html += '</div>';
    return html;
}

// Robar carta al inicio del turno
async function drawLoveLetterCard(roomCode, playerName) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();
    
    if (room.deck.length === 0) {
        alert('No quedan cartas en el mazo');
        return;
    }
    
    const card = room.deck[room.deck.length - 1];
    const newDeck = room.deck.slice(0, -1);
    
    // Añadir carta a la mano del jugador
    const playerHand = room.players[playerName].hand;
    playerHand.push(card);
    
    await database.ref(`rooms/${roomCode}`).update({
        deck: newDeck,
        [`players/${playerName}/hand`]: playerHand,
        waitingForAction: 'chooseCard'
    });
}

// Jugar una carta
async function playLoveLetterCard(roomCode, playerName, cardIndex) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();
    
    const player = room.players[playerName];
    const card = player.hand[cardIndex];
    
    // Verificar si debe jugar Condesa
    if (player.hand.some(c => c.value === 7)) {
        const otherCard = player.hand.find(c => c.value !== 7);
        if (otherCard && (otherCard.value === 5 || otherCard.value === 6)) {
            if (card.value !== 7) {
                alert('Debes jugar la Condesa si tienes Rey o Príncipe');
                return;
            }
        }
    }
    
    // Remover carta de la mano
    const newHand = player.hand.filter((_, i) => i !== cardIndex);
    
    // Añadir carta al descarte
    const newDiscardPile = [...room.discardPile, card];
    
    // Remover protección de todos los jugadores
    const updates = {
        [`players/${playerName}/hand`]: newHand,
        discardPile: newDiscardPile,
        waitingForAction: null
    };
    
    room.playerOrder.forEach(p => {
        updates[`players/${p}/protected`] = false;
    });
    
    // Aplicar efecto de la carta
    await applyLoveLetterCardEffect(roomCode, playerName, card, room, updates);
}

// Aplicar efecto de carta
async function applyLoveLetterCardEffect(roomCode, playerName, card, room, updates) {
    switch (card.value) {
        case 1: // Guardia
            const targetName = prompt('Elige un jugador (nombre exacto):');
            if (!targetName || !room.players[targetName] || room.players[targetName].eliminated) {
                alert('Jugador inválido');
                return;
            }
            if (room.players[targetName].protected) {
                alert(`${targetName} está protegido`);
                break;
            }
            const guessValue = parseInt(prompt('Adivina el número de su carta (2-8):'));
            if (guessValue >= 2 && guessValue <= 8) {
                const targetCard = room.players[targetName].hand[0];
                if (targetCard.value === guessValue) {
                    updates[`players/${targetName}/eliminated`] = true;
                    updates.discardPile = [...updates.discardPile, targetCard];
                    updates[`players/${targetName}/hand`] = [];
                    alert(`¡Correcto! ${targetName} tenía ${targetCard.name} y queda eliminado`);
                } else {
                    alert(`Incorrecto. ${targetName} no tiene esa carta.`);
                }
            }
            break;
            
        case 2: // Sacerdote
            const priestTarget = prompt('Elige un jugador para ver su carta (nombre exacto):');
            if (priestTarget && room.players[priestTarget] && !room.players[priestTarget].eliminated) {
                if (room.players[priestTarget].protected) {
                    alert(`${priestTarget} está protegido`);
                } else {
                    const targetCard = room.players[priestTarget].hand[0];
                    alert(`${priestTarget} tiene: ${targetCard.name} (${targetCard.value})`);
                }
            }
            break;
            
        case 3: // Barón
            const baronTarget = prompt('Elige un jugador para comparar manos (nombre exacto):');
            if (baronTarget && room.players[baronTarget] && !room.players[baronTarget].eliminated && baronTarget !== playerName) {
                if (room.players[baronTarget].protected) {
                    alert(`${baronTarget} está protegido`);
                } else {
                    const myCard = room.players[playerName].hand[0];
                    const theirCard = room.players[baronTarget].hand[0];
                    
                    if (myCard.value > theirCard.value) {
                        updates[`players/${baronTarget}/eliminated`] = true;
                        updates.discardPile = [...updates.discardPile, theirCard];
                        updates[`players/${baronTarget}/hand`] = [];
                        alert(`¡Ganaste! Ellos tenían ${theirCard.name} (${theirCard.value}). ${baronTarget} queda eliminado.`);
                    } else if (myCard.value < theirCard.value) {
                        updates[`players/${playerName}/eliminated`] = true;
                        updates.discardPile = [...updates.discardPile, myCard];
                        updates[`players/${playerName}/hand`] = [];
                        alert(`Perdiste. Ellos tenían ${theirCard.name} (${theirCard.value}). Quedas eliminado.`);
                    } else {
                        alert(`Empate. Ambos tienen ${myCard.name} (${myCard.value})`);
                    }
                }
            }
            break;
            
        case 4: // Doncella
            updates[`players/${playerName}/protected`] = true;
            break;
            
        case 5: // Príncipe
            const princeTarget = prompt('Elige un jugador que descarte y robe (nombre exacto, o tu propio nombre):');
            if (princeTarget && room.players[princeTarget] && !room.players[princeTarget].eliminated) {
                if (princeTarget !== playerName && room.players[princeTarget].protected) {
                    alert(`${princeTarget} está protegido`);
                } else {
                    const discardedCard = room.players[princeTarget].hand[0];
                    updates.discardPile = [...updates.discardPile, discardedCard];
                    
                    if (discardedCard.value === 8) {
                        // Princesa - eliminado
                        updates[`players/${princeTarget}/eliminated`] = true;
                        updates[`players/${princeTarget}/hand`] = [];
                        alert(`${princeTarget} descartó la Princesa y queda eliminado`);
                    } else {
                        // Robar nueva carta
                        if (room.deck.length > 0) {
                            const newCard = room.deck[room.deck.length - 1];
                            updates.deck = room.deck.slice(0, -1);
                            updates[`players/${princeTarget}/hand`] = [newCard];
                        } else {
                            // Usar la carta removida al inicio
                            updates[`players/${princeTarget}/hand`] = [room.removedCard];
                        }
                    }
                }
            }
            break;
            
        case 6: // Rey
            const kingTarget = prompt('Elige un jugador para intercambiar manos (nombre exacto):');
            if (kingTarget && room.players[kingTarget] && !room.players[kingTarget].eliminated && kingTarget !== playerName) {
                if (room.players[kingTarget].protected) {
                    alert(`${kingTarget} está protegido`);
                } else {
                    const myCard = room.players[playerName].hand[0];
                    const theirCard = room.players[kingTarget].hand[0];
                    
                    updates[`players/${playerName}/hand`] = [theirCard];
                    updates[`players/${kingTarget}/hand`] = [myCard];
                    alert(`Intercambiaste cartas con ${kingTarget}`);
                }
            }
            break;
            
        case 7: // Condesa
            // No hace nada
            break;
            
        case 8: // Princesa
            updates[`players/${playerName}/eliminated`] = true;
            updates[`players/${playerName}/hand`] = [];
            alert('Jugaste la Princesa. Quedas eliminado.');
            break;
    }
    
    // Avanzar al siguiente turno
    let nextTurnIndex = (room.currentTurnIndex + 1) % room.playerOrder.length;
    while (room.players[room.playerOrder[nextTurnIndex]].eliminated) {
        nextTurnIndex = (nextTurnIndex + 1) % room.playerOrder.length;
    }
    
    updates.currentTurnIndex = nextTurnIndex;
    
    await database.ref(`rooms/${roomCode}`).update(updates);
}

// Finalizar ronda y dar punto al ganador
async function endLoveLetterRound(roomCode, winnerName) {
    const snapshot = await database.ref(`rooms/${roomCode}`).once('value');
    const room = snapshot.val();
    
    const newScore = room.players[winnerName].score + 1;
    
    await database.ref(`rooms/${roomCode}`).update({
        [`players/${winnerName}/score`]: newScore,
        currentRound: room.currentRound + 1,
        roundInProgress: false,
        currentTurnIndex: 0
    });
}

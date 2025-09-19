/**
 * FIFA ULTIMATE TEAM DRAFT GAME
 * A soccer team builder game where you draft players and build the ultimate team
 * Features: Formation selection, player chemistry, weighted drops, and special Diddy Kong!
 */

// Player database with legendary soccer players
// Each player has: name, position, rating (1-105), country, and optional special flags
const players = [
    // Goalkeepers
    { name: "Lev Yashin", position: "GK", rating: 95, country: "Russia" },
    { name: "Manuel Neuer", position: "GK", rating: 92, country: "Germany" },
    { name: "Gianluigi Buffon", position: "GK", rating: 91, country: "Italy" },
    { name: "Iker Casillas", position: "GK", rating: 90, country: "Spain" },
    { name: "Peter Schmeichel", position: "GK", rating: 89, country: "Denmark" },
    
    // Defenders
    { name: "Paolo Maldini", position: "CB", rating: 96, country: "Italy" },
    { name: "Franz Beckenbauer", position: "CB", rating: 95, country: "Germany" },
    { name: "Bobby Moore", position: "CB", rating: 94, country: "England" },
    { name: "Fabio Cannavaro", position: "CB", rating: 93, country: "Italy" },
    { name: "Sergio Ramos", position: "CB", rating: 92, country: "Spain" },
    { name: "Cafu", position: "RB", rating: 94, country: "Brazil" },
    { name: "Roberto Carlos", position: "LB", rating: 93, country: "Brazil" },
    { name: "Philipp Lahm", position: "RB", rating: 91, country: "Germany" },
    { name: "Ashley Cole", position: "LB", rating: 90, country: "England" },
    { name: "Dani Alves", position: "RB", rating: 89, country: "Brazil" },
    
    // Midfielders
    { name: "Pelé", position: "CM", rating: 98, country: "Brazil" },
    { name: "Diego Maradona", position: "CM", rating: 97, country: "Argentina" },
    { name: "Zinedine Zidane", position: "CM", rating: 96, country: "France" },
    { name: "Johan Cruyff", position: "CM", rating: 95, country: "Netherlands" },
    { name: "Lionel Messi", position: "RW", rating: 99, country: "Argentina" },
    { name: "Cristiano Ronaldo", position: "LW", rating: 99, country: "Portugal" },
    { name: "Neymar", position: "LW", rating: 94, country: "Brazil" },
    { name: "Gareth Bale", position: "RW", rating: 92, country: "Wales" },
    { name: "Arjen Robben", position: "RW", rating: 91, country: "Netherlands" },
    { name: "Eden Hazard", position: "LW", rating: 90, country: "Belgium" },
    { name: "Andrés Iniesta", position: "CM", rating: 94, country: "Spain" },
    { name: "Xavi", position: "CM", rating: 93, country: "Spain" },
    { name: "Luka Modrić", position: "CM", rating: 92, country: "Croatia" },
    { name: "Steven Gerrard", position: "CM", rating: 91, country: "England" },
    { name: "Paul Scholes", position: "CM", rating: 90, country: "England" },
    { name: "Andrea Pirlo", position: "CM", rating: 89, country: "Italy" },
    
    // Forwards
    { name: "Ronaldo Nazário", position: "ST", rating: 96, country: "Brazil" },
    { name: "Thierry Henry", position: "ST", rating: 94, country: "France" },
    { name: "Alan Shearer", position: "ST", rating: 93, country: "England" },
    { name: "Romário", position: "ST", rating: 92, country: "Brazil" },
    { name: "Marco van Basten", position: "ST", rating: 91, country: "Netherlands" },
    { name: "Gabriel Batistuta", position: "ST", rating: 90, country: "Argentina" },
    { name: "Dennis Bergkamp", position: "ST", rating: 89, country: "Netherlands" },
    { name: "Raúl", position: "ST", rating: 88, country: "Spain" },
    
    // Lower-rated players to make it harder
    { name: "John Smith", position: "GK", rating: 65, country: "England" },
    { name: "Mike Johnson", position: "GK", rating: 68, country: "USA" },
    { name: "Carlos Rodriguez", position: "GK", rating: 70, country: "Spain" },
    
    { name: "Tom Wilson", position: "CB", rating: 62, country: "England" },
    { name: "David Brown", position: "CB", rating: 65, country: "Scotland" },
    { name: "James Miller", position: "CB", rating: 67, country: "Wales" },
    { name: "Alex Davis", position: "CB", rating: 69, country: "Ireland" },
    
    { name: "Sam Taylor", position: "LB", rating: 63, country: "England" },
    { name: "Ben White", position: "LB", rating: 66, country: "England" },
    { name: "Luke Green", position: "RB", rating: 64, country: "England" },
    { name: "Harry Black", position: "RB", rating: 67, country: "England" },
    
    { name: "Jake Moore", position: "CM", rating: 61, country: "England" },
    { name: "Ryan Clark", position: "CM", rating: 64, country: "England" },
    { name: "Matt Lewis", position: "CM", rating: 66, country: "England" },
    { name: "Dan Walker", position: "CM", rating: 68, country: "England" },
    { name: "Chris Hall", position: "CM", rating: 70, country: "England" },
    
    { name: "Adam Young", position: "LM", rating: 62, country: "England" },
    { name: "Mark King", position: "LM", rating: 65, country: "England" },
    { name: "Paul Wright", position: "RM", rating: 63, country: "England" },
    { name: "Steve Scott", position: "RM", rating: 66, country: "England" },
    
    { name: "Kevin Adams", position: "ST", rating: 60, country: "England" },
    { name: "Rob Turner", position: "ST", rating: 63, country: "England" },
    { name: "Gary Phillips", position: "ST", rating: 65, country: "England" },
    { name: "Tony Evans", position: "ST", rating: 67, country: "England" },
    { name: "Phil Roberts", position: "ST", rating: 69, country: "England" },
    
    { name: "Steve Cooper", position: "LW", rating: 61, country: "England" },
    { name: "Dave Mitchell", position: "LW", rating: 64, country: "England" },
    { name: "Andy Bell", position: "RW", rating: 62, country: "England" },
    { name: "Neil Ward", position: "RW", rating: 65, country: "England" },
    
    // Some international lower-rated players
    { name: "Pedro Silva", position: "GK", rating: 66, country: "Brazil" },
    { name: "Marco Rossi", position: "CB", rating: 68, country: "Italy" },
    { name: "Pierre Dubois", position: "CM", rating: 69, country: "France" },
    { name: "Hans Mueller", position: "ST", rating: 71, country: "Germany" },
    { name: "Juan Garcia", position: "LW", rating: 67, country: "Spain" },
    { name: "Lars Andersen", position: "RW", rating: 70, country: "Denmark" },
    
    // LEGENDARY DIDDY - 1% CHANCE
    { name: "Diddy Kong", position: "ST", rating: 105, country: "Kong Island", isDiddy: true }
];

// Formation definitions - each formation has required positions and visual layout
// Positions are mapped to field coordinates for display
const formations = {
    "4-4-2": {
        positions: {
            GK: 1,
            LB: 1,
            CB1: 1,
            CB2: 1,
            RB: 1,
            LM: 1,
            CM1: 1,
            CM2: 1,
            RM: 1,
            ST1: 1,
            ST2: 1
        },
        layout: [
            { row: "attack", positions: ["ST1", "ST2"] },
            { row: "midfield", positions: ["LM", "CM1", "CM2", "RM"] },
            { row: "defense", positions: ["LB", "CB1", "CB2", "RB"] },
            { row: "goalkeeper", positions: ["GK"] }
        ]
    },
    "4-3-3": {
        positions: {
            GK: 1,
            LB: 1,
            CB1: 1,
            CB2: 1,
            RB: 1,
            CM1: 1,
            CM2: 1,
            CM3: 1,
            LW: 1,
            ST: 1,
            RW: 1
        },
        layout: [
            { row: "attack", positions: ["LW", "ST", "RW"] },
            { row: "midfield", positions: ["CM1", "CM2", "CM3"] },
            { row: "defense", positions: ["LB", "CB1", "CB2", "RB"] },
            { row: "goalkeeper", positions: ["GK"] }
        ]
    },
    "3-5-2": {
        positions: {
            GK: 1,
            CB1: 1,
            CB2: 1,
            CB3: 1,
            LM: 1,
            CM1: 1,
            CM2: 1,
            CM3: 1,
            RM: 1,
            ST1: 1,
            ST2: 1
        },
        layout: [
            { row: "attack", positions: ["ST1", "ST2"] },
            { row: "midfield", positions: ["LM", "CM1", "CM2", "CM3", "RM"] },
            { row: "defense", positions: ["CB1", "CB2", "CB3"] },
            { row: "goalkeeper", positions: ["GK"] }
        ]
    }
};

// Game state - tracks all current game data
// This object holds the current state of the draft, team, and UI
let gameState = {
    selectedFormation: "4-4-2",
    spinsLeft: 15,
    team: {},
    bench: [null, null, null],
    currentSpin: null,
    selectedPlayer: null
};

// Position requirements
const positionRequirements = {
    GK: 1,
    CB: 2,
    LB: 1,
    RB: 1,
    CM: 2,
    LM: 1,
    RM: 1,
    ST: 2
};

// DOM elements
const spinBtn = document.getElementById('spin-btn');
const playerOptions = document.getElementById('player-options');
const spinsLeftEl = document.getElementById('spins-left');
const teamRatingEl = document.getElementById('team-rating');
const playersDraftedEl = document.getElementById('players-drafted');
const finalScore = document.getElementById('final-score');
const finalRating = document.getElementById('final-rating');
const ratingMessage = document.getElementById('rating-message');
const restartBtn = document.getElementById('restart-btn');

// Initialize game
// Initialize the game - sets up event listeners and initial state
// Called when the page loads to prepare the game for play
function initGame() {
    // Initialize team structure based on default formation
    initializeTeam();
    
    // Add formation selection event listeners
    document.querySelectorAll('.formation-card').forEach(card => {
        card.addEventListener('click', () => selectFormation(card.dataset.formation));
    });
    
    spinBtn.addEventListener('click', handleSpin);
    restartBtn.addEventListener('click', restartGame);
}

// Initialize team structure - creates empty team object based on selected formation
// Sets up the team object with null values for each required position
function initializeTeam() {
    const formation = formations[gameState.selectedFormation];
    gameState.team = {};
    Object.keys(formation.positions).forEach(position => {
        gameState.team[position] = null;
    });
}

// Handle formation selection - switches to selected formation and updates UI
// Updates game state, regenerates field layout, and shows main game screen
function selectFormation(formation) {
    // Remove previous selection
    document.querySelectorAll('.formation-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    document.querySelector(`[data-formation="${formation}"]`).classList.add('selected');
    
    // Update game state
    gameState.selectedFormation = formation;
    initializeTeam();
    
    // Update formation display
    document.getElementById('selected-formation').textContent = formation;
    
    // Generate field layout
    generateFieldLayout();
    
    // Hide formation selection and show main game
    setTimeout(() => {
        document.getElementById('formation-selection').style.display = 'none';
        document.getElementById('main-game').style.display = 'block';
        updateDisplay();
    }, 500);
}

// Generate field layout based on selected formation - creates visual field representation
// Dynamically builds the field HTML based on formation structure and positions
function generateFieldLayout() {
    const formation = formations[gameState.selectedFormation];
    const field = document.querySelector('.field');
    
    // Clear existing layout
    field.innerHTML = '';
    
    // Generate rows based on formation
    formation.layout.forEach(rowData => {
        const row = document.createElement('div');
        row.className = 'position-row';
        
        rowData.positions.forEach(position => {
            const positionDiv = document.createElement('div');
            positionDiv.className = 'position';
            positionDiv.dataset.position = position;
            
            positionDiv.innerHTML = `
                <div class="position-label">${position}</div>
                <div class="player-slot" id="${position}"></div>
            `;
            
            row.appendChild(positionDiv);
        });
        
        field.appendChild(row);
    });
}

// Handle spin button click - main game loop function
// Generates new player options, updates game state, and manages draft progression
function handleSpin() {
    if (gameState.spinsLeft <= 0) return;
    
    gameState.spinsLeft--;
    const neededPositions = getNeededPositions();
    const spinPlayers = getPlayersForNeededPositions(neededPositions);
    const benchPlayer = getRandomBenchPlayer();
    
    gameState.currentSpin = {
        main: spinPlayers,
        bench: benchPlayer
    };
    
    displayPlayerOptions();
    updateDisplay();
    
    if (gameState.spinsLeft === 0) {
        spinBtn.disabled = true;
        spinBtn.textContent = "DRAFT COMPLETE!";
    }
}

// Get available players (not already in team or bench) - filters out used players
// Returns array of players that haven't been drafted yet
function getAvailablePlayers() {
    const usedPlayers = [
        ...Object.values(gameState.team).filter(p => p !== null),
        ...gameState.bench.filter(p => p !== null)
    ];
    
    return players.filter(player => 
        !usedPlayers.some(used => used.name === player.name)
    );
}

// Get positions that still need to be filled - determines what positions are empty
// Returns array of position names that still need players in the current formation
function getNeededPositions() {
    const formation = formations[gameState.selectedFormation];
    const neededPositions = [];
    
    // Check each position in the formation
    for (const [position, requiredCount] of Object.entries(formation.positions)) {
        const currentCount = Object.values(gameState.team).filter(p => {
            if (!p) return false;
            const playerPos = getPlayerPosition(p);
            return playerPos === position;
        }).length;
        
        if (currentCount < requiredCount) {
            neededPositions.push(position);
        }
    }
    
    return neededPositions;
}

// Get players for needed positions - smart draft system
// Returns 3 players that can fill the positions still needed in the formation
function getPlayersForNeededPositions(neededPositions) {
    const availablePlayers = getAvailablePlayers();
    const spinPlayers = [];
    
    if (neededPositions.length === 0) {
        // If all positions are filled, get random players for bench
        return getWeightedRandomPlayers(availablePlayers, 3);
    }
    
    // Get 3 players that can fill needed positions
    for (let i = 0; i < 3 && i < neededPositions.length; i++) {
        const position = neededPositions[i];
        const positionType = getPositionType(position);
        
        // Find players that can play this position
        const suitablePlayers = availablePlayers.filter(player => 
            canPlayerPlayPosition(player, positionType)
        );
        
        if (suitablePlayers.length > 0) {
            const randomPlayer = getWeightedRandomPlayer(suitablePlayers);
            spinPlayers.push(randomPlayer);
            
            // Remove from available to avoid duplicates
            const index = availablePlayers.findIndex(p => p.name === randomPlayer.name);
            if (index > -1) {
                availablePlayers.splice(index, 1);
            }
        }
    }
    
    // If we need more players, fill with weighted random ones
    while (spinPlayers.length < 3 && availablePlayers.length > 0) {
        const randomPlayer = getWeightedRandomPlayer(availablePlayers);
        spinPlayers.push(randomPlayer);
        availablePlayers.splice(availablePlayers.indexOf(randomPlayer), 1);
    }
    
    return spinPlayers;
}

// Get weighted random player (lower-rated players more likely) - difficulty system
// Higher rated players are rarer, Diddy Kong has special 1% chance
function getWeightedRandomPlayer(playerList) {
    if (playerList.length === 0) return null;
    
    // Check for Diddy Kong first (1% chance)
    const diddyPlayers = playerList.filter(p => p.isDiddy);
    if (diddyPlayers.length > 0 && Math.random() < 0.01) {
        return diddyPlayers[0];
    }
    
    // Create weighted array where lower ratings have higher weights
    const weightedPlayers = [];
    
    playerList.forEach(player => {
        // Skip Diddy for normal weighted selection
        if (player.isDiddy) return;
        
        let weight;
        if (player.rating >= 95) weight = 2;      // Very rare (increased from 1)
        else if (player.rating >= 90) weight = 4;  // Rare (increased from 2)
        else if (player.rating >= 85) weight = 6;  // Uncommon (increased from 3)
        else if (player.rating >= 80) weight = 8;  // Common (increased from 5)
        else if (player.rating >= 75) weight = 10; // Very common (increased from 8)
        else if (player.rating >= 70) weight = 12; // Extremely common (same)
        else weight = 15; // Super common for bums (same)
        
        // Add player multiple times based on weight
        for (let i = 0; i < weight; i++) {
            weightedPlayers.push(player);
        }
    });
    
    return weightedPlayers[Math.floor(Math.random() * weightedPlayers.length)];
}

// Get weighted random players - gets multiple players using weighted system
// Returns array of unique players selected with weighted probabilities
function getWeightedRandomPlayers(playerList, count) {
    const result = [];
    const availablePlayers = [...playerList];
    
    for (let i = 0; i < count && availablePlayers.length > 0; i++) {
        const randomPlayer = getWeightedRandomPlayer(availablePlayers);
        if (randomPlayer) {
            result.push(randomPlayer);
            const index = availablePlayers.findIndex(p => p.name === randomPlayer.name);
            if (index > -1) {
                availablePlayers.splice(index, 1);
            }
        }
    }
    
    return result;
}

// Get position type from formation position
function getPositionType(position) {
    if (position === 'GK') return 'GK';
    if (position.startsWith('CB')) return 'CB';
    if (position === 'LB') return 'LB';
    if (position === 'RB') return 'RB';
    if (position.startsWith('CM')) return 'CM';
    if (position === 'LM') return 'LM';
    if (position === 'RM') return 'RM';
    if (position.startsWith('ST')) return 'ST';
    if (position === 'LW') return 'LW';
    if (position === 'RW') return 'RW';
    return position;
}

// Check if player can play a specific position type
function canPlayerPlayPosition(player, positionType) {
    const playerPosition = player.position;
    
    // Direct match
    if (playerPosition === positionType) return true;
    
    // Flexible position mappings
    if (positionType === 'GK') return playerPosition === 'GK';
    if (positionType === 'CB') return playerPosition === 'CB';
    if (positionType === 'LB') return ['LB', 'RB'].includes(playerPosition);
    if (positionType === 'RB') return ['LB', 'RB'].includes(playerPosition);
    if (positionType === 'CM') return playerPosition === 'CM';
    if (positionType === 'LM') return ['LM', 'RM', 'LW', 'RW'].includes(playerPosition);
    if (positionType === 'RM') return ['LM', 'RM', 'LW', 'RW'].includes(playerPosition);
    if (positionType === 'ST') return ['ST', 'LW', 'RW'].includes(playerPosition);
    if (positionType === 'LW') return ['ST', 'LW', 'RW', 'LM', 'RM'].includes(playerPosition);
    if (positionType === 'RW') return ['ST', 'LW', 'RW', 'LM', 'RM'].includes(playerPosition);
    
    return false;
}

// Get random bench player - selects a random player for bench option
// Used when all main positions are filled to provide bench alternatives
function getRandomBenchPlayer() {
    const availablePlayers = getAvailablePlayers();
    if (availablePlayers.length === 0) return null;
    return availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
}

// Get random players from available pool
function getRandomPlayers(availablePlayers, count) {
    const shuffled = [...availablePlayers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Display player options from current spin
// Display player options - shows the 3 main players + 1 bench player
// Creates player cards and displays them in the selection area
function displayPlayerOptions() {
    playerOptions.innerHTML = '';
    
    // Main team options
    gameState.currentSpin.main.forEach((player, index) => {
        const playerCard = createPlayerCard(player, 'main');
        playerOptions.appendChild(playerCard);
    });
    
    // Bench option
    const benchCard = createPlayerCard(gameState.currentSpin.bench, 'bench');
    playerOptions.appendChild(benchCard);
}

// Create player card element - builds the visual player card with animations
// Creates HTML element with player info, face emoji, and hover effects
function createPlayerCard(player, type) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.dataset.type = type;
    card.dataset.playerName = player.name;
    
    // Get player face emoji
    const face = getPlayerFace(player);
    
    card.innerHTML = `
        <div class="player-face">${face}</div>
        <div class="player-name">${player.name}</div>
        <div class="player-position">${player.position}</div>
        <div class="player-rating">${player.rating}</div>
        <div class="player-country">${player.country}</div>
    `;
    
    card.addEventListener('click', () => selectPlayer(player, type));
    
    // Add dance animation on hover based on rating
    card.addEventListener('mouseenter', () => {
        card.classList.add('dancing');
        
        // Add special dance class based on rating
        if (player.isDiddy) {
            card.classList.add('diddy-dance');
            showDiddyGif();
        } else if (player.rating >= 95) {
            card.classList.add('legend-dance');
        } else if (player.rating >= 90) {
            card.classList.add('star-dance');
        } else if (player.rating >= 80) {
            card.classList.add('good-dance');
        } else if (player.rating >= 70) {
            card.classList.add('average-dance');
        } else {
            card.classList.add('bum-dance');
        }
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('dancing', 'legend-dance', 'star-dance', 'good-dance', 'average-dance', 'bum-dance', 'diddy-dance');
        hideDiddyGif();
    });
    
    return card;
}

// Get player face emoji based on rating - returns appropriate emoji for player
// Special case for Diddy Kong (🦍), different faces for different rating tiers
function getPlayerFace(player) {
    // Special case for Diddy Kong
    if (player.isDiddy) return '🦍'; // Monkey face for Diddy
    
    const rating = player.rating;
    if (rating >= 95) return '🤴'; // King face for legends
    else if (rating >= 90) return '😎'; // Cool face for stars
    else if (rating >= 85) return '😤'; // Determined face for good players
    else if (rating >= 80) return '😊'; // Happy face for decent players
    else if (rating >= 75) return '😐'; // Neutral face for average players
    else if (rating >= 70) return '😕'; // Slightly sad face for below average
    else if (rating >= 65) return '😟'; // Worried face for poor players
    else if (rating >= 60) return '😰'; // Anxious face for very poor players
    else return '😵'; // Dizzy face for terrible players
}

// Handle player selection - main player selection logic
// Determines if player goes to main team or bench and shows position options
function selectPlayer(player, type) {
    if (type === 'main') {
        // Show position selection for main team players
        showPositionSelection(player);
    } else if (type === 'bench') {
        // Show bench selection for bench players
        showBenchSelection(player);
    }
}

// Show position selection interface
// Show position selection - displays available positions for main team player
// Highlights empty positions where the selected player can be placed
function showPositionSelection(player) {
    playerOptions.innerHTML = `
        <div class="position-selection">
            <h3>Choose position for ${player.name}</h3>
            <p>Click on an available position on the field:</p>
            <div class="available-positions">
                ${getAvailablePositionButtons(player)}
            </div>
            <button class="cancel-btn" onclick="cancelPositionSelection()">Cancel</button>
        </div>
    `;
    
    // Store the selected player for position assignment
    gameState.selectedPlayer = player;
    gameState.selectionType = 'position';
    
    // Highlight available positions
    highlightAvailablePositions(player);
}

// Show bench selection interface
function showBenchSelection(player) {
    playerOptions.innerHTML = `
        <div class="position-selection">
            <h3>Choose bench slot for ${player.name}</h3>
            <p>Click on an available bench slot:</p>
            <div class="available-positions">
                ${getAvailableBenchButtons(player)}
            </div>
            <button class="cancel-btn" onclick="cancelPositionSelection()">Cancel</button>
        </div>
    `;
    
    // Store the selected player for bench assignment
    gameState.selectedPlayer = player;
    gameState.selectionType = 'bench';
    
    // Highlight available bench slots
    highlightAvailableBenchSlots(player);
}

// Get available position buttons
function getAvailablePositionButtons(player) {
    const availablePositions = getAvailablePositions(player.position);
    return availablePositions.map(pos => 
        `<button class="position-btn" onclick="assignPlayerToPosition('${pos}')">${pos}</button>`
    ).join('');
}

// Get available bench buttons
function getAvailableBenchButtons(player) {
    const availableBenchSlots = [];
    for (let i = 0; i < 3; i++) {
        if (gameState.bench[i] === null) {
            availableBenchSlots.push(i);
        }
    }
    return availableBenchSlots.map(slot => 
        `<button class="position-btn" onclick="assignPlayerToBench(${slot})">Bench ${slot + 1}</button>`
    ).join('');
}

// Highlight available bench slots
function highlightAvailableBenchSlots(player) {
    // Remove previous highlights
    document.querySelectorAll('.bench-slot').forEach(slot => {
        slot.classList.remove('available', 'highlighted');
    });
    
    // Add highlights to available bench slots
    for (let i = 0; i < 3; i++) {
        if (gameState.bench[i] === null) {
            const benchSlot = document.getElementById(`bench${i + 1}`);
            if (benchSlot) {
                benchSlot.classList.add('available', 'highlighted');
            }
        }
    }
}

// Highlight available positions on the field
function highlightAvailablePositions(player) {
    // Remove previous highlights
    document.querySelectorAll('.position').forEach(pos => {
        pos.classList.remove('available', 'highlighted');
    });
    
    // Add highlights to available positions
    const availablePositions = getAvailablePositions(player.position);
    availablePositions.forEach(pos => {
        const positionEl = document.querySelector(`[data-position="${pos}"]`);
        if (positionEl) {
            positionEl.classList.add('available', 'highlighted');
        }
    });
}

// Assign player to selected position
function assignPlayerToPosition(position) {
    if (gameState.selectedPlayer) {
        gameState.team[position] = gameState.selectedPlayer;
        updatePositionDisplay(position, gameState.selectedPlayer);
        completePlayerSelection();
    }
}

// Assign player to selected bench slot
function assignPlayerToBench(benchIndex) {
    if (gameState.selectedPlayer) {
        gameState.bench[benchIndex] = gameState.selectedPlayer;
        updateBenchDisplay(benchIndex, gameState.selectedPlayer);
        completePlayerSelection();
    }
}

// Cancel position selection
function cancelPositionSelection() {
    gameState.selectedPlayer = null;
    displayPlayerOptions();
    // Remove highlights
    document.querySelectorAll('.position').forEach(pos => {
        pos.classList.remove('available', 'highlighted');
    });
}

// Complete player selection process
function completePlayerSelection() {
    // Clear current spin and selection
    gameState.currentSpin = null;
    gameState.selectedPlayer = null;
    gameState.selectionType = null;
    playerOptions.innerHTML = '';
    
    // Remove highlights
    document.querySelectorAll('.position').forEach(pos => {
        pos.classList.remove('available', 'highlighted');
    });
    document.querySelectorAll('.bench-slot').forEach(slot => {
        slot.classList.remove('available', 'highlighted');
    });
    
    updateDisplay();
    
    // Check if game is complete
    if (isGameComplete()) {
        endGame();
    }
}

// Swap player from position
function swapPlayerFromPosition(position) {
    const player = gameState.team[position];
    if (!player) return;
    
    // Show swap options
    showSwapOptions(player, 'position', position);
}

// Swap player from bench
function swapPlayerFromBench(benchIndex) {
    const player = gameState.bench[benchIndex];
    if (!player) return;
    
    // Show swap options
    showSwapOptions(player, 'bench', benchIndex);
}

// Show swap options
function showSwapOptions(player, currentLocation, currentIndex) {
    const availablePositions = getAvailablePositions(player.position);
    const availableBenchSlots = [];
    for (let i = 0; i < 3; i++) {
        if (gameState.bench[i] === null || i === currentIndex) {
            availableBenchSlots.push(i);
        }
    }
    
    playerOptions.innerHTML = `
        <div class="position-selection">
            <h3>Swap ${player.name}</h3>
            <p>Choose where to move this player:</p>
            <div class="available-positions">
                ${availablePositions.map(pos => 
                    `<button class="position-btn" onclick="performSwap('${pos}', '${currentLocation}', ${currentIndex})">${pos}</button>`
                ).join('')}
                ${availableBenchSlots.map(slot => 
                    `<button class="position-btn" onclick="performSwap('bench${slot}', '${currentLocation}', ${currentIndex})">Bench ${slot + 1}</button>`
                ).join('')}
            </div>
            <button class="cancel-btn" onclick="cancelPositionSelection()">Cancel</button>
        </div>
    `;
}

// Perform the swap
function performSwap(targetLocation, currentLocation, currentIndex) {
    const player = currentLocation === 'position' ? 
        gameState.team[Object.keys(gameState.team)[currentIndex]] : 
        gameState.bench[currentIndex];
    
    if (!player) return;
    
    // Remove from current location
    if (currentLocation === 'position') {
        const position = Object.keys(gameState.team)[currentIndex];
        gameState.team[position] = null;
        clearPositionDisplay(position);
    } else {
        gameState.bench[currentIndex] = null;
        clearBenchDisplay(currentIndex);
    }
    
    // Add to new location
    if (targetLocation.startsWith('bench')) {
        const benchIndex = parseInt(targetLocation.replace('bench', ''));
        gameState.bench[benchIndex] = player;
        updateBenchDisplay(benchIndex, player);
    } else {
        gameState.team[targetLocation] = player;
        updatePositionDisplay(targetLocation, player);
    }
    
    completePlayerSelection();
}

// Clear position display
function clearPositionDisplay(position) {
    const slot = document.getElementById(position);
    const positionEl = slot.parentElement;
    
    slot.textContent = '';
    slot.title = '';
    slot.onclick = null;
    positionEl.classList.remove('filled');
}

// Clear bench display
function clearBenchDisplay(index) {
    const benchSlot = document.getElementById(`bench${index + 1}`);
    benchSlot.textContent = '';
    benchSlot.title = '';
    benchSlot.onclick = null;
    benchSlot.classList.remove('filled');
}

// Get available positions for a player type
function getAvailablePositions(playerPosition) {
    const available = [];
    const formation = formations[gameState.selectedFormation];
    
    // Get all available positions in the current formation
    const allFormationPositions = Object.keys(formation.positions);
    
    // Map player positions to formation positions with flexible matching
    const positionMap = {
        'GK': allFormationPositions.filter(pos => pos === 'GK'),
        'CB': allFormationPositions.filter(pos => pos.startsWith('CB')),
        // Fullbacks can play either side
        'LB': allFormationPositions.filter(pos => pos === 'LB' || pos === 'RB'),
        'RB': allFormationPositions.filter(pos => pos === 'LB' || pos === 'RB'),
        'CM': allFormationPositions.filter(pos => pos.startsWith('CM')),
        // Midfield wingers can play either side
        'LM': allFormationPositions.filter(pos => pos === 'LM' || pos === 'RM'),
        'RM': allFormationPositions.filter(pos => pos === 'LM' || pos === 'RM'),
        // Attacking wingers can play across the front line AND as midfield wingers
        'LW': allFormationPositions.filter(pos => 
            pos.startsWith('LW') || pos.startsWith('ST') || pos.startsWith('RW') || 
            pos === 'ST1' || pos === 'ST2' || pos === 'LM' || pos === 'RM'
        ),
        'RW': allFormationPositions.filter(pos => 
            pos.startsWith('LW') || pos.startsWith('ST') || pos.startsWith('RW') || 
            pos === 'ST1' || pos === 'ST2' || pos === 'LM' || pos === 'RM'
        ),
        'ST': allFormationPositions.filter(pos => 
            pos.startsWith('LW') || pos.startsWith('ST') || pos.startsWith('RW') || 
            pos === 'ST1' || pos === 'ST2'
        )
    };
    
    const possiblePositions = positionMap[playerPosition] || [];
    
    possiblePositions.forEach(position => {
        if (gameState.team[position] === null) {
            available.push(position);
        }
    });
    
    return available;
}

// Update position display
function updatePositionDisplay(position, player) {
    const slot = document.getElementById(position);
    const positionEl = slot.parentElement;
    
    slot.textContent = player.name;
    slot.title = `Click to swap ${player.name}`;
    positionEl.classList.add('filled');
    
    // Add click handler for swapping
    slot.onclick = () => swapPlayerFromPosition(position);
}

// Update bench display
function updateBenchDisplay(index, player) {
    const benchSlot = document.getElementById(`bench${index + 1}`);
    benchSlot.textContent = player.name;
    benchSlot.title = `Click to swap ${player.name}`;
    benchSlot.classList.add('filled');
    
    // Add click handler for swapping
    benchSlot.onclick = () => swapPlayerFromBench(index);
}

// Check if game is complete
function isGameComplete() {
    const teamPlayers = Object.values(gameState.team).filter(p => p !== null).length;
    const benchPlayers = gameState.bench.filter(p => p !== null).length;
    return teamPlayers === 11 && benchPlayers === 3;
}

// Calculate team rating with advanced system
function calculateTeamRating() {
    const teamPlayers = Object.values(gameState.team).filter(p => p !== null);
    const benchPlayers = gameState.bench.filter(p => p !== null);
    
    if (teamPlayers.length === 0) return 0;
    
    let totalRating = 0;
    let chemistryBonus = 0;
    let positionPenalty = 0;
    let formationBonus = 0;
    let balanceBonus = 0;
    
    // Base rating calculation
    teamPlayers.forEach(player => {
        let playerRating = player.rating;
        
        // Position penalty for out-of-position players
        const position = getPlayerPosition(player);
        if (!isPlayerInCorrectPosition(player, position)) {
            positionPenalty += 5; // 5 point penalty per out-of-position player
            playerRating *= 0.9; // 10% rating reduction
        }
        
        totalRating += playerRating;
    });
    
    // Chemistry system
    chemistryBonus = calculateChemistryBonus(teamPlayers);
    
    // Formation balance bonus
    balanceBonus = calculateBalanceBonus(teamPlayers);
    
    // Formation-specific bonuses
    formationBonus = calculateFormationBonus(teamPlayers);
    
    // Bench contribution (reduced)
    const benchTotal = benchPlayers.reduce((sum, player) => sum + player.rating, 0) * 0.15;
    
    // Final calculation with all modifiers
    const baseRating = (totalRating + benchTotal) / 11;
    const finalRating = baseRating + chemistryBonus + balanceBonus + formationBonus - positionPenalty;
    
    return Math.max(0, Math.round(finalRating));
}

// Get the position where a player is currently placed
function getPlayerPosition(player) {
    for (const [position, teamPlayer] of Object.entries(gameState.team)) {
        if (teamPlayer && teamPlayer.name === player.name) {
            return position;
        }
    }
    return null;
}

// Check if player is in their natural position
function isPlayerInCorrectPosition(player, currentPosition) {
    if (!currentPosition) return false;
    
    const naturalPosition = player.position;
    
    // Attackers can play across the front line without penalty
    if (['ST', 'LW', 'RW'].includes(naturalPosition)) {
        return currentPosition.startsWith('ST') || 
               currentPosition.startsWith('LW') || 
               currentPosition.startsWith('RW') ||
               currentPosition === 'ST1' || 
               currentPosition === 'ST2';
    }
    
    // Center backs can play any CB position
    if (naturalPosition === 'CB' && currentPosition.startsWith('CB')) {
        return true;
    }
    
    // Center mids can play any CM position
    if (naturalPosition === 'CM' && currentPosition.startsWith('CM')) {
        return true;
    }
    
    // Fullbacks can play either side (LB/RB are interchangeable)
    if (['LB', 'RB'].includes(naturalPosition) && ['LB', 'RB'].includes(currentPosition)) {
        return true;
    }
    
    // Midfield wingers can play either side (LM/RM are interchangeable)
    if (['LM', 'RM'].includes(naturalPosition) && ['LM', 'RM'].includes(currentPosition)) {
        return true;
    }
    
    // Attacking wingers can play across the front line AND as midfield wingers
    if (['LW', 'RW'].includes(naturalPosition)) {
        return currentPosition.startsWith('ST') || 
               currentPosition.startsWith('LW') || 
               currentPosition.startsWith('RW') ||
               currentPosition === 'ST1' || 
               currentPosition === 'ST2' ||
               currentPosition === 'LM' ||
               currentPosition === 'RM';
    }
    
    // Exact position match for other positions
    return naturalPosition === currentPosition;
}

// Calculate chemistry bonus based on player combinations
function calculateChemistryBonus(teamPlayers) {
    let bonus = 0;
    
    // Legendary duos bonus
    const legendaryDuos = [
        ['Lionel Messi', 'Cristiano Ronaldo'], // 99-rated duo
        ['Pelé', 'Diego Maradona'], // Classic legends
        ['Zinedine Zidane', 'Andrés Iniesta'], // Midfield maestros
        ['Paolo Maldini', 'Franz Beckenbauer'], // Defensive legends
        ['Xavi', 'Andrés Iniesta'], // Barcelona connection
    ];
    
    legendaryDuos.forEach(duo => {
        if (teamPlayers.some(p => p.name === duo[0]) && 
            teamPlayers.some(p => p.name === duo[1])) {
            bonus += 3; // 3 point bonus for legendary duos
        }
    });
    
    // Country chemistry (same nationality players)
    const countries = {};
    teamPlayers.forEach(player => {
        countries[player.country] = (countries[player.country] || 0) + 1;
    });
    
    Object.values(countries).forEach(count => {
        if (count >= 3) bonus += 2; // 2 point bonus for 3+ same country
        if (count >= 4) bonus += 1; // Additional 1 point for 4+ same country
    });
    
    return bonus;
}

// Calculate balance bonus for well-rounded team
function calculateBalanceBonus(teamPlayers) {
    let bonus = 0;
    
    // Check for balanced attack (at least 2 attacking players)
    const attackingPlayers = teamPlayers.filter(p => ['ST', 'LW', 'RW'].includes(p.position));
    if (attackingPlayers.length >= 2) bonus += 2;
    
    // Check for strong midfield (at least 3 midfielders)
    const midfieldPlayers = teamPlayers.filter(p => ['CM', 'LM', 'RM'].includes(p.position));
    if (midfieldPlayers.length >= 3) bonus += 2;
    
    // Check for solid defense (at least 3 defenders)
    const defensivePlayers = teamPlayers.filter(p => ['CB', 'LB', 'RB'].includes(p.position));
    if (defensivePlayers.length >= 3) bonus += 2;
    
    // Check for world-class goalkeeper
    const goalkeeper = teamPlayers.find(p => p.position === 'GK');
    if (goalkeeper && goalkeeper.rating >= 90) bonus += 3;
    
    return bonus;
}

// Calculate formation-specific bonuses
function calculateFormationBonus(teamPlayers) {
    const formation = gameState.selectedFormation;
    let bonus = 0;
    
    if (formation === '4-4-2') {
        // Balanced formation bonus
        const attackingPlayers = teamPlayers.filter(p => ['ST', 'LW', 'RW'].includes(p.position));
        const midfieldPlayers = teamPlayers.filter(p => ['CM', 'LM', 'RM'].includes(p.position));
        if (attackingPlayers.length === 2 && midfieldPlayers.length === 4) {
            bonus += 4; // Perfect 4-4-2 setup
        }
    } else if (formation === '4-3-3') {
        // Attacking formation bonus
        const attackingPlayers = teamPlayers.filter(p => ['ST', 'LW', 'RW'].includes(p.position));
        if (attackingPlayers.length === 3) {
            bonus += 4; // Perfect 4-3-3 setup
        }
    } else if (formation === '3-5-2') {
        // Midfield-heavy formation bonus
        const midfieldPlayers = teamPlayers.filter(p => ['CM', 'LM', 'RM'].includes(p.position));
        if (midfieldPlayers.length === 5) {
            bonus += 4; // Perfect 3-5-2 setup
        }
    }
    
    return bonus;
}

// Update display
function updateDisplay() {
    document.getElementById('picks-left').textContent = gameState.spinsLeft;
    document.getElementById('current-round').textContent = Math.ceil((15 - gameState.spinsLeft) / 3) + 1;
    document.getElementById('team-rating').textContent = calculateTeamRating();
    document.getElementById('chemistry').textContent = calculateChemistry();
    
    // Update progress bar
    const progress = ((15 - gameState.spinsLeft) / 15) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    // Update position needed
    updatePositionNeeded();
}

// Calculate chemistry
function calculateChemistry() {
    const teamPlayers = Object.values(gameState.team).filter(p => p !== null);
    let chemistry = 0;
    
    // Country chemistry
    const countries = {};
    teamPlayers.forEach(player => {
        countries[player.country] = (countries[player.country] || 0) + 1;
    });
    
    Object.values(countries).forEach(count => {
        if (count >= 2) chemistry += 2;
        if (count >= 3) chemistry += 1;
        if (count >= 4) chemistry += 1;
    });
    
    return Math.min(100, chemistry);
}

// Update position needed
function updatePositionNeeded() {
    const neededPositions = getNeededPositions();
    const teamPlayers = Object.values(gameState.team).filter(p => p !== null);
    
    if (neededPositions.length > 0) {
        // Show the first needed position
        const firstNeeded = neededPositions[0];
        document.getElementById('position-needed').textContent = getPositionName(firstNeeded);
    } else if (teamPlayers.length < 11) {
        document.getElementById('position-needed').textContent = 'Any Position';
    } else {
        document.getElementById('position-needed').textContent = 'Bench Player';
    }
}

// Get position name
function getPositionName(position) {
    const positionNames = {
        'GK': 'Goalkeeper',
        'LB': 'Left Back',
        'RB': 'Right Back',
        'CB1': 'Center Back',
        'CB2': 'Center Back',
        'CB3': 'Center Back',
        'LM': 'Left Midfielder',
        'RM': 'Right Midfielder',
        'CM1': 'Center Midfielder',
        'CM2': 'Center Midfielder',
        'CM3': 'Center Midfielder',
        'ST': 'Striker',
        'ST1': 'Striker',
        'ST2': 'Striker',
        'LW': 'Left Winger',
        'RW': 'Right Winger'
    };
    return positionNames[position] || position;
}

// End game
function endGame() {
    const rating = calculateTeamRating();
    finalRating.textContent = rating;
    
    let message = '';
    if (rating >= 100) {
        message = "🌟 MYTHICAL! You somehow built an incredible team despite the odds!";
    } else if (rating >= 90) {
        message = "🏆 LEGENDARY! Amazing draft - you found the hidden gems!";
    } else if (rating >= 80) {
        message = "⭐ OUTSTANDING! Great team considering the limited options!";
    } else if (rating >= 70) {
        message = "🔥 EXCELLENT! Solid team with good chemistry!";
    } else if (rating >= 60) {
        message = "👍 GOOD! Decent team for what you had to work with!";
    } else if (rating >= 50) {
        message = "👌 DECENT! Not terrible, but could be better!";
    } else if (rating >= 40) {
        message = "😐 AVERAGE! Your team is... functional, I guess!";
    } else if (rating >= 30) {
        message = "😅 BELOW AVERAGE! At least you have 11 players!";
    } else {
        message = "💀 DISASTER! This team is a complete mess!";
    }
    
    ratingMessage.textContent = message;
    finalScore.style.display = 'block';
}

// Restart game
function restartGame() {
    gameState = {
        selectedFormation: "4-4-2",
        spinsLeft: 15,
        team: {},
        bench: [null, null, null],
        currentSpin: null,
        selectedPlayer: null
    };
    
    // Reset formation selection
    document.querySelectorAll('.formation-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Show formation selection screen
    document.getElementById('formation-selection').style.display = 'block';
    document.getElementById('main-game').style.display = 'none';
    finalScore.style.display = 'none';
    
    // Reset formation display
    document.getElementById('selected-formation').textContent = '4-4-2';
    
    // Clear all displays
    document.querySelectorAll('.player-slot').forEach(slot => {
        slot.textContent = '';
        slot.parentElement.classList.remove('filled');
    });
    
    document.querySelectorAll('.bench-slot').forEach(slot => {
        slot.textContent = '';
        slot.classList.remove('filled');
    });
    
    playerOptions.innerHTML = '';
    spinBtn.disabled = false;
    spinBtn.textContent = 'SPIN!';
    
    // Initialize team structure
    initializeTeam();
}

// Show Diddy GIF
function showDiddyGif() {
    // Remove existing GIF if any
    hideDiddyGif();
    
    // Create GIF overlay
    const gifOverlay = document.createElement('div');
    gifOverlay.id = 'diddy-gif-overlay';
    gifOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        pointer-events: none;
    `;
    
    const gifImg = document.createElement('img');
    gifImg.src = 'https://media.giphy.com/media/3o7btPC0Nt5Z0k0x2E/giphy.gif';
    gifImg.style.cssText = `
        max-width: 80%;
        max-height: 80%;
        border-radius: 20px;
        box-shadow: 0 0 50px rgba(255, 215, 0, 0.8);
    `;
    
    gifOverlay.appendChild(gifImg);
    document.body.appendChild(gifOverlay);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        hideDiddyGif();
    }, 3000);
}

// Hide Diddy GIF
function hideDiddyGif() {
    const existingGif = document.getElementById('diddy-gif-overlay');
    if (existingGif) {
        existingGif.remove();
    }
}

// Start the game
initGame();

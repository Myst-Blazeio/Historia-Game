  const events = [

    { event: "Invention of the Wheel", date: -3500, image: "img.png", description: "The invention of the wheel, a key technological advancement." },
    { event: "Discovery of Fire", date: -100000, image: "img.png", description: "The discovery and control of fire." },
    { event: "First Manned Moon Landing", date: 1969, image: "img.png", description: "Neil Armstrong and Buzz Aldrin land on the moon." },
    { event: "Fall of the Berlin Wall", date: 1989, image: "img.png", description: "The fall of the Berlin Wall marking the end of the Cold War." },
    { event: "Start of World War I", date: 1914, image: "img.png", description: "The beginning of World War I." },
    { event: "Printing Press Invented", date: 1440, image: "img.png", description: "Johannes Gutenberg invents the printing press." },
    { event: "Signing of the Declaration of Independence", date: 1776, image: "img.png", description: "The United States Declaration of Independence is signed." },
    { event: "French Revolution Begins", date: 1789, image: "img.png", description: "The French Revolution starts." },
    { event: "First Flight by the Wright Brothers", date: 1903, image: "img.png", description: "The Wright brothers make their first successful flight." },
    { event: "Introduction of the Internet", date: 1983, image: "img.png", description: "The ARPANET adopts TCP/IP protocol, marking the beginning of the internet." },
    { event: "Renaissance Period", date: 1400, image: "img.png", description: "The Renaissance period begins in Europe." },
    { event: "Columbus Discovers America", date: 1492, image: "img.png", description: "Christopher Columbus discovers America." },
    { event: "Industrial Revolution", date: 1760, image: "img.png", description: "The Industrial Revolution begins." },
    { event: "End of World War II", date: 1945, image: "img.png", description: "World War II comes to an end." },
    { event: "Start of the Cold War", date: 1947, image: "img.png", description: "The Cold War begins." },
    { event: "Invention of the Telephone", date: 1876, image: "img.png", description: "Alexander Graham Bell invents the telephone." },
    { event: "The Great Depression", date: 1929, image: "img.png", description: "The Great Depression begins." },
    { event: "Nelson Mandela's Release from Prison", date: 1990, image: "img.png", description: "Nelson Mandela is released from prison." },
    { event: "Fall of Constantinople", date: 1453, image: "img.png", description: "The fall of Constantinople marks the end of the Byzantine Empire." },
    { event: "Start of the Black Death", date: 1347, image: "img.png", description: "The Black Death pandemic begins in Europe." },

];



let mistakes = 0;
let currentStreak = 0;
let longestStreak = 0;
let usedIndices = new Set();

const timeline = document.getElementById('timeline');
const currentCardContainer = document.getElementById('current-card-container');
const nextCardButton = document.getElementById('next-card-button');
const message = document.getElementById('message');

nextCardButton.addEventListener('click', loadNextCard);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeGame() {
    mistakes = 0;
    currentStreak = 0;
    longestStreak = 0;
    usedIndices.clear();
    message.textContent = '';

    timeline.innerHTML = '';
    currentCardContainer.innerHTML = '';
    nextCardButton.disabled = true;

    shuffle(events);

    const baseEvent = events[0];
    usedIndices.add(0);
    const baseCard = createCard(baseEvent);
    baseCard.querySelector('.date').style.display = 'block';
    baseCard.classList.add('correct');
    baseCard.classList.add('flippable');
    baseCard.draggable = false;
    timeline.appendChild(baseCard);

    loadNextCard();
}

function createCard(event) {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;
    card.innerHTML = `
        
            <div class="name">${event.event}</div>
            <img src="${event.image}" alt="${event.event}" style="width: 100px;">
            <div class="description">${event.description}</div>
            <div class="date">${event.date}</div>
        
        <div class="back">
        <p>wikipedia link</p>
        </div>
    `;
    card.dataset.date = event.date;
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
    card.addEventListener('click', flipCard);
    return card;
}

function loadNextCard() {
    if (currentCardContainer.children.length === 0) {
        currentCardContainer.innerHTML = '';

        let nextEventIndex;
        do {
            nextEventIndex = Math.floor(Math.random() * events.length);
        } while (usedIndices.has(nextEventIndex) && usedIndices.size < events.length);

        if (usedIndices.size < events.length) {
            usedIndices.add(nextEventIndex);
            const nextEvent = events[nextEventIndex];
            const nextCard = createCard(nextEvent);
            currentCardContainer.appendChild(nextCard);
            nextCardButton.disabled = false;
        } else {
            nextCardButton.disabled = true;
        }
    }
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.date);
    e.target.classList.add('dragging');
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

timeline.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(timeline, e.clientX);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        timeline.appendChild(draggable);
    } else {
        timeline.insertBefore(draggable, afterElement);
    }
});

timeline.addEventListener('drop', e => {
    const date = e.dataTransfer.getData('text/plain');
    const card = document.querySelector(`.card[data-date='${date}']`);
    card.querySelector('.date').style.display = 'block';
    card.draggable = false;
    
    card.classList.add('flippable');
    card.addEventListener('click', flipCard);

    if (currentCardContainer.children.length === 0 && timeline.children.length === events.length) {
        message.textContent = `Congratulations! You've placed all cards correctly.`;
        gameOver();
        nextCardButton.disabled = true;
    } else {
        if (currentCardContainer.children.length === 0) {
            nextCardButton.disabled = false;
        }
    }
    if (checkOrder()) {
        card.classList.add('correct');
        currentCardContainer.removeChild(card);
    } else {
        card.classList.add('incorrect');
        gameOver();
    }
});

function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function checkOrder() {
    const timelineCards = Array.from(timeline.children);
    for (let i = 0; i < timelineCards.length - 1; i++) {
        const date1 = parseInt(timelineCards[i].dataset.date);
        const date2 = parseInt(timelineCards[i + 1].dataset.date);
        if (date1 > date2) {
            return false;
        }
    }
    currentStreak++;
    if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
    }
    return true;
}

function gameOver() {
    document.getElementById("current-card-container").style.display = "none";
    document.getElementById("next-card-button").style.display = "none";
    document.getElementById("game-rules-button").style.display = "none";
    document.getElementById("play-again-button").style.display = "block";
    
    if (timeline.children.length === events.length && checkOrder()) {
        document.getElementById("game-rules-tooltip").style.display = "none";
        document.getElementById("timeline").style.display = "none";
        message.textContent = `Congratulations! You've placed all cards correctly.`;
    } else {
        message.textContent = `Game Over! Longest streak: ${longestStreak}`;
        document.getElementById("game-rules-tooltip").style.display = "none";
        card.style.display="block"  
        document.getElementById("timeline").style.display = "flex";
        
    }
    timeline.innerHTML = '';
    currentCardContainer.innerHTML = '';
    nextCardButton.disabled = true;
}

function refreshPage() {
    location.reload();
}


function flipCard(e) {
    if (e.currentTarget.classList.contains('flippable')) {
        e.currentTarget.classList.toggle('flipped');
    }
}

initializeGame();


function toggleGameRules() {
    var container = document.querySelector('.game-rules-container');
    var tooltip = document.getElementById('game-rules-tooltip');

    if (!tooltip) {
        fetch('game-rules.txt')
            .then(response => response.text())
            .then(data => {
                var tooltipDiv = document.createElement('div');
                tooltipDiv.id = 'game-rules-tooltip';
                tooltipDiv.className = 'game-rules-tooltip';
                tooltipDiv.innerHTML = `
                    <h3>Game Rules</h3>
                    <div id="rules-content">${data.replace(/\n/g, '<br>')}</div>
                `;
                container.appendChild(tooltipDiv);
                tooltipDiv.style.display = 'block';
            })
            .catch(error => console.error('Error loading game rules:', error));
    } else {
        tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
    }
}

const events = [
    { 
        event: "Invention of the Wheel", 
        date: -3500, 
        image: "https://www.historyanswers.co.uk/wp-content/uploads/2014/04/All-About-History-wheel-e1398790717910.jpg", 
        description: "The invention of the wheel, a key technological advancement.",
        additional_info: "This pivotal invention greatly impacted transportation, enabling the development of carts, chariots, and later, vehicles, revolutionizing trade and mobility."
    },
    { 
        event: "Discovery of Fire", 
        date: -100000, 
        image: "https://fubini.swarthmore.edu/~ENVS2/S2007/rmckenn1/gif/cavemenfire.jpg", 
        description: "The discovery and control of fire.",
        additional_info: "Fire provided warmth, protection from predators, and a method to cook food, fundamentally changing human lifestyle, health, and survival."
    },
    { 
        event: "First Manned Moon Landing", 
        date: 1969, 
        image: "https://www.historyhit.com/app/uploads/2020/07/800px-Apollo_11_Crew-1.jpg", 
        description: "Neil Armstrong and Buzz Aldrin land on the moon.",
        additional_info: "The Apollo 11 mission, a major milestone in space exploration, showcased human ingenuity and marked the beginning of lunar exploration."
    },
    { 
        event: "Fall of the Berlin Wall", 
        date: 1989, 
        image: "https://assets.pewresearch.org/wp-content/uploads/sites/12/2014/10/FT_14.10.15_berlinWallPhoto.jpg", 
        description: "The fall of the Berlin Wall marking the end of the Cold War.",
        additional_info: "This event symbolized the reunification of Germany and the collapse of communist regimes in Eastern Europe, leading to greater political freedom."
    },
    { 
        event: "Start of World War I", 
        date: 1914, 
        image: "https://assets.editorial.aetnd.com/uploads/2018/08/outbreak-of-world-war-i-gettyimages-506127736.jpg", 
        description: "The beginning of World War I.",
        additional_info: "This global conflict, lasting until 1918, involved many world powers and resulted in significant political, social, and economic changes."
    },
    { 
        event: "Printing Press Invented", 
        date: 1440, 
        image: "https://www.grunge.com/img/gallery/how-the-printing-press-was-first-invented/intro-1645639217.jpg", 
        description: "Johannes Gutenberg invents the printing press.",
        additional_info: "Gutenberg's press revolutionized the spread of knowledge by making books and information more accessible, sparking the Renaissance and scientific revolution."
    },
    { 
        event: "Signing of the Declaration of Independence", 
        date: 1776, 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg", 
        description: "The United States Declaration of Independence is signed.",
        additional_info: "This document, declaring the American colonies' independence from British rule, laid the foundation for the United States' democratic government."
    },
    { 
        event: "French Revolution Begins", 
        date: 1789, 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anonymous_-_Prise_de_la_Bastille.jpg/1200px-Anonymous_-_Prise_de_la_Bastille.jpg", 
        description: "The French Revolution starts.",
        additional_info: "The revolution led to the rise of modern democracies and the end of absolute monarchies in France, profoundly influencing global political thought."
    },
    { 
        event: "First Flight by the Wright Brothers", 
        date: 1903, 
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/GettyImages-1177030027.jpg", 
        description: "The Wright brothers make their first successful flight.",
        additional_info: "This historic flight in Kitty Hawk, North Carolina, marked the beginning of modern aviation and transformed transportation and warfare."
    },
    { 
        event: "Introduction of the Internet", 
        date: 1983, 
        image: "https://149936022.v2.pressablecdn.com/wp-content/uploads/2020/04/Networks.jpg", 
        description: "The ARPANET adopts TCP/IP protocol, marking the beginning of the internet.",
        additional_info: "The internet revolutionized communication, information sharing, and global connectivity, profoundly impacting every aspect of modern life."
    },
    { 
        event: "Renaissance Period", 
        date: 1400, 
        image: "https://cdn.sightseeingtoursitaly.com/wp-content/uploads/2019/09/renaissance-period.jpg", 
        description: "The Renaissance period begins in Europe.",
        additional_info: "This cultural movement emphasized art, science, and humanism, sparking a revival of learning and creativity that shaped modern Western civilization."
    },
    { 
        event: "Columbus Discovers America", 
        date: 1492, 
        image: "https://cdn.britannica.com/22/143622-050-FD012047/Landing-Columbus-oil-canvas-John-Vanderlyn-US-1846.jpg", 
        description: "Christopher Columbus discovers America.",
        additional_info: "Columbus's voyage opened up the New World to European exploration and colonization, leading to significant cultural and demographic changes."
    },
    { 
        event: "Industrial Revolution", 
        date: 1760, 
        image: "https://assets.editorial.aetnd.com/uploads/2019/01/second_industrial_revolution_gettyimages-51632462.jpg", 
        description: "The Industrial Revolution begins.",
        additional_info: "This period saw the transition to new manufacturing processes, significantly increasing production capabilities and altering economies and societies."
    },
    { 
        event: "End of World War II", 
        date: 1945, 
        image: "https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2021-05/626815-wiki-american_military_personnel_gather_in_paris_to_celebrate_the_japanese_surrender.jpg", 
        description: "World War II comes to an end.",
        additional_info: "The war's end led to significant geopolitical changes, the establishment of the United Nations, and set the stage for the Cold War."
    },
    { 
        event: "Start of the Cold War", 
        date: 1947, 
        image: "https://www.albert.io/blog/wp-content/uploads/2016/04/Cold_War_2.jpg", 
        description: "The Cold War begins.",
        additional_info: "This period was marked by political tension and military rivalry between the US and the Soviet Union, influencing global alliances and conflicts."
    },
    { 
        event: "Invention of the Telephone", 
        date: 1876, 
        image: "https://cdn.britannica.com/19/180119-138-29F20103/Overview-invention-telephone-focus-work-Alexander-Graham.jpg", 
        description: "Alexander Graham Bell invents the telephone.",
        additional_info: "The telephone transformed global communication, making it faster and more direct, and paved the way for future telecommunications advancements."
    },
    { 
        event: "The Great Depression", 
        date: 1929, 
        image: "https://www.shortform.com/blog/wp-content/uploads/2024/03/great-depression-family-job-wanted.jpg", 
        description: "The Great Depression begins.",
        additional_info: "This economic downturn had profound effects on global economies and societies, leading to widespread unemployment and poverty."
    },
    { 
        event: "Nelson Mandela's Release from Prison", 
        date: 1990, 
        image: "https://dims.apnews.com/dims4/default/2d423a5/2147483647/strip/true/crop/3000x1983+0+0/resize/599x396!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Ffb3e0e2d1494411bbaca597aed7f93a7%2F3000.jpeg", 
        description: "Nelson Mandela is released from prison.",
        additional_info: "Mandela's release marked a significant step towards the end of apartheid in South Africa and the establishment of a multiracial democracy."
    },
    { 
        event: "Fall of Constantinople", 
        date: 1453, 
        image: "https://miro.medium.com/v2/resize:fit:662/1*0BqqcG9qcGReFKxtcy5i9Q.jpeg", 
        description: "The fall of Constantinople marks the end of the Byzantine Empire.",
        additional_info: "This event significantly impacted the trade routes and power dynamics of the region, marking the rise of the Ottoman Empire."
    },
    { 
        event: "Start of the Black Death", 
        date: 1347, 
        image: "https://origins.osu.edu/sites/default/files/migrated_files/2020-06-01%20%283%29.png", 
        description: "The Black Death pandemic begins in Europe.",
        additional_info: "The plague caused widespread death and societal upheaval across Europe, drastically reducing the population and altering social structures."
    }
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
            <div class="image">
            <img src="${event.image}" alt="img.png" class="unselectable">
            </div>
            <div class="description">${event.description}</div>
            <div class="date">${event.date}</div>
        
        <div class="back">
        <p class="information">${event.additional_info}</p>
        <div class="wikipedia"> 
        <a href="https://github.com/Myst-Blazeio/Historia-Game.github.io" target="_blank">Wikipedia Link</a>
        </div>
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

// Variables
let container = document.querySelector('.container');
let grid;
let sqrBrightness = 100;

// Functions
function newGrid() {
    resetGrid();
    do {
        gridSize = parseInt(prompt('How many square per lines would you like ? Please enter a number between 1 and 100.'));
    } while (isNaN(gridSize) || typeof (gridSize) !== 'number' || gridSize < 1 || gridSize > 100);
    setGrid(gridSize);
}

function resetGrid() {
    grid = document.querySelectorAll('.gridItem');
    for (const gridItem of grid) {
        gridItem.remove();
    }
}

function setGrid(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        let gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'gridItem');
        gridItem.style.flex = `1 0 ${100 / gridSize}%`;
        container.appendChild(gridItem);
    }
    grid = document.querySelectorAll('.gridItem');
    hoverBackground();
    sqrBrightness = 100;
}

function randColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r} ${g} ${b})`;
}

function hoverBackground() {
    for (const gridItem of grid) {
        gridItem.addEventListener('mouseenter', () => {
            gridItem.style.backgroundColor = randColor();
            gridItem.style.filter = `brightness(${sqrBrightness}%)`;
            sqrBrightness -= 10;
        })
        gridItem.addEventListener('mouseleave', () => {
            gridItem.style.backgroundColor = '';
        })
    }
}

// Sets default grid when page is loaded
setGrid(16);

// Choosing grid size
let sizeBtn = document.querySelector('.sizeBtn')
sizeBtn.addEventListener('click', newGrid);
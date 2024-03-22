let container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'gridItem');
    container.appendChild(gridItem);
}

function randColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r} ${g} ${b})`;
}

let gridItems = document.querySelectorAll('.gridItem');

for (const gridItem of gridItems) {
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = randColor();
    })
    gridItem.addEventListener('mouseleave', () => {
        gridItem.style.backgroundColor = '';
    })
}

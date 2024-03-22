let container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'gridItem');
    container.appendChild(gridItem);
}
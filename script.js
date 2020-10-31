// selector
const game = document.getElementById('game');

// create grid div
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

// add grid to game
game.appendChild(gridContainer);

// generate grid item and add to grid
function generateGrid() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridContainer.appendChild(gridItem);
}

// repeat 16 times
for (let i = 0; i < 16; i++) {
    generateGrid();
}
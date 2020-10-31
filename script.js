// selector
const game = document.getElementById('game');

// create grid div
const grid = document.createElement('div');
grid.classList.add('gridContainer');

// configure grid
grid.style.cssText = 'display: grid; grid-template-columns: 16; grid-template-rows: 16;';

// add grid to game
game.appendChild(grid);

// generate grid item and add to grid
function generateGrid() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    grid.appendChild(gridItem);
}

// repeat 16 times
for (let i = 0; i < 16; i++) {
    generateGrid();
}



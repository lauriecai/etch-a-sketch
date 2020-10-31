// selector
const game = document.getElementById('game');

// create grid div
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

// add grid to game
game.appendChild(gridContainer);

// generate grid item and add to grid
function generateGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridContainer.appendChild(gridItem);
}

// generate entire grid (16x16 = 256 grid items)
for (let i = 0; i < 256; i++) {
    generateGridItem();
}

// obtain nodelist of all grid items
const gridItems = document.querySelectorAll('.gridItem');
console.log(gridItems[0]);

// add event listener to each grid item
for (let i = 0; i < 256; i++) {
    gridItems[i].addEventListener('mouseover', () => {
        gridItems[i].classList.add('activated');
    })
}
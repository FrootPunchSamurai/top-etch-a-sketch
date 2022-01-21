const grid = document.getElementById('grid');

function createGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');
        grid.appendChild(gridElement);
    }
}

createGrid(16);
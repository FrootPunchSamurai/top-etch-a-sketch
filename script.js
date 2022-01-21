const grid = document.getElementById('grid');
const slider = document.getElementById('myRange');

slider.oninput = function(){
    initGrid();
};

function initGrid(){
    let val = parseInt(slider.value);
    grid.innerHTML = '';
    createGrid(val);
}

function createGrid(size){

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++){
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.classList.add('grid-item');
        grid.appendChild(gridElement);
    }
}

function changeColor(e){
    const target = e.target;
    target.classList.add('black');
}



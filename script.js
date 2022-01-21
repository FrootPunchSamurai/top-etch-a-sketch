const grid = document.getElementById('grid');
const slider = document.getElementById('myRange');
const sliderValue = document.getElementById('slider-data');
const rainbow = document.getElementById('rainbow');
const blacken = document.getElementById('blacken');
const randomed = document.getElementById('random');
const darken = document.getElementById('darken');
const myColor = document.getElementById('mycolor');


let colorMode = 'black';
let currentColor;

slider.defaultValue = 16;
createGrid(16);

slider.oninput = function(){
    initGrid();
};

function initGrid(){
    let val = parseInt(slider.value);
    grid.innerHTML = '';
    createGrid(val);
}

function setColorMode(e){
    let btnClicked = e.target.value;
    

    switch (btnClicked) {
        case 'rainbow':
            colorMode = 'rainbow'
            break;
        
        case 'random':
            colorMode = 'random';
            break;

        case 'blacken':
            colorMode = 'black';
            break;
        
        case 'darken':
            colorMode = 'darken';
            break;
    
        default:
            colorMode = 'colorpick'
            break;
    }
}

function random(){
    let rand = Math.floor(Math.random() * 255);
    return rand;
}

function randomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return [red, green, blue];
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

function chooseRandomColor(){
    currentColor = randomColor();
}

function changeColor(e){
    const target = e.target;

    if(colorMode == "rainbow"){
        target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`      
    }
    
    if(colorMode == "black"){
        target.style.backgroundColor = "black";
        
    }
    
    if(colorMode == "darken"){
            let currentOpacity = Number(target.style.backgroundColor.slice(-4, -1));
            if (currentOpacity <= 0.9) {
                target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
            }
    }

    if(colorMode == "random"){
        target.style.backgroundColor = `rgb(${currentColor})`;
    }

    if(colorMode == "colorpick"){
        target.style.backgroundColor = myColor.value;
    }
}

rainbow.addEventListener('click', setColorMode);
randomed.addEventListener('click', setColorMode);
randomed.addEventListener('click', chooseRandomColor);
blacken.addEventListener('click', setColorMode);
myColor.addEventListener('change', setColorMode)
darken.addEventListener('click', setColorMode);



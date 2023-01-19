let colorBtn = document.getElementById('color');
let colorInput = document.getElementById('color-input');
let rainbowBtn = document.getElementById('rainbow');
let eraserBtn = document.getElementById('eraser');
let clearBtn = document.getElementById('clear');
let container = document.querySelector('#container');
let range = document.getElementById('range');

let value = 16;

function grid(value) {
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    for(let i = 0; i < value*value; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
grid(value);

function randomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

function pickColor() {
    let colorInput = document.getElementById('color-input');
    return colorInput.value;
}

function whiteColor() {
    return `#ffffff`;
}

function applyBackground(func) {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.background = func();
        });
    })
}

function gridSize() {
    container.innerHTML = '';
    grid(range.value);
}

colorBtn.onclick = () => applyBackground(pickColor);
rainbowBtn.onclick = () => applyBackground(randomColor);
eraserBtn.onclick = () => applyBackground(whiteColor);
clearBtn.onclick = () => gridSize();
range.oninput = () => gridSize();
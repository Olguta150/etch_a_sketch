let colorBtn = document.getElementById('color');
let colorInput = document.getElementById('color-input');
let rainbowBtn = document.getElementById('rainbow');
let eraserBtn = document.getElementById('eraser');
let clearBtn = document.getElementById('clear');
let container = document.querySelector('#container');
let range = document.getElementById('range');
let checkbox = document.querySelector('.checkbox');
let shadowBtn = document.getElementById('shadow');
let btns = document.querySelectorAll('.add-active');

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
    addGridBorder();
}

function addGridBorder() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => checkbox.checked == true ? cell.classList.add('grid') : cell.classList.remove('grid'));
}

function addOpacity() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.background = 'black';
            let opacity = cell.style.opacity;
            cell.style.opacity = (Number(opacity) + 0.1);
        })
    })
}

function addFocus() {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => btn.classList.remove('active'))

            btn.classList.add('active');
        })
    })
}

colorBtn.onclick = () => applyBackground(pickColor);
rainbowBtn.onclick = () => applyBackground(randomColor);
eraserBtn.onclick = () => applyBackground(whiteColor);
shadowBtn.onclick = () => addOpacity();
clearBtn.onclick = () => gridSize();
range.oninput = () => gridSize();
checkbox.onclick = () => addGridBorder();
addFocus();
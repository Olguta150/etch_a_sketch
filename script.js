function grid(value) {
    let container = document.querySelector('#container');
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    for(let i = 0; i < value*value; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

grid(7);

function randomColor(event) {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = `#${color}`;
}

function hoverCell() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', randomColor)
    })
}

hoverCell();
let colorBtn = document.getElementById('color');
let colorInput = document.getElementById('color-input');
let rainbowBtn = document.getElementById('rainbow');
let eraserBtn = document.getElementById('eraser');
let clearBtn = document.getElementById('clear');
// let cells = document.querySelectorAll('.cell');
let container = document.querySelector('#container');
let range = document.getElementById('range');

let value = 16;

function grid(value) {
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    for(let i = 0; i < value*value; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
            cell.style.background = `#000`;
        });
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    // pickColor();
    // rainbow();
    // eraser();
    // clearAll();
}

grid(value);

// let cells = document.querySelectorAll('.cell');

// function gridSize() {
//     // let range = document.getElementById('range');
//     range.addEventListener('input', () => {
//         // let container = document.querySelector('#container');
//         container.innerHTML = "";
//         pickColor();
//         rainbow();
//         eraser();
//         console.log('grid size');
//         grid(range.value);
//         // clearAll();
//     })
// }

// gridSize();

function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
}

function pickColor() {
    let cells = document.querySelectorAll('.cell');
    colorBtn.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.addEventListener('mouseover', (e) => {
                let chooseColor = colorInput.value;
                e.target.style.background = chooseColor;
                console.log('color');
            })
        })
    })
}
// pickColor();

function rainbow() {
    let cells = document.querySelectorAll('.cell');
    rainbowBtn.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = randomColor();
                console.log('rainbow');
            })
        })
    })
}

function eraser() {
    let cells = document.querySelectorAll('.cell');
    eraserBtn.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.background = `#ffffff`;
                console.log('eraser');
            })
        })
    })
}
// rainbow();

function clearAll() {
    // let container = document.querySelector('#container');
    let clear = document.getElementById('clear');
    // let range = document.getElementById('range');
    clear.addEventListener('click', () => {
        container.innerHTML = "";
        grid(range.value);
        pickColor();
        rainbow();
        eraser();
        console.log('clear all');
        // console.log('cells:', cells);
    })
}

function gridSize() {
    // let range = document.getElementById('range');
    range.addEventListener('input', () => {
        // let container = document.querySelector('#container');
        container.innerHTML = "";
        grid(range.value);
        pickColor();
        rainbow();
        eraser();
        console.log('grid size');
        // console.log('cells:', cells);
        // clearAll();
    })
}

pickColor();
rainbow();
eraser();
clearAll();
gridSize();

// function actionCell() {
//     let buttons = document.querySelectorAll('button');
//     // console.log(buttons);
//     // let cells = document.querySelectorAll('.cell');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             if(button.id === 'eraser') {
//                 // cell.style.background = '#fff';
//                 console.log(button.id);
//                 change(whiteColor);
//                 // cells.forEach(cell =>{
//                 //     cell.addEventListener('mouseover', whiteColor);
//                 // })
//             } else if(button.id === 'rainbow') {
//                 console.log(button.id);
//                 change(randomColor);
//                 // cells.forEach(cell =>{
//                 //     cell.addEventListener('mouseover', randomColor);
//                 // })
//             } else if(button.id === 'color') {
//                 console.log(button.id);
//                 change(color);
//             }
//         });
//     })
//     // console.log(eraserBtn.id);
// }

// function whiteColor() {
//     return `#fff`;
// }

// function pickColor() {
//     return colorInput.value;
// }

// function change(button, color) {
//     let cells = document.querySelectorAll('.cell');

//     button.addEventListener('click', () => {
//         cells.forEach(cell => {
//             cell.addEventListener('mouseover', () => {
//                 cell.style.background = color;
//             });
//         })
//     })
// }

// change(colorBtn, pickColor);
// change(rainbowBtn, randomColor);
// change(eraserBtn, whiteColor);

// function actionCell(func) {
//     let cells = document.querySelectorAll('.cell');
//     cells.forEach(cell => {
//         cell.addEventListener('mouseover', func)
//     })
// }

// function whiteColor(event) {
//     let eraserBtn = document.getElementById('eraser');
//     eraserBtn.addEventListener('click', () => {
//         event.target.style.background = `#fff`;
//     })
// }
// whiteColor();

// function actionCell() {
//     let eraserBtn = document.getElementById('eraser');
//     let cells = document.querySelectorAll('.cell');
//     eraserBtn.addEventListener('click', () => {
//         cells.forEach(cell =>{
//             cell.addEventListener('mouseover', () => {
//                 cell.style.background = '#fff';
//             });
//         })
//     });
// }
// actionCell();

// function colorCell() {
//     let colorBtn = document.getElementById('color');
//     let cells = document.querySelectorAll('.cell');
//     colorBtn.addEventListener('click', () => {
//         cells.forEach(cell => {
//             cell.addEventListener('mouseover', randomColor);
//         })
//     });
// }
// let colorBtn = document.getElementById('color');
// let rainbowBtn = document.getElementById('rainbow');
// let eraserBtn = document.getElementById('eraser');
// let clearBtn = document.getElementById('clear');

// function change(button, color) {
//     let cells = document.querySelectorAll('.cell');

//     button.addEventListener('click', () => {
//         cells.forEach(cell => {
//             cell.addEventListener('mouseover', color);
//         })
//     })
// }

// change(colorBtn, color);
// change(rainbowBtn, randomColor);
// change(eraserBtn, whiteColor);

// function colorBtn() {
// }


// function actionCell() {
//     let buttons = document.querySelectorAll('button');
//     // console.log(buttons);
//     // let cells = document.querySelectorAll('.cell');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             if(button.id === 'eraser') {
//                 // cell.style.background = '#fff';
//                 console.log(button.id);
//                 change(whiteColor);
//                 // cells.forEach(cell =>{
//                 //     cell.addEventListener('mouseover', whiteColor);
//                 // })
//             } else if(button.id === 'rainbow') {
//                 console.log(button.id);
//                 change(randomColor);
//                 // cells.forEach(cell =>{
//                 //     cell.addEventListener('mouseover', randomColor);
//                 // })
//             } else if(button.id === 'color') {
//                 console.log(button.id);
//                 change(color);
//             }
//         });
//     })
//     // console.log(eraserBtn.id);
// }

// function gridSize() {
//     let range = document.getElementById('range');
//     range.addEventListener('change', (e) => {
//         console.log(e.target.value);
//         return e.tartget.value;
//     })
// }

// gridSize();

// colorCell();

// function buttonClick() {
// }
// let colorBtn = document.getElementById('color');
// let eraserBtn = document.getElementById('eraser');
// let clearBtn = document.getElementById('clear');

// eraserBtn.addEventListener('click', () => actionCell(whiteColor));
// colorBtn.addEventListener('click', () => actionCell(randomColor));

// buttonClick();

// function game() {
//     colorCell();
// }
// game();

// actionCell();


const grid = document.querySelector(".grid-container")
createGrid(16)
function createGrid(size) {
    grid.innerHTML = ''

    for (j = 0; j < size; j++) {

        const row = document.createElement("div")
        row.classList.add('row-container')
        
        for (let i = 0; i < size; i++) {
            const box = document.createElement("div")
            box.classList.add('grid-item')

            row.appendChild(box)
        }
        grid.appendChild(row)
    }
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', changeBackgroundColor);
    }); 
}
let currentMode = 'black';
function changeBackgroundColor(e) {
    if (currentMode === 'black') {
        e.target.style.backgroundColor = 'black';
    } else if (currentMode === 'rgb') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}


const resetBtn = document.querySelector(".btn-reset")
resetBtn.addEventListener("click", reset)

function reset(e) {
    e.preventDefault()
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = 'grey';
});
}

const gridSizeBtn = document.querySelector(".btn-prompt")
gridSizeBtn.addEventListener("click", promptSize)

function promptSize() {
    let val = prompt("Enter a grid size between 1 and 100: ")
    let size = parseInt(val)

    if (isNaN(size) || size <= 0 || size > 100) {
        return alert("Invalid Input")
    }
    createGrid(size)
}

const rgbBtn = document.querySelector('.btn-rgb');
const colors = [
  '#FF0000', // Red
  '#FF7F00', // Orange
  '#FFFF00', // Yellow
  '#00FF00', // Green
  '#0000FF', // Blue
  '#4B0082', // Indigo
  '#9400D3'  // Violet
];
let colorIndex = 0;

function changeColor() {
  rgbBtn.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(() => {
    changeColor()
}, 2000);

rgbBtn.addEventListener("click", () => {
    currentMode = "rgb"
})

const blackBtn = document.querySelector(".btn-black")
blackBtn.addEventListener("click", () => {
    currentMode = "black"
})
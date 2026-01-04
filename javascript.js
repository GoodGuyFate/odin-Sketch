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
   
function changeBackgroundColor(e) {
    e.target.style.backgroundColor = `black`;
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


const grid = document.querySelector(".grid-container")


const gridSize = 7

for (j = 0; j < gridSize; j++) {

    const row = document.createElement("div")
    row.classList.add('row-container')
    
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement("div")
        box.classList.add('grid-item')

        row.appendChild(box)
    }
    grid.appendChild(row)
}






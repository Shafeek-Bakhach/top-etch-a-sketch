const container = document.querySelector(".container");
// Creating the grid
let gridSize = 16;
let generateGrid = (n) => {
    for (let x=1; x <= n; x++){
        let row = document.createElement('div');
        row.setAttribute("class", "grid-row");
        for (let i=1; i <= n; i++){
            let square = document.createElement("div");
            square.setAttribute("class", "grid-item");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
generateGrid(gridSize);
// Hover over color changes
let changeColor = (e) => {
    let target = e.target;
    target.style.backgroundColor = 'black';
}
const gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach((grid) => grid.addEventListener("mouseenter", changeColor));

// Grid reset
const resetButton = document.querySelector("button");
resetButton.addEventListener('click', () => {
    const newSize = Number(prompt("Enter a grid size under 100"))
    if (newSize > 100){
        alert("Can't process number greater than 100");
    }else{
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        generateGrid(newSize);
        const gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach((grid) => grid.addEventListener("mouseenter", changeColor));
    }
})
// listen for click
// prompt user for integer
// generate new grid
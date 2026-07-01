const container = document.querySelector(".container");



// I'm just trying to figure out how to create and append a square using JS only
// create an element, set the class all the same (they'll interact the same for now)
// append the child to the parent (container)

// hover over effect:
// mouse enters div and then leaves it
// so div has set color, changes when mouse enters it, and remains that color after mouse has left it
// divs should have event listeners based on hover, function is to change the css to different color



// once that's figured out, then it's how to generate x number of squares
// since grid can be changed, then we need to set a variable to hold the grid size, defaulting to 16
let gridSize = 16;
// loop and create the same div
for (let i=1; i <= gridSize; i++){
    let square = document.createElement("div");
    square.setAttribute("class", "grid-item");
    container.appendChild(square);
}

let changeColor = (e) => {
    let target = e.target;
    target.style.backgroundColor = 'black';
}
// Now the individual squares all have the grid-item class
// create rules for that class in general
// query selecter only applies it to the first one, need to apply it across all

const gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach((grid) => grid.addEventListener("mouseenter", changeColor));
// then use flexbox to arrange them in N x N grid
// fix padding/margins to make sure it looks good

// then how to set up a button to enter new grid

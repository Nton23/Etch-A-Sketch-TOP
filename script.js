//create variables and assign it to id/class in html
let backgroundColorPicker = document.getElementById("background-color-picker");
let penColorPicker = document.getElementById("pen-color-picker");
let penRainbowColor = document.getElementById("pen-rainbow-color");
let eraserButton = document.getElementById("eraser-button");
let clearButton = document.getElementById("clear-button");
let lightColorButton = document.getElementById("light-color-button");
let darkColorButton = document.getElementById("dark-color-button");
let displayUserValue = document.getElementById("display-user-value");
let userRangeInput = document.getElementById("user-range-input");
let rightSideCanvas = document.getElementById("right-side-canvas");
//let cells = document.getElementsByClassName("cells");

//Worlds declare variables
let value;


//display celss on the right side function
function createCells (userInput) {
    value = userInput;
    for (let i = 0; i < value; i++) {
        let verticalCells = document.createElement("div");
        verticalCells.setAttribute("class", "vertical-cells");
        rightSideCanvas.appendChild(verticalCells);
        for(let j = 0; j < value; j++) {
            let horizontalCells = document.createElement("div");
            horizontalCells.setAttribute("class", "horizontal-cells");
            verticalCells.appendChild(horizontalCells);
        }
    }
}

//get user input 

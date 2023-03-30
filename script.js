//create variables and assign it to id/class in html
const backgroundColorPicker = document.getElementById("background-color-picker");
const penColorPicker = document.getElementById("pen-color-picker");
const penRainbowColor = document.getElementById("pen-rainbow-color");
const eraserButton = document.getElementById("eraser-button");
const clearButton = document.getElementById("clear-button");
const lightColorButton = document.getElementById("light-color-button");
const darkColorButton = document.getElementById("dark-color-button");
const displayUserValue = document.getElementById("display-user-value");
const userRangeInput = document.getElementById("user-range-input");
const rightSideCanvas = document.getElementById("right-side-canvas");

//display celss on the right side function
/* This function right here is to create grid
It'll take user input from the range type and create the squares
*/
function createCells(userInput) {
  let value = 0;
  value = userInput;
  //this line right here is to reset the right side canvas back to normal
  //Or else everytime this function is updated, it will create another function on top of it
  rightSideCanvas.innerHTML = "";
  //everytime the user input is different, the background color value will go back to #FFFFFF
  backgroundColorPicker.value = "#FFFFFF";
  //Same thing with the pencolorpicker, it will go back to color #000000
  penColorPicker.value = "#000000";
  //this first for loop is to make the vertical cell(s) which will contain the second for loop
  for (let i = 0; i < value; i++) {
    //Create vertical div everytime the loop go through
    let verticalCells = document.createElement("div");
    //give it the attribute such as class and id
    verticalCells.setAttribute("class", "cells");
    verticalCells.setAttribute("id", "vertical-cells");
    //This will make the div go in the right side canvas div bracket
    rightSideCanvas.appendChild(verticalCells);
    //this second loop is to loop through and create horizontal divs/cells
    for (let j = 0; j < value; j++) {
      let horizontalCells = document.createElement("div");
      horizontalCells.setAttribute("class", "cells");
      horizontalCells.setAttribute("id", "horizontal-cells");
      //we want this horizontal divs to go inside the vertical div bracket
      verticalCells.appendChild(horizontalCells);
    }
  }
  //this line is to display the user input to let the user know the value they've enter
  displayUserValue.innerHTML = `Current input: ${userRangeInput.value} x ${userRangeInput.value}`;
  //this line is to call the function default pen color.
  //It will generate whatever the color is in the function without clicking on the color picker.
  defaultPenColor();
};
//display the default userinput which is 16
createCells(userRangeInput.value)

//get user input value
userRangeInput.addEventListener("input", (event) => {
  let userRangeInputValue = event.target.value;
  createCells(userRangeInputValue);
});

//this is a function to select vertical divs and give it the color
function addEventListenerToBackgroundCell() {
  const backgroundCell = document.querySelectorAll("#vertical-cells");
  backgroundCell.forEach((div) => {
    div.style.backgroundColor = backgroundColorValue;
  })
};

//this is an event that will get the value color everytime the user select the color
//it will also call the function addEventListenerToBackgroundCell() 
backgroundColorPicker.addEventListener("change", (event) => {
  let backgroundColorValue = event.target.value;
  addEventListenerToBackgroundCell();
});

//This function is to put in the createCell() function
//let you use the default color which is black 
function defaultPenColor() {
  penColorValue = "#000000";
  let isMouseDown = false;
  const cell = document.querySelectorAll("#horizontal-cells");
  cell.forEach((div) => {
    div.addEventListener("mousedown", () => {
      isMouseDown = true;
      div.style.backgroundColor = penColorValue;
    })
    div.addEventListener("mouseup", () => {
      isMouseDown = false;
    })
    div.addEventListener("mousemove", () => {
      if (isMouseDown) {
        div.style.backgroundColor = penColorValue;
      }
    })
  })
}

//this function is to give the horizontal divs color when user click and move the mouse
function addPenColorPicker() {
  let isMouseDown = false;
  const cell = document.querySelectorAll("#horizontal-cells");
  cell.forEach((div) => {
    div.addEventListener("mousedown", () => {
      isMouseDown = true;
      div.style.backgroundColor = penColorValue;
    })
    div.addEventListener("mouseup", () => {
      isMouseDown = false;
    })
    div.addEventListener("mousemove", () => {
      if (isMouseDown) {
        div.style.backgroundColor = penColorValue;
      }
    })
  })
};

//this event will select the user selected color
//will call the function addPenColorPicker and give its color to the function inside
penColorPicker.addEventListener("change", (event) => {
  penColorValue = event.target.value;
  addPenColorPicker();
});

//this function to generate random color rgb()
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function addRainbowColorCells() {
  let isMouseDown = false;
  const cell = document.querySelectorAll("#horizontal-cells");
  cell.forEach((div) => {
    div.addEventListener("mousedown", () => {
      isMouseDown = true;
      div.style.backgroundColor = randomRGB();
    })
    div.addEventListener("mouseup", () => {
      isMouseDown = false;
    })
    div.addEventListener("mousemove", () => {
      if (isMouseDown) {
        div.style.backgroundColor = randomRGB();
      }
    })
  })
};

penRainbowColor.addEventListener("click", () => {
  addRainbowColorCells();
});
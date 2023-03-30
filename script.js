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
//let cells = document.getElementsByClassName("cells");

//
let backgroundColorValue = "";
//display celss on the right side function
function createCells(userInput) {
  let value = 0;
  value = userInput;
  rightSideCanvas.innerHTML = "";
  backgroundColorPicker.value = "#FFFFFF";
  penColorPicker.value = "#000000";
  for (let i = 0; i < value; i++) {
    let verticalCells = document.createElement("div");
    verticalCells.setAttribute("class", "cells");
    verticalCells.setAttribute("id", "vertical-cells");
    rightSideCanvas.appendChild(verticalCells);
    for (let j = 0; j < value; j++) {
      let horizontalCells = document.createElement("div");
      horizontalCells.setAttribute("class", "cells");
      horizontalCells.setAttribute("id", "horizontal-cells");
      verticalCells.appendChild(horizontalCells);
    }
  }
  displayUserValue.innerHTML = `Current input: ${userRangeInput.value} x ${userRangeInput.value}`;
  defaultPenColor();
};
//display the default userinput which is 16
createCells(userRangeInput.value)

//get user input value
userRangeInput.addEventListener("input", (event) => {
  let userRangeInputValue = event.target.value;
  createCells(userRangeInputValue);
});

function addEventListenerToBackgroundCell() {
  const backgroundCell = document.querySelectorAll("#vertical-cells");
  backgroundCell.forEach((div) => {
    div.style.backgroundColor = backgroundColorValue;
  })
};

backgroundColorPicker.addEventListener("change", (event) => {
  backgroundColorValue = event.target.value;
  addEventListenerToBackgroundCell();
});

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

penColorPicker.addEventListener("change", (event) => {
  penColorValue = event.target.value;
  addPenColorPicker();
});

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
//create a div contains user interface container
const userInterfaceContainer = document.createElement("div");
userInterfaceContainer.setAttribute("id", "user-interface-container");

//create a div that contains other divs
const divContainer = document.createElement("div");
divContainer.setAttribute("id", "div-container");

//create a div that contains color mode, button, and scroller
const divLeftSideContainer = document.createElement("div");
divLeftSideContainer.setAttribute("id", "div-left-side-container");

//create divs inside the left side container div
//this color container is pen color container
const colorContainer = document.createElement("div");
colorContainer.setAttribute("id", "color-container");
//this color mode container is for background
const colorModeContainer = document.createElement("div");
colorModeContainer.setAttribute("id", "color-mode-container");
colorModeContainer.setAttribute("class", "lefty-container");
const rainbowModeContainer = document.createElement("div");
rainbowModeContainer.setAttribute("id", "rainbow-mode-container");
rainbowModeContainer.setAttribute("class", "lefty-container")
const eraserContainer = document.createElement("div");
eraserContainer.setAttribute("id", "eraser-container");
eraserContainer.setAttribute("class", "lefty-container");
const clearContainer = document.createElement("div");
clearContainer.setAttribute("id", "clear-container");
clearContainer.setAttribute("class", "lefty-container");
const colorShadingContainer = document.createElement("div");
colorShadingContainer.setAttribute("id", "color-shading-container");
colorShadingContainer.setAttribute("class", "lefty-container");
const scrollerContainer = document.createElement("div");
scrollerContainer.setAttribute("id", "scroller-container");

//create a function to generate other divs
function createDiv(divQty) {
  let userInput = divQty;
  divContainer.innerHTML = "";
  //loop through the number of time the user want
  //create each vertical container
  for (let i = 0; i < userInput; i++) {
    const insideDivsVertical = document.createElement("div");
    insideDivsVertical.setAttribute("id", "inside-divs-vertical");
    insideDivsVertical.setAttribute("class", "inside-divs");
    divContainer.appendChild(insideDivsVertical);
    //loop through the number of time the user want
    //create each horizontal container (box)
    for (let j = 0; j < userInput; j++) {
      const insideDivsHorizontal = document.createElement("div");
      insideDivsHorizontal.setAttribute("id", "inside-divs-horizontal");
      insideDivsHorizontal.setAttribute("class", "inside-divs");
      insideDivsVertical.appendChild(insideDivsHorizontal);

    }
  }
  addEventListenersToDivs();
};

//append the divs to html body
document.body.appendChild(userInterfaceContainer);
userInterfaceContainer.appendChild(divLeftSideContainer);
userInterfaceContainer.appendChild(divContainer);
divLeftSideContainer.appendChild(colorContainer);
divLeftSideContainer.appendChild(colorModeContainer);
divLeftSideContainer.appendChild(rainbowModeContainer);
divLeftSideContainer.appendChild(eraserContainer);
divLeftSideContainer.appendChild(clearContainer);
divLeftSideContainer.appendChild(colorShadingContainer);
divLeftSideContainer.appendChild(scrollerContainer);


//append button and user input
const userButton = document.querySelector("#user-button");
const userInputValue = document.querySelector("#user-input");
scrollerContainer.appendChild(userButton);
scrollerContainer.appendChild(userInputValue);

//clear button 
const clearButton = document.createElement("button");
clearButton.setAttribute("id", "clear-button")
clearButton.textContent = "Clear";
clearContainer.appendChild(clearButton);


//create add event to populate the user input into the create div function
userButton.addEventListener("click", () => {
  const inputValue = parseInt(userInputValue.value);
  if (!isNaN(inputValue)) {
    createDiv(inputValue);
    userInputValue.value = "";
  }
});

//click then hold left click to color cells  
function addEventListenersToDivs() {
  const cells = document.querySelectorAll(".inside-divs");
  // set mouse click to false when not click
  let isMouseDown = false;
  //set rainbow button check to false
 


  cells.forEach((div) => {
    div.style.backgroundColor = changeBackgroundColor.value;
    div.addEventListener("mousedown", () => {
      isMouseDown = true;
      div.style.backgroundColor = backgroundColorSelection.value;
    });

    div.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    div.addEventListener("mousemove", () => {
      if(isMouseDown) {
        div.style.backgroundColor = backgroundColorSelection.value;
      }
    });
  });
}

// add a reset button to reset the display
clearButton.addEventListener("click", () => {
  divContainer.innerHTML = "";
  backgroundColorSelection.value = "";
  changeBackgroundColor.value = "#FFFFFF";
});

// add a color changing background when user select
backgroundColorSelection = document.createElement("input");
backgroundColorSelection.setAttribute("type", "color");
backgroundColorSelection.setAttribute("class", "color-picker");
backgroundColorSelection.value = "#0000FF";
colorModeContainer.appendChild(backgroundColorSelection);

/*/add a rainbow button
rainbowColor = document.createElement("button");
rainbowColor.setAttribute("id", "rainbow-color");
rainbowColor.setAttribute("class", "lefty-buttons");
rainbowColor.textContent = "Rainbow";
rainbowModeContainer.appendChild(rainbowColor);

//create a function that generate a random rgb color
/*function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
*/
//add a different background color
changeBackgroundColor = document.createElement("input");
changeBackgroundColor.setAttribute("type", "color");
changeBackgroundColor.setAttribute("class", "color-picker");
changeBackgroundColor.value = "#FFFFFF";
colorContainer.appendChild(changeBackgroundColor);

//rainbowColor.addEventListener("click", () => {
  //rainbowCheck = !rainbowCheck;
//});


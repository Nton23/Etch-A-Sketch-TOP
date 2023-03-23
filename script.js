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
const colorContainer = document.createElement("div");
colorContainer.setAttribute("id", "color-container");
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

//click then hold left click to change background color 
function addEventListenersToDivs() {
    const cells = document.querySelectorAll(".inside-divs");
    let isMouseDown = false;
    
    cells.forEach((div) => {
      div.addEventListener("mousedown", () => {
        isMouseDown = true;
        div.style.backgroundColor = "black";
      });
      
      div.addEventListener("mouseup", () => {
        isMouseDown = false;
      });
      
      div.addEventListener("mousemove", () => {
        if (isMouseDown) {
          div.style.backgroundColor = "black";
        }
      });
    });
  }
// add a reset button to reset the display
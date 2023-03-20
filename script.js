//create a div contains user interface container
const userInterfaceContainer = document.createElement("div");
userInterfaceContainer.setAttribute("id","user-interface-container");

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
eraserContainer.setAttribute("id","eraser-container");
eraserContainer.setAttribute("class","lefty-container");
const clearContainer = document.createElement("div");
clearContainer.setAttribute("id", "clear-container");
clearContainer.setAttribute("class", "lefty-container");
const scrollerContainer = document.createElement("div");
scrollerContainer.setAttribute("id", "scroller-container");


//create a function to generate other divs
function createDiv(divQty) {
    
}

//append the divs to html body
document.body.appendChild(userInterfaceContainer);
document.body.appendChild(divContainer);

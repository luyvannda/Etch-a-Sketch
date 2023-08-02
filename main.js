let color = "black";


document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });

})

const board = document.querySelector(".board");
board.style.width = "31.25rem";
board.style.height = "31.25rem";
board.style.display = "grid";
board.style.border = "1px solid black";

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let userInput = prompt("What is the board size you prefer?");
  let message = document.querySelector("#message");
  if (userInput === "") {
    message.innerHTML = "Please provide a number";
  } else if (userInput <= 0 || userInput > 100) {
    message.innerHTML = "Please provide a number between 1 and 100"
  } else {
    message.innerHTML = "Now, happy sketching!!!";
    return userInput;
  }
}

function colorDiv() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(
      ${Math.floor(Math.random() * 360)}, 
      ${Math.floor(Math.random() * 100)}%, 
      ${Math.floor(Math.random() * 100)}%)`
  } else if (color === "white") {
    this.style.backgroundColor = `white`;
  } else {
    this.style.backgroundColor = `black`;
  }
}


function setColor(colorChoice) {
  color = colorChoice;
  console.log(color);
}
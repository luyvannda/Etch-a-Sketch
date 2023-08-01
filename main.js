
document.addEventListener("DOMContentLoaded", function () {
  console.log("hi");
  createBoard(16);
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
    div.style.backgroundColor = "green";
    board.insertAdjacentElement("beforeend", div);
  }
}
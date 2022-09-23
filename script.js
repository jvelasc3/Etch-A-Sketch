let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", () => {
  makeGrid(16);

  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
    }
    let draw = document.querySelector("#draw");
    if (click) {
      draw.innerHTML = "Drawing Activated!";
    } else {
      draw.innerHTML = "Drawing Deactivated!";
    }
  });

  let btn_popup = document.querySelector("#btn_popup");
  btn_popup.addEventListener("click", () => {
    let size = gridSize();
    makeGrid(size);
  });
});

function makeGrid(size) {
  let grid = document.querySelector(".grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    grid.insertAdjacentElement("beforeend", div);
  }
}

function gridSize() {
  let input = prompt("Grid Size: num x num");
  let message = document.querySelector("#message");

  if (input == "") {
    message.innerHTML = "Error: Blank Field";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Error: Value must be between 1-100";
  } else {
    message.innerHTML = `New Grid Size: ${input} x ${input}`;
    return input;
  }
}

function colorDiv() {
  if (click) {
    if (color == "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == "eraser") {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function reset() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

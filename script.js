document.addEventListener("DOMContentLoaded", () => {
  makeGrid(2);

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
    message.innerHTML = `Success! Grid Size: ${input} x ${input}`;
    return input;
  }
}

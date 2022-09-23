document.addEventListener("DOMContentLoaded", () => {
  makeGrid(2);
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

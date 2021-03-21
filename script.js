window.addEventListener('load', (event) => {
  createDivs(16);
});

const container = document.querySelector('#container');
const grid = document.createElement("div");
grid.className = "grid";
container.appendChild(grid);

function createDivs(n){
  removeAllChildNodes("grid");
  for(var i = 0; i < n; i++){
    var row = document.createElement("div");
    row.className = "row";
    for(var x = 1; x <= n; x++){ 
      var cell = document.createElement("div");
      cell.className = "gridsquare";
      row.appendChild(cell);
    }
    grid.appendChild(row);
    row.style.gridTemplateColumns = "repeat(" + n + ", auto)";
  }
  document.getElementById("container").style.gridTemplateColumns = "repeat(" + n + ", auto)";
  let cells = grid.querySelectorAll('div');
  cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
}

function clearGrid() {
  var x = grid.childElementCount;
  removeAllChildNodes(grid);
  createDivs(x);
}

function newGrid() {
  removeAllChildNodes(grid);
  let num = prompt("Enter an integer between 2 and 64: ");
  if (Number.isInteger(+num) && num >=2 & num <=64) {
    createDivs(num);
  } else {
    newGrid();
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function changeColor(e) {
  let r = Math.floor(Math.random() * Math.floor(250));
  let g = Math.floor(Math.random() * Math.floor(250));
  let b = Math.floor(Math.random() * Math.floor(250));
  if (r>=240 & g>=240 & b>=240) {
    r = r-50;
    g = g-100;
    b = b-60;
  }
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

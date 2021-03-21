window.addEventListener('load', (event) => {
  createDivs(16);
});

let drawing = false;
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
  grid.addEventListener('click', changeDrawing);
  let cells = grid.querySelectorAll('div');
  cells.forEach(cell => cell.addEventListener('mouseover', changeColor));   
}

function changeDrawing (){
  if (drawing) {
    drawing = false;
  } else {
    drawing = !drawing;
  }
  return drawing;
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

  if (document.getElementById("radioRandom").checked) {
    let r = Math.floor(Math.random() * Math.floor(250));
    let g = Math.floor(Math.random() * Math.floor(250));
    let b = Math.floor(Math.random() * Math.floor(250));
    if (r>=240 & g>=240 & b>=240) {
      r = r-50;
      g = g-100;
      b = b-60;
    }
    if (drawing){
      e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      e.target.style.borderColor = `rgb(${r}, ${g}, ${b})`;
    }
  } else if (document.getElementById("radioWarm").checked) {
    let h = Math.floor(Math.random() * Math.floor(65));
    let s = Math.floor(Math.random() * Math.floor(60)) + 40;
    let l = Math.floor(Math.random() * Math.floor(80)) + 10;
    if (drawing){
      e.target.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
      e.target.style.borderColor = `hsl(${h}, ${s}%, ${l}%)`;
    }
  } else if (document.getElementById("radioCool").checked) {
    let h = Math.floor(Math.random() * Math.floor(130)) + 150;
    let s = Math.floor(Math.random() * Math.floor(65)) + 20;
    let l = Math.floor(Math.random() * Math.floor(70)) + 20;
    if (drawing){
      e.target.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
      e.target.style.borderColor = `hsl(${h}, ${s}%, ${l}%)`;
    }
  } else if (document.getElementById("radioGray").checked) {
    let h = 0;
    let s = 0;
    let l = Math.floor(Math.random() * Math.floor(90)) + 5;
    if (drawing){
      e.target.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
      e.target.style.borderColor = `hsl(${h}, ${s}%, ${l}%)`;
    }
  } else if (document.getElementById("radioErase").checked) {
    let r = 250;
    let g = 250;
    let b = 250;
    if (drawing){
      e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      e.target.style.borderColor = 'hsl(60, 10%, 90%)';
    }
  } else if (document.getElementById("radioSelect").checked) {
    if (drawing){
      e.target.style.backgroundColor = document.getElementById("color-picker").value;
      e.target.style.borderColor = document.getElementById("color-picker").value;
    }
  }
}

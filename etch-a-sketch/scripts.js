const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

// var button = document.getElementsByClassName("button");
// button
function newGrid() {
  var old_grid_items = document.getElementsByClassName("grid-item");  
  var txt;
  var rows = prompt("Please enter number of rows:");
  // if (rows == null || rows == "") {
  //   txt = "User cancelled the prompt.";
  // } 
  var columns = prompt("Please enter number of columns:");
  while(old_grid_items.length > 0) {
    old_grid_items[0].parentNode.removeChild(old_grid_items[0]);
  }
  makeRows(rows, columns);
}

let test = document.getElementById("container");
test.addEventListener("mouseover", function(event) {
  // var selected_grid = event.target; 
  // var h = selected_grid.backgroundColor;  
  // console.log(h);
  // selected_grid.style.backgroundColor = "hsl(${h}, ${s}, ${l})";
  // event.target.style.backgroundColor = 'hsl(0, 100%, 50%)';
  if (event.target.style.backgroundColor) {    
    var x = event.target.style.backgroundColor;
    console.log(x);
  } else {
    event.target.style.backgroundColor = 'hsl(0, 100%, 50%)';
    console.log('nothing');
  }
  
});

// var button = document.getElementsByClassName("grid-item");
// function increaseBlack(red, green, blue) {
//   button.style

// }

// button.hover()

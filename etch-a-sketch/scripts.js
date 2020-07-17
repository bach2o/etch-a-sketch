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
test.addEventListener("mouseover", changeColor);
// test.addEventListener("mousedown", function(event) {
//   test.addEventListener("mouseover", changeColor);
//   test.addEventListener("mouseup", changeColor, false);
// }) ;



function changeColor(event) {
  // the following 'if' section is where I have to retrieve the color value from the grid_item and try to decrease the lightness by 10% everytime it returns
  // the problem is, event.target.style.backgroundColor only returns rgb value, NOT hsl. Thus I had to retrieve the rgb value, convert it to string, get the number 
  // and then convert it back to hsl value
  if (event.target.style.backgroundColor) {    
    var old_color_value = event.target.style.backgroundColor; // retrieve the color value in rgb format
    // event.target.style.backgroundColor = `hsl(0, 0%, 80%)`;
    old_color_value = old_color_value.replace(/[^\d.]/g, '' ); // remove the non-integer characters in the string
    // console.log(old_color_value);    
    // console.log(typeof old_color_value );    
    
    var extract_string = old_color_value.substring(0, old_color_value.length / 3); // split the string into three parts (since all 3 r, g and b value are the same)
    rgb_value = parseInt(extract_string, 10); // get the integer. number 10 may not be necessary
    // console.log(rgb_value);
    // console.log(typeof extract_string);

    var r = rgb_value; // prepare the r,g,b value for the rgbToHsl function import
    var g = rgb_value;
    var b = rgb_value;
    // console.log(r);

    old_hsl_value = rgbToHsl(r ,g, b); // convert to Hsl. return in Array form [h, s, l]
    // console.log(old_hsl_value);
    var l = old_hsl_value[2] * 100; // retrieve the lightness value in the hsl array, round it up
    // console.log(l);
    l = Math.round(l) - 10; // decrease the lightness by 10%
    event.target.style.backgroundColor = `hsl(0, 0%, ${l}%)`; // finally, set the backgroundColor

  } else { // this serves as an initial part of setting up a color value for the grid_item element. otherwise, the 'if' above section cannot retrieve any rgb value
    // var r = Math.floor(Math.random() * 256);
    // var g = Math.floor(Math.random() * 256);
    // var b = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `hsl(0, 0%, 90%)`;
    console.log('nothing');
  }
}


function rgbToHsl(r, g, b) { // conversion from rgb to hsl function. thanks internet.
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [ h, s, l ];
}
// var button = document.getElementsByClassName("grid-item");
// function increaseBlack(red, green, blue) {
//   button.style

// }

// button.hover()

var box = document.getElementById("box");

var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//Math.random() [0,1}

//choosesrandomcoordinates
var tarX = Math.random() * boxWidth;
var tarY = Math.random() * boxHeight;

// prints value to make sure chooses random
console.log(`targetx: ${tarX} \n targety: ${tarY}`);

function distance(x0,y0,x1,y1){
  var dx = x1 - x0;
  var dy = y1 - y0;
  return Math.floor(Math.sqrt(Math.pow(dx,2) + Math.pow (dy, 2)));

};

function loc(e){
  console.log(`mousex: ${e.clientX} \n mousey: ${e.clientY}`);
  var d = distance(tarX, tarY, e.clientX, e.clientY)
  console.log(d)
  box.style.backgroundColor = `rgb(${255 - d},${142 - d},${255 - d})`
  if (d < 30){
    box.style.backgroundColor = `rgb(149,217,255)`
  }

}
box.addEventListener("mousemove", loc);

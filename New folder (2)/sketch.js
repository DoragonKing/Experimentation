let posX ;
let posY ;
let size;
let opacity;

function setup(){
createCanvas(500,500);
background(0);
frameRate(60);
}


function draw(){
  drawEllipse()
}
function drawEllipse(){
  noStroke();
  posX = random(500);
  posY =random(500);
  size=random(200);
  opacity=random(300);

  fill(random(255),0,random(255),opacity);
ellipse(posX,posY,size,size);
}

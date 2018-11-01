let size = 50


function setup () {
  console.log("Initialising")

  createCanvas(800,600);
noloop();
}

function draw () {
background(255);

fill(random(255));

for(let x = 0; x<10; x++)

rect(size * x, height/2,size,size)


}

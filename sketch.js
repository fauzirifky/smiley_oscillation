let y;
let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  background(200);
  y = 100;
  j = 0;
}

function wajah(x,y){
  var diam = 75
  // Face
  fill(255, 255, 0);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, diam, diam);
  
  // Smile
  var startAng = .1*PI
  var endAng = .9*PI
  var smileDiam = .6*diam;
  arc(x, y, smileDiam, smileDiam, startAng, endAng);
  
  // Eyes
  var offset = .2*diam;
  var eyeDiam = .1*diam;
  fill(0);
  ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
  ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
}

function draw() {

  
  /*
  
  // put drawing code here
  point(50,50);
  line(50,80,80,150);
  rect(100,50, 30, 50);
  ellipse(100,100, 50, 50);
  arc(200,100, 50, 50, radians(0), radians(270));
  */

  /*
  ellipse(55, 100, 50, 50);
  strokeWeight(8); // Stroke weight to 8 pixels 
  ellipse(130, 100, 50, 50);
  ellipse(205, 100, 50, 50);
  strokeWeight(20);  // Stroke weight to 20 pixels
  ellipse(280, 100, 50, 50);
  */

  /*
  strokeWeight(25)
  strokeJoin(ROUND); 
  rect(40, 75, 50, 50); 
  strokeJoin(BEVEL); 
  rect(140, 75, 50, 50); 
  
  strokeCap(SQUARE); 
  line(230, 75, 300, 125); 
  strokeCap(ROUND); 
  line(300, 75, 370, 125);
  */

  /*
  strokeWeight(2);  
  fill(200,234,100)
  ellipse(55, 100, 50, 50);
  strokeWeight(8); // Stroke weight to 8 pixels 
  fill(140,0,100)
  ellipse(130, 100, 50, 50);
  stroke(123,234,233)
  ellipse(205, 100, 50, 50);
  noStroke();  // Stroke weight to 20 pixels
  ellipse(280, 100, 50, 50);
  */

  /*
  fill(122,234,100);
  beginShape(); 
  vertex(200, 20); 
  vertex(300, 60);
  vertex(250, 60);
  vertex(250, 120);
  vertex(150, 120);
  vertex(150, 60);
  vertex(100, 60);
  endShape(CLOSE);
  */

  /*
  var x = 10;
  for (var j=0; j<390;j++){
    y = 100+ 30 * Math.sin(PI/10*x)
    point(x,y)
    x = x + 1;
  }
  */
  
  background(200);
  wajah(100,100);
  line(200,0,200,200)

  
  var y =  100 + 30 * Math.sin(PI/10*j)
  j+=1
  wajah(300, y);
    
  
  
}
var num=1000;
let pos= new Array(num);
let vel= new Array(num);
let c = new Array(num);
var aux=0;

function setup() {
 createCanvas(720, 720);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(30);
  background(0, 0, 0);
  for (var i=0; i<num; i=i+1) {
    pos[i]=new p5.Vector(720/2, 720/2);
    console.log(pos[i]);
    var r=7;
    var angle=random(360);
    var theta=radians(angle);
    var x=cos(theta)*r*cos(i);
    var y=sin(theta)*r;
    vel[i]=new p5.Vector(x, y);
    c[i]=color((aux%5)*50, 80, 90);
    aux++;
  }
  
  run_particles();
}


function draw() {
    fill(0, 0, 0, 12);
  noStroke();
  rect(-1, -1, width+1, height+1);
  
   for (var i=0; i<num; i=i+1) {
    fill(c[i]);
    noStroke();
    pos[i].add(vel[i]);
    ellipse(pos[i].x, pos[i].y, 7, 7);
    
    // if (pos[i].x>=width) {
    //   vel[i].x=vel[i].x*-1;
    // }

//     if (pos[i].x<0) {
//       vel[i].x=vel[i].x*-1;
//     }

//     if (pos[i].y>=height) {
//       vel[i].y=vel[i].y*-1;
//     }

    // if (pos[i].y<0) {
    //   vel[i].y=vel[i].y*-1;
    // }
  }
 
}

function mouseClicked() {
  run_particles();
}

function run_particles(){
   
  for (var i=0; i<num; i=i+1) {
    pos[i]=new p5.Vector(mouseX, mouseY);
    console.log(pos[i]);
    var r=7;
    var angle=random(360);
    var theta=radians(angle);
    var x=cos(theta)*r*cos(i);
    var y=sin(theta)*r;
    vel[i]=new p5.Vector(x, y);
    c[i]=color((aux%5)*50, 80, 90);
    aux++;
  }
  
}

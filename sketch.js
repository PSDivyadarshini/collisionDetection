var a, b;

function setup() {
  createCanvas(800,400);
  a= createSprite(100, 100, 50, 50);
  a.shapeColor="green";
  a.debug=true;

  b= createSprite(200, 100, 100, 50);
  b.shapeColor="green";
  b.debug=true;
  
}

function draw() {
  background("pink");

  b.x=mouseX;
  b.y=mouseY;
  console.log(b.x-a.x) ; 

  if(b.x-a.x<b.width/2+a.width/2&&a.x-b.x<b.width/2+a.width/2&&b.y-a.y<b.width/2+a.width/2&&a.y-b.y<b.width/2+a.width/2){
    b.shapeColor="red";
    a.shapeColor="red";
  }
else{
  b.shapeColor="green";
  a.shapeColor="green";
}
    

  drawSprites();
}
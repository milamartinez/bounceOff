var block1, block2

function setup() {
  createCanvas(800,400);
  block1 = createSprite(400, 200, 50, 50);
  block2 = createSprite(400, 200, 50, 50);
  block2.shapeColor = "Red";
  block1.shapeColor = "Blue";
  block1.debug = true;
  block2.debug = true;
block1.velocityY = -5;
block2.velocityY = +5;
}

function draw() {
  background(255,255,255);  
  block2.y = mouseY; 
  block2.x = mouseX;

  if ((block2.x - block1.x < block2.width / 2 + block1.width / 2) &&
      (block1.x - block2.x < block2.width / 2 + block1.width / 2)) {
    block1.velocityX = block1.velocityX * (- 1);
    block2.velocityX = block2.velocityX * (- 1);
  }

  if ((block2.y - block1.y < block2.width / 2 + block1.width / 2) &&
  (block1.y - block2.y < block2.width / 2 + block1.width / 2)) {
    block1.velocityY = block1.velocityY * (- 1);
    block2.velocityY = block2.velocityY * (- 1);
  }
  drawSprites();
}

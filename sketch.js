var girl
function setup() 
{
  createCanvas(400,400);

  girl = createSprite(200,200,50,50);

  console.log(girl);
}

function draw() 
{
  background("black");

  drawSprites();

  if(keyIsDown(DOWN_ARROW))
  {
    background("red"); 
  }

  else if(keyDown(UP_ARROW))
  {
    background("green"); 
  }

  else if(keyIsDown(RIGHT_ARROW))
  {
    background("orange"); 
  }

  else if(keyIsDown(LEFT_ARROW))
  {
    background("yellow"); 
  }

  else if(keyDown("p"))
  {
    background("pink"); 
  }

  else if(keyDown("h"))
  {
    background("purple"); 
  }

  else if(keyDown("b"))
  {
    background("blue"); 
  }

  else if(keyDown("f"))
  {
    background("brown"); 
  }

}
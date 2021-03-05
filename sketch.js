var canva, gameState;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");
  gameState = database.ref("value", gameState);
  
}

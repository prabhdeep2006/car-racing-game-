var database;
var form,game,player; 
var gameState=0; 
var playerCount; 
var distance=0;
var allPlayers; 
var car1,car2,car3,car4,cars,c1,c2,c3,c4; 
var track,ground; 

function preload(){
c1 = loadImage("images/car1.png");
c2 = loadImage("images/car2.png");
c3 = loadImage("images/car3.png");
c4 = loadImage("images/car4.png"); 
track = loadImage("images/track.jpg"); 
ground = loadImage("images/ground.png"); 

}



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight);
  game = new Game(); 
  game.getState();
  game.start(); 

}
function draw(){
  background(255);
  if(playerCount===4){
  game.update(1); 
  }
  if(gameState===1){
    game.play(); 
  }
  if(gameState===2){
    game.end(); 
  }
}
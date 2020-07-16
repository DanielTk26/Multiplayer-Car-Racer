var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var  car1, car2, car3, car4, cars ;
var track, car1_pic, car2_pic, car3_pic, car4_pic, ground_pic;


function preload () {

track = loadImage("images/track.jpg");
car1_pic = loadImage("images/car1.png");
car2_pic = loadImage("images/car2.png");
car3_pic = loadImage("images/car3.png");
car4_pic = loadImage("images/car4.png")
ground_pic = loadImage("images/ground.png");

}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  


}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

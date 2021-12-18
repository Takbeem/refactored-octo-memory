const Engine = Matter.Engine;
const Render = Matter.render;
const World = Matter.world;
const Bodies = Matter.Bodies

let engine;
let world;

var database;


var cowImg;
var backgroundImg;
var titleBk;
var cow;
var cowGroup
var playerCount = 0;
var player1;
var player2;
var button;
var buttonImg
var score = 0



function preload() {
    backgroundImg = loadImage('assets/backgroundXp.jpg')
    cowImg = loadImage('assets/cowImg.png')
    titleBk = loadImage('assets/grass.jpg')
    buttonImg = loadImage('assets/button.png')
    cowGroup =  new Group()

}
 


function setup() {
createCanvas(1300,600);

database = firebase.database()

cow = createSprite(200,500);
    cow.addImage('cow',cowImg)
    cow.scale = 0.2

    button = createSprite(1175,150)
    button.addImage('button',buttonImg)
    
}


function draw() {
    background(backgroundImg)

    drawSprites()
    textSize(50)
    text('Score:'+score,1000,50)

    if(frameCount % 20 === 0) {
        cow = createSprite(random(100,1000),0)
        cow.addImage('cow',cowImg)
        cow.scale = 0.2
        cow.velocityY = 6
    }
    
   
}
function updateScore() {
    score = score+1;
}


function saveScore() {
    localStorage.setItem('score',score)                              
}
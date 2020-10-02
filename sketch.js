//Create variables here
var dog, happyDog,dog_anime,happydog_anime;
var  database;
var foodS, foodStock;
function preload(){
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
   
  dog = createSprite(250,300,30,40);
  dog.addImage(dogimg);
  dog.scale = 0.2;

  database = firebase.database();
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog);
}


  drawSprites();

  fill("red");
  textSize(20);
text("Food Left :"+ foodS,200,100);
text("Note : Press up arrow key to Feed li'l Tricky Milk",40,20);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if(x<= 0){
  x =0;
}else{
  x = x-1;
}

database.ref('/').update({
  Food: x,
})
}
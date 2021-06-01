//Create variables here
var dog,happydog,database,foodS,foodStock;
var dogIMG1,gogIMG2;
function preload()
{
	//load images here
  dogIMG1=loadImage("Dog.png");
  dogIMg2=loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,300)
  dog.addImage(dogIMG1);
  dog.scale=0.3
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);

 
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogIMG2)
}
drawSprites();
textSize(20);
text("food remaning:"+foodS,100,100);
stroke();

}
function readStock(){
foodS=data.val()
}
function writeStock(){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
database.ref('/').update({Food: x})
}


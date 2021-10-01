function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
async function getBakgroundImg(){
  var response = await fetch("https://www.timeanddate.com/time/zone/india")
  var responseJSON = await response.json();
  var dateTime =  responseJSON.dateTime
  var hour = dateTime.slice(11,13)
  if (hour>=0600 && hour<=1900){
    bgm = "snow1.jpg"
    

  }
}
var gif_loadImg, gif_createImg;
var bGm_1;
var bGm_2;


function preload() {
  gif_loadImg = loadImage("./assets/source.gif");
  gif_createImg = createImg("./assets/source.gif");
  bGm_1 = createAudio("./assets/snow&wind_sound.wav");
  bGm_2 = createAudio("./assets/snow_falling_sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  var myText = "touch top to open window";

  textFont("Playfair Display");
  textAlign(LEFT);
  textSize(30);
  fill("white");
  text(myText, 10, height / 7 * 6);

}

function draw() {
  gif_createImg.position(370, 100);
  bGm_1.play();
  bGm_2.play();

  if (mouseY <= height / 2) {
    bGm_1.volume(0.5 + (height / 2 - mouseY) / height);
    bGm_2.volume(0.5 + (height / 2 - mouseY) / height);
  } else {
    bGm_1.volume(0.5 - (mouseY - height / 2) / height);
    bGm_2.volume(0.5 - (mouseY - height / 2) / height);
  }
}

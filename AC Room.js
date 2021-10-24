img="";
status="";

function preload()
{
    img = loadImage('https://www.acsisair.com.au/wp-content/uploads/2020/09/sizing-up-room-for-split-system-aircon.jpg');
}

function setup()
{
    canvas = createCanvas(600,450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
}

function draw()
{
    image(img, 0, 0, 600,500);
    fill("#FF0000");
    text('bed', 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}
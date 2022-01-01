function setup(){
yo=createCanvas(500,500);
yo.position(500,500);
camera=createCapture(VIDEO);
camera.hide();
andh="";
}
function draw(){
image( camera,0,0,500,500);
hi=rect(100,100,100,100)
}
function take_snapshot(){
    save("AG.png");
    }

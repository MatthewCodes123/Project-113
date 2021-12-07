function preload() {

}

function setup() {
canvas=createCanvas(640,480)
canvas.position(110,250)
video=createCapture(VIDEO)
video.hide()
}
    
function draw(e) {
image(video,200,120,250,240)
stroke(57,111,92)
fill(95,173,252)


circle(50,50,66)
rect(80, 40, 477, 20);
circle(50,430,66)
rect(80, 420, 477, 20);
circle(590,50,66)
rect(40, 80, 20, 320);
circle(590,430,66)
rect(580, 80, 20, 320);
}

function take_snapshot(e){
    save("Snapshot.png")
    }
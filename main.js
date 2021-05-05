song1="";
song2="";

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftWrist=0;
Score_of_leftWrist=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    pose=ml5.poseNet(video,modelLoaded);
    pose.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,500,500);

    if(Score_of_leftWrist > 0.2){
        fill("#FF0000");
        stroke("#FF0000");

        circle(leftWristX,leftWristY,20);

        song2.stop()
    }

    if(song1==false){
        song1.play()

        document.getElementById("song").innerHTML="Peter Pan Theme Song"
    }
    
}

function modelLoaded(){
    console.log("your Model Is Initiaized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

    }
}
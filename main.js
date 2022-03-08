function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 140);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotResults);
}


function modeLoaded() {
    console.log("Model is loaded");
}

function gotResults(results) {
    if (results.length > 0) {
        console.log(results);

        leftW_x = results[0].pose.leftWrist.x;
        rightW_x = results[0].pose.rightWrist.x;
        diffrance = floor(leftW_x - rightW_x);
        console.log(leftW_x);
        console.log(rightW_x);
        console.log(diffrance);
    }
}


function draw() {
    canvas.background('red');
    text('Text', 10, 10);
    textSize(diffrance);

}
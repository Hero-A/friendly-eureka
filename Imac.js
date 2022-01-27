function setup(){
    canvas = createCapture(400, 401);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
    image(img, 0, 0, 400, 401);
}

function preload(){
    img = loadImage('harry.jpeg');
}

function modelLoaded() {
    console.log("model loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
    }
}

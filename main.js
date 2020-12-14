Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
/*camera=document.getElementById("my_camera");*/

Webcam.attach("#my_camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="my_image" src="'+data_uri+'"/>';
    });
}
console.log('Ml5 Version',ml5.version);

classification=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iLzpReg4a/model.json",modelLoaded);

function modelLoaded(){
    console.log("The Model Is Loaded");
}

function anayse_snapshot(){
    img=document.getElementById("my_image");
    classification.classify(img,gotResult);    
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        document.getElementById("name").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
        console.log(result);
    }
}
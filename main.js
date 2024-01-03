Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
 console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifierhttps://teachablemachine.withgoogle.com/models/tS0Geerit/)

function modelLoaded(){
    console.log('model loaded!');
}

function speak(){
    var synth=window.SpeechSynthesis;
    speak_data_1="the first prediction is" + prediction_1;
    speak_data_2="and the second prediction is" + prediction_2;
    var uterThis=new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(uterThis);
}

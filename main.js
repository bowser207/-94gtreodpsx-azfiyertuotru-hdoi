function oisda()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BHxT1jZMj/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        rn_red = Math.floor(Math.random() * 255) + 1;
        rn_green = Math.floor(Math.random() * 255) + 1;
        rn_blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'We hear: '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy: '+ (results[0].confidence*100).toFixed(2)+" ⁒";
        document.getElementById("result_label").style.color = "rgb("+rn_red+", "+rn_green+", "+rn_blue+")";
        document.getElementById("result_confidence").style.color = "rgb("+rn_red+", "+rn_green+", "+rn_blue+")";

    }
}

    img = document.getElementById("animated_animal");

    if(results == "Bee buzz")
    {
        img.src = "bee.png";
    }
    else if(results == "Duck quack")
    {
        img.src = "duck.png";
    }
    else if(results == "Snake psss")
    {
        img.src = "snake.png";
    }
    else if(results == "Tiger roar")
    {
        img.src = "tiger.png";
    }
    else{
    img.src = "sound-icon.png";
    }
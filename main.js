https://teachablemachine.withgoogle.com/models/yX2sllCD8/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yX2sllCD8/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
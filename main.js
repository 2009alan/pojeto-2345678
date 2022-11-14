function startClassification() { 
    navigator.mediaDevices.getUserMedia({audio: true, video:false })
    classifier= ml5.soundClassifier
}


function modelReady (){
    classifier.classify(gotResults)      
     
 }
var gato=0
var  peixe =0
var casoro =0
var pato=0

function gotResults(error, results){
if(error){
console.error(error)
 }
else{
    console.log(results)
    random_number_r = Math.floor( Math.random ( )*255)+1
    random_number_g = Math.floor( Math.random ( )*255)+1
    random_number_b = Math.floor( Math.random ( )*255)+1
    document.getElementById("result_label" ).innerHTML="gat0_"


 }
 }

 































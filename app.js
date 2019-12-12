// call window object  speech recognition...
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();

var p = document.createElement("p");
var words = document.getElementById("words");
words.appendChild(p);
console.log(transcript);
}
recognition.addEventListener("result", (e) => {
    console.log(e.results);
    var transcript =[...e.results] 
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
    //.innerHTML = transcript;
if (e.results[0].isFinal){
    p =document.createElement("p");
    words.appendChild(p);
}); // this dome is used to listen voice and store in function e
recognition.addEventListener('end', recognition.start)
recognition.start(); // starting speech recognition...
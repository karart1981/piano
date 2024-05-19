/* sound of notes */ 
const doSound = new Audio("./tunes/1.wav");
const reSound = new Audio("./tunes/2.wav");
const miSound = new Audio("./tunes/3.wav");
const faSound = new Audio("./tunes/4.wav");
const solSound = new Audio("./tunes/5.wav");
const lyaSound = new Audio("./tunes/6.wav");
const siSound = new Audio("./tunes/7.wav");
const wrongSound = new Audio("./tunes/wrong.wav");
const successSound = new Audio("./tunes/success.wav");

/* id of header notes*/ 
const doSign = document.querySelector("#do");
const reSign = document.querySelector("#re");
const miSign = document.querySelector("#mi");
const faSign = document.querySelector("#fa");
const solSign = document.querySelector("#sol");
const lyaSign = document.querySelector("#lya");
const siSign = document.querySelector("#si");
const piano = document.querySelectorAll(".piano-keys .key");

/* id of piano notes*/ 
const doNote = document.querySelector("#doNote")
const reNote = document.querySelector("#reNote")
const miNote = document.querySelector("#miNote")
const faNote = document.querySelector("#faNote")
const solNote = document.querySelector("#solNote")
const lyaNote = document.querySelector("#lyaNote")
const siNote = document.querySelector("#siNote")
const playBtn = document.querySelector("#putAnote")

/* data of app*/ 
let notes = [
    { note: doNote, key: "1", sound: doSound, sign: doSign },
    { note: reNote, key: "2", sound: reSound, sign: reSign },
    { note: miNote, key: "3", sound: miSound, sign: miSign },
    { note: faNote, key: "4", sound: faSound, sign: faSign },
    { note: solNote, key: "5", sound: solSound, sign: solSign },
    { note: lyaNote, key: "6", sound: lyaSound, sign: lyaSign },
    { note: siNote, key: "7", sound: siSound, sign: siSign },
]

/* random number */
function grn(start, end) {
    return start + Math.floor(Math.random() * (end - start))
}

/* event of btn*/
let randomNote = []
playBtn.addEventListener("click", ()=> {
    notes.forEach(note => {
        note.sign.style.display = "none";
    });
    
    
    let temp = grn(0, notes.length);
    notes[temp].sound.play();
    notes[temp].sign.style.display = "block";
    randomNote.push(notes[temp]);

    addEventListener("keydown",(e)=>{
        if(randomNote.at(-1).key == e.key){
           document.body.style.background = "green";
           successSound.play();
           setTimeout(()=>{
            document.body.style.background = "#e3f2fd";
           },2000)
        } else{
            document.body.style.background = "red";
            wrongSound.play()
           setTimeout(()=>{
            document.body.style.background = "#e3f2fd";
           },2000)
        }
       
    })
    
})
      
    



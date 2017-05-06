/* 1. Schreibweise */
function run(){
    console.log("Hallo");
    console.log("Welt");
}

/* 2. Schreibweise - diese empfohlen!*/
let run = function(){
    console.log("Hallo");
    console.log("Welt");
}

/* Nun müssen wir die Funktionen aufrufen, oben haben wir bisher nur die Funktionen definiert was Sie tun sollen. Nun der Aufruf! */

run();
console.log("Nachricht nr. 3");
run();
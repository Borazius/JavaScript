/* Funktionen als Parameter übergeben */

"use strict"; 

/* Wir definieren 2 Funktionen und übergeben der ersten Funktion als Parameter eine Funktion. Nach diesem Verfahren arbeitet die setTimeout-Funktion. Dadurch Asynchronie ermöglicht */

let run = function (a) {
    console.log(a);
}

let f = function () {
    console.log("Funktion f wird ausgeführt!");
}

/* Nun müssen wir die Funktion aufrufen und zwar wie oben beschrieben übergben wir der ersten Funktion als Parameter eine andere Funktion.
mit run () rufen wir die erste Funktion auf und setzen als Parameter f, also die andere Funktion! */

run(f);

/* Andere Schreibweise */

let run = function (callback) {
    console.log(a);
    callback();
}

let f = function () {
    console.log("Funktion f wird ausgeführt!");
}
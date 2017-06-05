/* 
Problem: 
Manchmal benötigen wir mehrere if … else – Blöcke direkt hintereinander

Lösung: 
else if

In diesem Beispiel wollen wir die Einwohnerzahl ausgeben
 */


"use strict";

let getInhabitants = function (city) {
    if (city == "Berlin") {
        return 2500000;
    } else if (city == "Köln") {
        return 1000000;
    } else if (city == "München") {
        return 1500000;
    }
}


console.log(getInhabitants("Köln"));
console.log(getInhabitants("München"));
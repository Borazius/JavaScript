/* 
Problem: Manchmal möchten wir das Verhalten einer Schleife steuern

Beispiele:
1. „Überspringe einen bestimmten Eintrag“ (continue)
2. „Beende die Schleifenausführung“ (break)

break vs continue:
break: Beendet eine ganze Schleife
continue: Überspringt die aktuelle Schleife */


"use strict";

/* Break: Breache ab wenn eine Bedingung erfüllt ist */

let students = [
    "Bora", 
    "Sema", 
    "Hans", 
    "Didi"
];

/* For-Of-Schleife: Wir möchten eine Aktion für jedes Element in einem Array ausführen*/
for(let student of students){
    console.log(student);
    if (student == "Hans"){
        break;        // Abruch der Schleife nach dem der Array "Hans" durchlaufen wurde
        /* Ausgabei.d. Konsole: Bora, Sema, Hans */
    }
    
}


for(let student of students){
    if (student == "Hans"){
        continue;       // Überspringe diese Schleife bzw. Eintrag
    }
    console.log(student);
}
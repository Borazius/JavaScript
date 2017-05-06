/* Funktionwn definieren was beim Aufruf gemacht werden soll. Hier werden zwei Schreibweisen vorgestellt, beide funktionieren! Funktionen benötigen einen Namen damit sie auch aufgerufen werden können */

"use strict"; 

/* 1. Schreibweise */
/* Bedeutet: Wir erstellen eine Funktion namens run. Diese Funktion hat einen Namen und daher keine anonyme Funktion */
function run(){
    console.log("Hallo");
    console.log("Welt");
}

/* 2. Schreibweise - diese empfohlen!*/
/* Bedeutet: Wir erstellen eine Variable und weisen dieser einer Funktion zu. Diese Funktion hat im Vergleich zu oberen Schreibweise keinen Namen, daher auch anonyme Funktion genannt. Und diese Funktion wird einfach einer Variable zugewiesen und kann dann somit auch mit run() aufgerufen werden */
let run = function(){
    console.log("Hallo");
    console.log("Welt");
}

/* Nun müssen wir die Funktionen aufrufen, oben haben wir bisher nur die Funktionen definiert was Sie tun sollen. Nun der Aufruf! */

run();
console.log("Nachricht nr. 3");
run();
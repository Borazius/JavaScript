/* 
Problem: Bisher war der Programmablauf immer linear, also Programm von oben nach unten durchlaufen lassen.
Wir möchten aber auch Verzweigungen verwenden können
Beispiel: Führe eine Anweisung nur dann aus, wenn folgende Bedingung erfüllt ist.

Lösung: If- Abfragen

Code:

if(Bedingung){

    Anweisung
}
 */


"use strict";

let a = 5;


if (a < 10) { // If- Abfrage
    console.log("a ist kleiner als die Zahl 5"); // Falls Bedingung erfüllt, führe das aus
}

console.log("Fertig!")
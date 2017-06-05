/* 
Problem: 
Manchmal benötigen mehrere Bedingungen die erfüllt werden müssen, z.B. eine Zahl zwischen 10 und 20.
(Größer als 10, aber kleiner als 20). Dafür benötigen wir 2 Bedingungen:

x>10
x<20

Wie setzen wir das um? Hier kommen nun Booleans ins Spiel.
 */


"use strict";

let a = true;
let b = true;

// && -> bedeutet das beide Bedingungen erfüllt sein müssen!

if (a && b) {       // Diese Zeile bedeutet:  Wenn a UND b true sind, mache das und das
    console.log("a und b sind true und dieser Block wird ausgeführt"); // Falls Bedingung erfüllt, führe das aus
}
/* 
Problem: 
Manchmal benötigen mehrere Bedingungen die erfüllt werden müssen, z.B. eine Zahl zwischen 10 und 20.
(Größer als 10, aber kleiner als 20). Dafür benötigen wir 2 Bedingungen:

x>10
x<20

Wie setzen wir das um? Hier kommen nun Booleans ins Spiel.
 */


"use strict";

let x = 25;




// && -> bedeutet das beide Bedingungen erfüllt sein müssen!

if (x > 10 && x < 20) {     // UND*, Beide Bedingungen müssen erfüllt sein
   
    console.log("Zahl liegt zwischen 10 und 20");     // Falls Bedingung erfüllt, führe das aus
}


// || -> bedeutet oder, einer der Bedingeungen müssen erfüllt sein
if (x < 10 || x > 20) {     // ODER*, Einer der beiden Bedingungen müssen erfüllt sein
    
    console.log("Einer der beiden Bedingenungen wurden erfüllt");    
}
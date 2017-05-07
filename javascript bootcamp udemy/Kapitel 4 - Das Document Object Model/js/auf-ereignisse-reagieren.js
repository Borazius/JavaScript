/* (element.addEventListener) */
/* Wir wollen in diesem Beispiel auf ein Ereignis, z.B. (load, click....) reagieren! Wir wollen zum Beispiel auf ein Mausklick reagieren */

/* Ablauf:
1. Zuerst sprechen wir ein Element an, wir holen uns ein Element mit:

let a = document.getElementById();

2. Wir fügen diesem Element einen Event-Listener hinzu (hier "beim Klick"...)

element.addEventListener("click", function(){}, false);

die addEventListener-Methode hat drei Parameter:
1. "click" oder z.B. "load":
Wann soll etwas passieren!

2. Der zweite Parameter ist welcher Code/Funktion ausgeführt werden soll

*/

"use strict";


window.addEventListener("load", function (){
    // 1. Zuerst sprechen wir ein Element an, wir holen uns ein Element mit:
    let head = document.getElementById("headline");
    console.log(head);
    
    // 2. Wir fügen diesem Element einen Event-Listener hinzu (hier "beim Klick"...)
    let counter = 0;
    head.addEventListener("click", function (){
        counter = counter + 1;
        alert("Überschrift der ersten Box wurde wieviel mal angeklickt: " + counter)
    }, false);
    
}, false);


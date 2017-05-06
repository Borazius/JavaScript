/* Die setTimeout-Funktion ist eine typische Funktion in der als Parameter eine andere Funktion benutzt wird. Dadurch ermöglichen wir einen asynchronen Ablauf, sprich Prozesse verlaufen nicht nacheinander sondern zeitversetzt */ 

"use strict"; 

/* Die Parameter für setTimeout function,zeitlicher Wert in ms) */

/* Weitere wichtige asynchrone Funktionen:
setTimeout(func,t);
setInterval(func,t);
document.getElementByID("element").addEventListener(); // Sprich wenn ein bestimmtes Ereignis eintritt was auch zeitversetzt ist"
*/

setTimeout(function () {
    console.log("Die Funktion run soll nach 2 Sekunden ausgeführt werden!");
}, 2000);

setTimeout(function () {
    console.log("Die Funktion f soll nach 4 Sekunden ausgeführt werden!");
}, 4000);

console.log("Dieses Programm ist ein Beispiel für einen asynchronen Ablauf, das heißt nicht nacheinander sondern verschiedene Befehle werden erst nach einer bestimmten Zeit ausgeführt. Obwohl dieser Befehl ganz unten steht wird bei Programmstart das hier als erstes ausgeführt, da dieser Bereich auch bei Sekundenstand 0 erreicht ist und somit ausgeführt werden kann! Die folgenden setTimeout die danach folgen werden ausgeführt wenn wir bei 2 und 4 Sekunden angelangt sind! ");

/* Hier nochmal die zwei Funktion einzeln

let run = function () {
    console.log("Die run()-Funktion soll nach 2 Sekunden ausgeführt werden!");
}

let f = function () {
    console.log("Die Funktion f soll nach 4 Sekunden ausgeführt werden!");
}

*/
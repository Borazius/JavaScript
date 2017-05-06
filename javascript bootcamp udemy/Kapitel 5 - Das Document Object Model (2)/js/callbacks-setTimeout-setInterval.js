/*<!--Eine Rückruffunktion (engl. callback function) ist eine Funktion, die einer anderen Funktion als Parameter übergeben und von dieser erst später unter definierten Bedingungen mit definierten Argumenten aufgerufen wird.  -->*/

/* Weitere wichtige asynchrone Funktionen:
setTimeout(func,t);
setInterval(func,t);
document.getElementByID("element").addEventListener(); // Sprich wenn ein bestimmtes Ereignis eintritt, also z.B Klick auf ein Button, was ja auch zeitversetzt ist"
*/

"use strict"; 

// Führe nach 2 Sekunden diese Funktion aus!
setTimeout(function () {
    console.log("Die Funktion run soll nach 2 Sekunden ausgeführt werden!");
}, 2000);

// setIntervall(func,t) für "führe alle x Sekunden diese Funktion aus!
setInterval(function () {
    console.log("Die Funktion f soll alle 3 Sekunden nochmals ausgeführt werden!");
}, 3000);

console.log("Dieses Programm ist ein Beispiel für einen asynchronen Ablauf, das heißt nicht nacheinander sondern verschiedene Befehle werden erst nach einer bestimmten Zeit ausgeführt. Obwohl dieser Befehl ganz unten steht wird bei Programmstart das hier als erstes ausgeführt, da dieser Bereich auch bei Sekundenstand 0 erreicht ist und somit ausgeführt werden kann! Die folgenden setTimeout die danach folgen werden ausgeführt wenn wir bei 2 und 4 Sekunden angelangt sind! ");


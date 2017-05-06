/*die addListener-Funktion ist auch eine asynchrone Funktion! Das heißt im Parameter dieser Funktion haben wir eine Funktion / Callback ! */

/* 
addListener("load", func, false)- mache sobald was geladen wurde

addListener("click", func, false)- mache sobald was geklickt wurde
*/

"use strict";
// lade erst den addListener sobald Browserfenster komplett geladen wurde!
window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        console.log("Der erste Button wurde angeklickt!")
    }, false);
})
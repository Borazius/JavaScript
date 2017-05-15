/*toggle() fügt / entfernt je nach Zustand gewünscht CSS-Klasse*/

"use strict";

window.addEventListener("load", function () {

    let heading = document.getElementById("headline");
    heading.addEventListener("click", function () {
        let content = document.getElementById("inhalt");
        content.classList.toggle("hide");

    }, false);

}, false);
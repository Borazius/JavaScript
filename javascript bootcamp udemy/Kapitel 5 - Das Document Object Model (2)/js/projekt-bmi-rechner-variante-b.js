"use strict";
// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2
window.addEventListener("load", function () {

    // ich hol bzw spreche zunächst das Element an das ein Ereignis auslöst -> hier also der Button 
    let button = document.getElementById("calculate");
    // der Button geklickt wird soll folgende Funktion aufgerufen werden...
    button.addEventListener("click", function () {

        // zunächst sprechen wir die Textfeldeingaben an und sichern diese in Variablen
        let height = document.getElementById("height");
        let weight = document.getElementById("weight");
        // mit value holt man die Eingaben in Eingabefeldern!
        let bmi = weight.value / (height.value * height.value);

        alert("Dein BMI ist: " + bmi);

    }, false);
}, false); 


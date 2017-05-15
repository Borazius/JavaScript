"use strict";

window.addEventListener("load", function () {

    // ich hol bzw spreche zunächst das Element an das ein Ereignis auslöst -> hier also der Button 
    let button = document.getElementById("calculate");
    // der Button geklickt wird soll folgende Funktion aufgerufen werden...
    button.addEventListener("click", function () {

        // zunächst sprechen wir die Textfeldeingaben an und sichern diese in Variablen
        let height = document.getElementById("height");
        let weight = document.getElementById("weight");

        // Zwecks Testing in der Konsole
        // mit value holt man die Eingaben in Eingabefeldern!
        console.log(height.value);
        console.log(weight.value);





    }, false);


}, false); 


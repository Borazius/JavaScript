"use strict";
// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2
window.addEventListener("load", function () {

    // ich hol bzw spreche zunächst das Element an das ein Ereignis auslöst -> hier also der Button 
    let button = document.getElementById("calculate");
    // der Button geklickt wird soll folgende Funktion aufgerufen werden...
    button.addEventListener("click", function () {

        // zunächst sprechen wir die Textfeldeingaben an und sichern diese in Variablen
        let heightObj = document.getElementById("height");
        let weightObj = document.getElementById("weight");

        // Hier sichern wir ab das ungewünschte Eingaben erfolgen wie z.B Punkt statt Komma oder Eingabe von Zeichenketten in Eingabefeldern in der Zahlen erwartet werden
        // Die Eigenschaft value speichert den Wert, der in einem Formularelement eingegeben wurde bzw. diesem zugewiesen ist.
        // Wir erzwingen mit replace die gewünschte Eingabe (hier Punkt statt Komma
        // mit parseFloat-Methode werden Zeichenangaben in einer nummerischen Eingabefeld ignoriert und es wird eine Zahl ausgegeben und die dahinter folgenden Strings fallen weg!
        let height = parseFloat(heightObj.value.replace(",", "."));
        let weight = parseFloat(weightObj.value);
        let bmi = (weight / (height * height));

        alert("Dein BMI ist: " + bmi);

    }, false);
}, false);
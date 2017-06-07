"use strict";
// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2
window.addEventListener("load", function () {

    // ich hol bzw spreche zunächst das Element an das ein Ereignis auslöst -> hier also der Button 
    let button = document.getElementById("calculate");
    // der Button geklickt wird soll folgende Funktion aufgerufen werden...
    button.addEventListener("click", function () {

        // zunächst sprechen wir die Textfeldeingaben an und sichern diese in Variablen
        let groesseObj = document.getElementById("groesse");
        let gewichtObj = document.getElementById("gewicht");

        // Hier sichern wir ab das ungewünschte Eingaben erfolgen wie z.B Punkt statt Komma oder Eingabe von Zeichenketten in Eingabefeldern in der Zahlen erwartet werden
        // Die Eigenschaft value speichert den Wert, der in einem Formularelement eingegeben wurde bzw. diesem zugewiesen ist.
        // Wir erzwingen mit replace die gewünschte Eingabe (hier Punkt statt Komma
        // mit parseFloat-Methode werden Zeichenangaben in einer nummerischen Eingabefeld ignoriert und es wird eine Zahl ausgegeben und die dahinter folgenden Strings fallen weg!
        let groesse = parseFloat(groesseObj.value.replace(",", "."));
        let gewicht = parseFloat(gewichtObj.value);
        let bmi = (gewicht / (groesse * groesse));

        // Math.round (bmi * 100) / 100
        // für zwei Stellen nach Komma
        // Für eine Stelle nach Komma statt ... * 100 / 100 -> * 10 / 10
        let erg = document.getElementById("result")
        erg.innerHTML = Math.round(bmi * 100) / 100;
        /* oder kurz:
        document.getElementById("result").innerHTML = change + " %";
        */
        document.getElementById("untergewicht").style.display = "none";
        document.getElementById("normalgewicht").style.display = "none";
        document.getElementById("übergewicht").style.display = "none";
        document.getElementById("link-wiki").style.display = "none";

        if (bmi < 18.5) {
            document.getElementById("untergewicht").style.display = "block";
            document.getElementById("link-wiki").style.display = "block";
        } else if (bmi > 18.5 && bmi < 25) {
            document.getElementById("normalgewicht").style.display = "block";
            document.getElementById("link-wiki").style.display = "block";
        } else {
            document.getElementById("übergewicht").style.display = "block";
            document.getElementById("link-wiki").style.display = "block";
        }
    }, false);
}, false);
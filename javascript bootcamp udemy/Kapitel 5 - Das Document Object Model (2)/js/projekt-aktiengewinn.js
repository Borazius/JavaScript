"use strict";
// Formel: Veränderung berechnen:
// Veränderung = (Aktienkurs Jetzt / Aktienkurs Start) * 100 - 100
window.addEventListener("load", function () {

    // ich hol bzw spreche zunächst das Element an das ein Ereignis auslöst -> hier also der Button 
    let button = document.getElementById("calculate");
    // der Button geklickt wird soll folgende Funktion aufgerufen werden...
    button.addEventListener("click", function () {

        // zunächst sprechen wir die Textfeldeingaben an und sichern diese in Variablen
        let startObj = document.getElementById("start");
        let nowObj = document.getElementById("now");

        // Hier sichern wir ab das ungewünschte Eingaben erfolgen wie z.B Punkt statt Komma oder Eingabe von Zeichenketten in Eingabefeldern in der Zahlen erwartet werden
        // Die Eigenschaft value speichert den Wert, der in einem Formularelement eingegeben wurde bzw. diesem zugewiesen ist.
        // Wir erzwingen mit replace die gewünschte Eingabe (hier Punkt statt Komma
        // mit parseFloat-Methode werden Zeichenangaben in einer nummerischen Eingabefeld ignoriert und es wird eine Zahl ausgegeben und die dahinter folgenden Strings fallen weg!
        let start = parseFloat(startObj.value.replace(",", "."));
        let now = parseFloat(nowObj.value);
        // Veränderung = (Aktienkurs Jetzt / Aktienkurs Start) * 100 - 100
        let change = (now / start) * 100 - 100;

        // Math.round (change * 100) / 100
        // für zwei Stellen nach Komma
        // Für eine Stelle nach Komma statt ... * 100 / 100 -> * 10 / 10

        let erg = document.getElementById("result")
        erg.innerHTML = Math.round(change * 100) / 100 + " %";
  
        if (change < 0){
            document.getElementById("result").style.backgroundColor = "#ff5e5e";
           
        } else if (change == 0){
            document.getElementById("result").style.backgroundColor = "orange";
        }

        /* oder kurz:
        document.getElementById("result").innerHTML = change + " %";
        
        */

    }, false);
}, false);
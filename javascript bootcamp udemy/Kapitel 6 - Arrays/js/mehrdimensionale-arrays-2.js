/*
Problem: Manchmal reicht ein Array nicht aus. Wir hatten im vorherigem Beispiel mit persons-Array, 
die alle im selben Kurs teilnehmen. Was aber wenn es mehrere Kurse gibt und wir alle Personen je Kurs aufnehmen wollen?

Lösung: Arrays von Arrays
}
*/

"use strict";

window.addEventListener("load", function () {

    // Wir definieren den Array

    let persons = [             //erste eckige Klammer
        ["Bora", "Hans"],       //zweite eckige Klammer deutet auf mehrdimensionalen Array // Diese zwei Personen sind im ersten Kurs
        ["Robert", "Xavier"]    //zweite mehrdimensionalen Array // Diese zwei Personen sind im zweiten Kurs
    ];
    
    for (let course of persons){            // zunächst geht man alle einzelne Arrays durch, also hier erstes Array:  ["Bora", "Hans"]
        for (let user of course){           // nun kann ich in den jeweiligen Arrays und alle user einzeln ermitteln
            console.log(user);
        }         
    }

}, false);
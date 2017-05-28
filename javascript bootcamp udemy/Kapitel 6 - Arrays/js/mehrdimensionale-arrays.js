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

    console.log(persons[0]);    // wir greifen zunächst auf das erste mehrdimensionale Array zu
    console.log(persons[0][0]); // wir greifen auf das erste Array des mehrdimensionalen Arrays zu -> Ausgabe hier dann: "Bora"
    console.log(persons);

}, false);
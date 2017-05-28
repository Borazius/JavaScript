/* Arrays: Was tun wenn wir von vorab nicht wissen, wie viele Personen zu speichern sind
Lösung ist die wir speichern die Personen in einer Liste, den sogenannten Arrays
Dank Arrays können wir nachträglich noch weitere Personen speichern -->
Code-Beispiel:     let persons = ["Paula", "Frank", "Thomas", "Markus"]   */

/* Arrays brauchen wir wenn wir eine unbekannte Anzahl von Variablen eines Typs, z.B. Personen, speichern wollen. Meistens wissen wir vorher nicht wieviele Personen z.B. gespeichert werden müssen -> Anzahl der Variablen unbekannt! */


"use strict";

window.addEventListener("load", function () {
    
    // Wir speichern die Personen in einer Liste (Array) 
    // auch so: let persons = ["Sema", "Bora"];
    let persons = [
        "Sema",
        "Bora",
        "Ralf",
        "Jan"
    ];
    
    //Zwischenergebnis
    console.log(persons);

    // Wir fügen der Liste / Array eine weitere Person hinzu
    persons.push("Otto");
    console.log(persons);
    
    // Überlegung: Später via Eingabefelder neue Personen hinzufügen
    let neueTeilnehmer = "Frank";
    persons.push(neueTeilnehmer);
}, false);
/*
Problem: Wir möchten eine Aktion für jedes Element in einem Array ausführen.
So geht es nicht, denn wir wissen ja außerdem nicht wie groß unser Array ist:
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

Lösung: Schleife
Hey JavaScript, wiederhole doch einfach ein Befehl und führe diese für jedes Element / Array aus

Beispiel: 
for (let element of array){
    console.log(element);
}
*/


"use strict";

window.addEventListener("load", function () {

    // Wir definieren den Array

    let persons = [
        "Bora",
        "Hans",
        "Robert",
        "xavier"
    ];

    let output = "In unserem Kurs sind folgende Teilnehmer: ";

    // persons ist hier das Array
    // Ich sage hier: Gehe das Array "persons" durch und sichere jedes Element als Variable "person" und zwar für jedes Array

    for (let person of persons) {
        // jedes Zwischenrgebnis hier für "output" landet und überschreibt wieder oben in der Variablendefinition "let output"
        output = output + "\n" + person + ","; // dieser Block wird solange wiederholt soviele Elemente es hier gibt ---> also hier 4 mal!
    }
    console.log(output);

}, false);
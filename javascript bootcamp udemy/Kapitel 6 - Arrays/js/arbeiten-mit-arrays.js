/* In diesem Beispiel erstellen wir eine Liste / Array und fügen dieser Liste Elemente hinzu oder entfernen welche*/

"use strict";

window.addEventListener("load", function () {
    
    // Wir definieren den Array
    
    let persons = [
        "Bora",
        "Hans",
        "Robert"
    ];
    
    // Ausgabe in der Konsole: Anzahl der Arrays, hier Personen
    // Ausgabe in der Konsole ---> "3"
    console.log(persons.length);
    

    // Wir greifen auf das 3. Array zu und geben diese i.d. Konsole aus
    // Ausgabe i.d. Konsole ---> "Robert"
    console.log(persons[2]);
    
    // Wir fügen am Ende der Liste / Array eine weitere Person / Element hinzu:
    persons.push("Karl");   
    // Wir fügen am Anfang der Liste / Array eine weitere Person / Element hinzu:
    persons.push("Andy");
    
    console.log(persons);
    
    // Wir entfernen das erste Element am Anfang der Liste / Array, hier "Bora"
    // Die shift()-Methode gibt einen Wert zurück!
    persons.shift();
    console.log(persons);
    // In diesem Beispiel wird das erste Element in der Liste entfernt und als Wert zurückgegeben
    let removedPersons = persons.shift();
    console.log(removedPersons);
    
    // Kombinationen sind möglich
    // alert("In den Kurs sind " + persons.length + " Teilnehmer");

     

}, false);


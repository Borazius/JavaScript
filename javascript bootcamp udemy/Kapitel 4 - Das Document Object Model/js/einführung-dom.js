/* Wir möchten nicht nur irgendwelche Programme schreiben, sondern wir greifen auf den gerade aktivierten Seiteninhalt zu. Und das können wir mit dem DOM (Document Object Model) 
DOM steht nur in einem Browser zur Verügung! Wenn wir also z.B. JavaScript auf einem Server programmierne möchten, z.B. mit Node JS, da haben wir keinen Browser und HTML-Code, wir können also JavaScript programmieren, aber die DOM-Schicht fällt im NodeJS weg. */
/* 
Der Browser stellt uns für den Zugriff auf DOM zwei Variablen bereit:
a.) document  und
b.) window 
Diese Variablen stellen Eigenschaften und Methoden zur Verfügung
*/

"use strict";

//in der Konsole kann ich dadurch sehen welche Eigenschaften document hat. Mit "document.(Punkt)"-Eingabe erscheint eine Auswahlliste der Eigenschaften der Variable/Objekt "document" -> z.b. document.bgcolor. So kann man z.b. mit "document.bgColor = "darkblue"" direkt zugreifen!
// ich kann z.B in der Console eingeben "document.location.href ="www.google.de" " oder z.B."document bgColor =red"; dann wird das auch ausgeführt
console.log(document);
   
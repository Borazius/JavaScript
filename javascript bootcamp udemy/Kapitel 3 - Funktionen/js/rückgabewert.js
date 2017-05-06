"use strict"; 

/* Rückgabewerte mithilfe von return ermöglichen das Ergebnisse einer Funktion weiter verwendet werden können, z.B. für eine Berechnung */

/* Unsere Funktion heißt run */
let run = function(x,y) {
    x = x * 5;
    return x + y 
    alert("lorem"); //nach Return-Befehl springt es aus dem Code-Block, alle Efehle danach werden ignoriert!
    
    /*Das return sorgt dafür das das Ergebnis von a + b an die Stelle weitergeleitet wird in der die Funktions aufgerufen wird, also run(2,5) wird durch das Ergebnis ersetzt! */
}

/*Hier rufe ich die Funktion auf mit run(2,5) auf und weise das Ergebnis einer Variable namens result zu. Somit ist der Wert Dank einer Variable gespeichert und kann weiter verwendet werden! */
let result = run(2,5);
console.log(result);
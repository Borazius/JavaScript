/*
Problem: Manchmal möchten wir, das ein Codeblock wiederholt ausgeführt wird

Lösung: 
Dazu gibt es zwei verschiedene Schlefen die genutzt werden können:

1. For-Schleife: Hier wissen wir vorab, wie oft die Schleife Schleife wiederholt wird, z.B. 10 mal!

2. While-Schleife: Hier wissen wir im Gegensatz zur For-Schleife nicht, wie oft ein Codeblock wiederholt werden soll,
z.B. erst wenn eine bestimmte Bedingung erfüllt ist!

 */


"use strict";

/* For-Schleife */

/* 1. Startwertt, 2.Endwert, 3. Mit nächstem Schritt soll Wert x um wieviel erhöht werden */
for(let x = 0; x<=10; x++){       // x++ ist die Kurfform für x=x+1
    console.log(x);               // Ausgabe der Zahlen 0 bis 10      
}

for(let a = 0; a<=5; a+=2){       // a+=2 hier ist die Kurfform für a=a+2
    console.log(a);               // Ausgabe der Zahlen 0,2 und die 4   
}

/* While-Schleife */
// While-Schleife läuft solange, solange bis eine Bedingung erfüllt ist

let b = 0;
while (b<20){
    console.log(b);
    b++;                            // b=b+1;
}

"use strict";

let a = 15;

if (a < 15) { // kleiner als
    console.log("kleiner als 15");
}

if (a <= 15) { // kleiner gleich
    console.log("kleiner gleich 15");
}

if (a > 15) { // größer als
    console.log("größer als 15");
}

if (a >= 15) { // größer gleich
    console.log("größer gleich 15");
}

if (a == 15) { // gleich gleich, d.h. ist 15 exakt 15 (true or false), schlicht = ist nur eine Zuweisung
    console.log("größer gleich 15");
}

/* Geht nicht: 
if (a = 15) {                       // weise a dem Wert 15 zu
    console.log("größer gleich 15");
}*/

if (!(a < 15)){ // wenn NICHT: (a <15), a;
}

let persons = ["Robert", "Eva", "Bora", "Sema"];
/* mit der Methode indexOf() frage ich ab ob ein Element in einem Array existiert. 
Falls ja wird die Zahl / der Wert ausgegeben an welcher Stelle des Array-Indexs gesichert ist
*/
console.log(persons.indexOf("Bora"));
// Falls ein Element nicht existiert wird der Wert "-1" zurükgegeben! 
console.log(persons.indexOf("Müller"));

/* Was ich also z.B. machen kann: Abfragen ob eine Person existiert und falls nicht führe das und das aus */

if(persons.indexOf("Markus") == -1){
    console.log("Markus existiert nicht im Array")
}

/* Falls eine Person vorhanden tue das und das, hier wenn der Wert nicht -1 ist! */
if (persons.indexOf("Sema") != -1){
    console.log(persons.indexOf("Sema")); // wird 3 ausgegeben weil Sema an vierter Stelle liegt und die erste Zahl bei 0 beginnt
    console.log("Sema exstiert im Array"); // wird ausgegeben da -1 nicht gegeben ist und -1 bedeutet "es existiert nicht"
    
}
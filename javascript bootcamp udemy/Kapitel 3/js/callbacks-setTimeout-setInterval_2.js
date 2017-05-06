/* Eine Rückruffunktion (engl. callback function) ist eine Funktion, die einer anderen Funktion als Parameter übergeben und von dieser erst später unter definierten Bedingungen mit definierten Argumenten aufgerufen wird. */

"use strict";
// wir müssen den Counter außerhalb der Funktion setzen, da sie wenn sie innerhalb der Funktion wäre, jedesmal bei neuem Aufruf die Variable counter neu erstellen und somit immer bei 0 beginnen würde. Jedesmal wenn die Funktion aufgerufen wird wird der counter - Variable um 1 erhöht!
let counter = 0;

// setIntervall(func,t) für "führe alle x Sekunden diese Funktion aus!
setInterval(function () {
    counter = counter +1;
    console.log(counter);
}, 3000);


/* Fügen wir den Counter stattdessen innerhalb der Funktion des Parameters bgeinnt bei jedem Aufruf der Counter immer bei dem Wert 0 */

/* Code-Beispiel:
setInterval(function () {
    let counter = 0;
    counter = counter +1;
    console.log("Die Funktion f soll alle 3 Sekunden nochmals ausgeführt werden!");
}, 3000);

*/
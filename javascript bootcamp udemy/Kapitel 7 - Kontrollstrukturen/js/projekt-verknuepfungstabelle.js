/* Projekt-Beispiel: Verknüpfungstabelle */


"use strict";

let tbodyAnd = document.getElementById("und").children[1]; // Wir greifen auf das erste Element vom table "und" daher children [1]. Erklärung siehe unten.


/* In der Konsole nach der Ausgabe folgendes eingeben:
Eingabe:
table.children

Ausgabe:
2) [thead, tbody]length: 2
0: thead
1: tbody
__proto__: HTMLCollection

Eingabe:
table.children[0];    /Wir greifen auf das erste Element zu

Ausgabe:
<thead>..</thead>

Eingabe:
table.children[1];    /Wir greifen auf das erste Element zu

Ausgabe:
<tbody>..</tbody>   /Wir wollen in die tbody Daten integrieren also nutzen wir das tbody als Variable s.o. Zeile 6
 */

// Wir definieren hier Arrays damit wir For of -Schleifen nutzen können
let aValues = [true, false];
let bValues = [true, false];

// Wir bauen eine Schleife ein
// geh doch bitte alle Arrays durch und speichere diese Werte als aWerte


for(let a of aValues) {
    for(let b of bValues) {
        let tr = document.createElement("tr");

        let td0 = document.createElement("td");
        td0.innerHTML = a;

        let td1 = document.createElement("td");
        td1.innerHTML = b;

        let td2 = document.createElement("td");
        td2.innerHTML = (a && b);

        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);

        tbodyAnd.appendChild(tr);
    }
}
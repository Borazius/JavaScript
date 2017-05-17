/*
Programmierübungung Klickzähler!
In dieser Übung programmierst du einen Klickzähler!
Gegeben: Es gibt 2 Elemente:

- Einen Button (ID: button)
- Einen Absatz, in dem der aktuelle Zählstand angezeigt wird (ID: counter).

Aufgabe: Vervollständige die index.js - Datei so, dass folgendes Programm ausgeführt wird:

Wenn das Programm geladen wird, soll im Counter der Wert 0 stehen (setze diesen Wert per JavaScript!)
Mit jedem Klick auf den Button soll der Counter um 1 höher zählen
*/
"use strict";

window.addEventListener("load", function () {
    let button = document.getElementById("button");
    let counter = 0;
    button.addEventListener("click", function () {
        counter = counter + 1;
        document.getElementById("counter").innerHTML = counter;
    });
});
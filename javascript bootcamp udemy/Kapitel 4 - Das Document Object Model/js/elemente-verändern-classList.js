/* Wir wollen in diesem Beispiel zeigen wie wir nur bestimmten Klasse eines Elements mit mehreren Klassen durch eine neuen Klassenname überschrieben werden kann 

element.innerHTML: Damit können wir auf den HTML-Code zugreifen!
element.innerText: Damit können wir auf den Text-Inhalt zugreifen!
element.className / element.classList: Zugriff auf die CSS-Klassen 
element.style: Zugriff auf die CSS-Attribute */

/* Auchtung: element entspricht entweder id-name oder ein html element wie z.B. h1 */

/* mit "classList remove / add" */

"use strict";

window.addEventListener("load", function () {
    // Zugriff auf Element und speichern als Variable
    let variable = document.getElementById("headline");

    variable.addEventListener("click", function () {
        let panel = document.getElementById("das-zu-ändernde-element");
        // zwecks Test: damit rufe ich i.d Console die Liste der Klassen des angesprochenen Elements aus
        // Ergebnis in der Console: Liste der Klassen, jede Klasse kann mit einer Zahl angesprochen werden
        console.log(panel.classList);

        // wir entfernen eine bestimmte Klasse namens "panel-default"
        // Wir sprechen das Element "panel" an und wenden die Methode classList.remove()-Methode an
        panel.classList.remove("panel-default");

        // Wir sprechen das Element "panel" an und fügen ihr eine weitere Klasse zu
        panel.classList.add("panel-danger");

        // Wir sprechen das Element "panel" an und entfernen ihr die Klasse "xyz"
        panel.classList.remove("xyz");


    }, false);



}, false);
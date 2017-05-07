/* Problem: Wir wollen ein existierendes Element in der DOM verändern, z.B. "Überschrift-Titel soll sich verändern". Wie schreiben wir also Daten in das DOM?
Mit:
element.innerHTML: Damit können wir auf den HTML-Code zugreifen!
element.innerText: Damit können wir auf den Text-Inhalt zugreifen!
element.className / element.classList: Zugriff auf die CSS-Klassen 
element.style: Zugriff auf die CSS-Attribute */

/* Auchtung: element entspricht entweder id-name oder ein html element wie z.B. h1 */

"use strict";

window.addEventListener("load", function (){
    let überschrift = document.getElementById("headline");
    // mit innerHTML sprechen wir alles was innerhalb eines Html-Elements existiert an, auch gesammten und folgenden HTML-Code innerhalb eines Elements 
    console.log(überschrift.innerHTML);
    
    

    // mit innerHTML kann ich auch schreiben, hier ändere ich die Überschrift!
    überschrift.innerHTML = "Das ist die neue Überschrift!";
    
    let counter = 0;
    überschrift.addEventListener("click", function(){
        counter = counter + 1;
        // was für ein HTML-Block innerhalb eines HTML_Elements erscheinen soll
        // Wir sprechen ein Element an und wenden die Methode innerHTML an
        überschrift.innerHTML = "<strong>Neue Überschrift nach Klick Nr." + counter + "</strong>";
        // innerText für Inhalte, sichere Methode als innerHTML
        // überschrift.innerHTML = ""
    }, false);
  

}, false);


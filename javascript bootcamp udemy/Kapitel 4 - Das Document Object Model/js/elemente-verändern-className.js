/* Wir wollen in diesem Beispiel zeigen wie die kompletten Klassenname eines Elements mit einer neuen Klassenname überschrieben werden kann

element.innerHTML: Damit können wir auf den HTML-Code zugreifen!
element.innerText: Damit können wir auf den Text-Inhalt zugreifen!
element.className / element.classList: Zugriff auf die CSS-Klassen 
element.style: Zugriff auf die CSS-Attribute */

/* Auchtung: element entspricht entweder id-name oder ein html element wie z.B. h1 */

"use strict";

window.addEventListener("load", function (){
    // Zugriff auf Element und speichern als Variable
    let variable = document.getElementById("headline");
   
    variable.addEventListener("click", function(){
        let panel = document.getElementById("das-zu-ändernde-element");
        // zwecks Test: damit rufe ich i.d Console den Klassennamen des angesprochenen Elements an
        // Ergebnis in der Console: "panel panel-default"
        console.log(panel.className);
        
        // so überschreiben wir einen Klasse mit einem neuen Klassenaname
        // mit className wird der komplette Klassenname eines Elements ersetzt, auch wenn diese aus mehreren Klassen besteht, z.B class="xyz panel panel-default" wird zu classname="panel panel-danger"
        panel.className = "panel panel-danger";
      
        

    }, false);








}, false);


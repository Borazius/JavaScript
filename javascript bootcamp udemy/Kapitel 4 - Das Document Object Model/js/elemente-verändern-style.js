/* In diesem Beispiel wollen wir den Style eines Elements ändern

element.innerHTML: Damit können wir auf den HTML-Code zugreifen!
element.innerText: Damit können wir auf den Text-Inhalt zugreifen!
element.className / element.classList: Zugriff auf die CSS-Klassen 
element.style: Zugriff auf die CSS-Attribute */

/* Auchtung: element entspricht entweder id-name oder ein html element wie z.B. h1 */

"use strict";

window.addEventListener("load", function (){
    // Zugriff auf Element und speichern als Variable
    let variable = document.getElementById("headline");
    // damit sehe ich welche CSS-Eigenschaften eines Elements angesprochen werden können
    console.log(variable.style);
    
    variable.addEventListener("click", function(){
        // wir ändern die Farbe des ausgewählten Elements, hier headline in Farbe rot
        // Wir sprechen das Element an und wenden die Methode style an
        variable.style.color = "red";
        // Achtung - Minuszeichen interpretiert JS falsch daher statt border-top -> borderTop
        variable.style.borderTopColor = "green";
        
    }, false);
    
    

    
    
    


}, false);


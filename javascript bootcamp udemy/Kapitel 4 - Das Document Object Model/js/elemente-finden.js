/* Wir wollen in diesem Beispiel zeigen wie man Elemente in einem HTML-DOM-Baum findet und anspricht */

/*Es gibt:
document.children
document.getElementById("id") 
document.getElementsByClassName("klassenname") document.getElementByTagName("tag") 

*/

/* Wir können z.B. i.d. Console "document.children" eingeben --> [html] wird ausgegeben weil dieser direktes Kindelement von document ist */


"use strict";

window.addEventListener("load", function () {
    // wir greifen auf das Element mit der id "headline" zu und speichern diese in eine Variable h, damit wir diese wiederverwenden können

    let h = document.getElementById("headline");
    
    console.log(h);

    // wir greifen nun auf alle h3-Elemente
    let h3s= document.getElementsByTagName("h3");
    
    console.log(h3s);
    
    // wir greifen nun auf "alert-success"- Klassen zu und speichern diese in Variable as
    
    let as = document.getElementsByClassName("alert-success");
    console.log(as);
    
}, false);
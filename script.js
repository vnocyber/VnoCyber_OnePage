const text = `
Security assessment completed.

A vulnerability was identified and successfully resolved in the controlled testing environment.

This page is a demonstration of controlled security testing.
Showing the importance of strong protection, proper configuration, and continuous monitoring.
`;

let index = 0;

const typing = document.getElementById("typing");


function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,25);

    }

}


typeWriter();



/* random terminal flicker */

setInterval(()=>{

    document.querySelector(".security-box")
    .style.opacity = Math.random() > 0.97 ? "0.8" : "1";

},200);

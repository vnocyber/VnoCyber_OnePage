const text = `
> Security review initiated...

> Analyzing system configuration...

> Multiple security weaknesses detected.

> Reviewing protection measures...

> Security recommendations generated.

> Continuous monitoring is required.

> Assessment completed.
`;

let index = 0;

const typingElement = document.getElementById("typing");


function typeEffect(){

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 35);

    }

}



typeEffect();





// Cursor terminal effect

const cursor = document.createElement("span");

cursor.innerHTML = "_";

cursor.style.animation = "blink 0.8s infinite";

typingElement.appendChild(cursor);



const style = document.createElement("style");

style.innerHTML = `

@keyframes blink {

    50% {

        opacity:0;

    }

}

`;

document.head.appendChild(style);

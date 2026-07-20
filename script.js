const container = document.querySelector(".code-background");


const codes = [

"010101 8472 0011",

"VX-4928 SYSTEM",

"1010 7741 SECURITY",

"0xF92A ACCESS",

"CYBER NODE 2048",

"ENCRYPTED DATA",

"SYSTEM CHECK OK",

"SECURITY PROTOCOL",

"NETWORK STATUS"

];



function createCode(){


const text = document.createElement("span");


text.innerText =
codes[Math.floor(Math.random()*codes.length)];



text.style.left =
Math.random()*90+"%";



text.style.animationDuration =
(15 + Math.random()*15)+"s";



text.style.fontSize =
(14 + Math.random()*8)+"px";



container.appendChild(text);



setTimeout(()=>{

text.remove();

},30000);


}




setInterval(()=>{


createCode();


},5000);

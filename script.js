const background = document.querySelector(".code-background");


const codes = [

"VnoCyber H-X",

"ЦИФРОВАЯ ЛИЧНОСТЬ",

"SYSTEM ONLINE",

"CYBER IDENTITY",

"DATA STREAM",

"SECURITY CORE",

"01010101",

"ENCRYPTED NODE",

"TECHNOLOGY"

];



function createCode(){


const code=document.createElement("span");



code.innerText =
codes[Math.floor(Math.random()*codes.length)];



code.style.left =
Math.random()*95+"%";



code.style.animationDuration =
(15 + Math.random()*15)+"s";



code.style.fontSize =
(12 + Math.random()*10)+"px";



background.appendChild(code);



setTimeout(()=>{

code.remove();

},30000);


}



setInterval(createCode,5000);

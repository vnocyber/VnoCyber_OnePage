const background = document.querySelector(".code-background");


const codes = [

"010101 SYSTEM",

"0x00FF41 ACCESS",

"CYBER NODE 2048",

"ENCRYPTED DATA",

"SECURITY PROTOCOL",

"SYSTEM CHECK OK",

"NETWORK STATUS",

"0011 8892",

"VNOSEC CORE"

];



function createCode(){


const span = document.createElement("span");


span.innerText =
codes[Math.floor(Math.random()*codes.length)];



span.style.left =
Math.random()*95+"%";



span.style.animationDuration =
(15 + Math.random()*15)+"s";



span.style.fontSize =
(12 + Math.random()*10)+"px";



background.appendChild(span);



setTimeout(()=>{

span.remove();

},30000);


}



setInterval(createCode,5000);

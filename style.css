*{

margin:0;
padding:0;
box-sizing:border-box;
font-family:"Courier New", monospace;

}


body{

min-height:100vh;

background:

radial-gradient(circle at top,#003b1f,#000000 65%);

color:white;

overflow:hidden;

}



.scan{

position:fixed;

inset:0;

background:

linear-gradient(
transparent 50%,
rgba(0,255,65,.05) 50%
);


background-size:100% 5px;

pointer-events:none;

z-index:1;

}




.container{

width:100%;

min-height:100vh;

display:flex;

justify-content:center;

align-items:center;

padding:30px;

}





.alert-box{


width:100%;

min-height:100vh;


background:transparent;


display:flex;

flex-direction:column;

justify-content:center;

align-items:center;


text-align:center;


padding:50px;


position:relative;


z-index:2;


}





.profile img{


width:260px;

height:260px;


object-fit:cover;


border-radius:20px;


border:3px solid #00ff41;


box-shadow:

0 0 35px #00ff41;


}





.profile-info{

margin-top:20px;

}



.profile-info h3{

color:#00ff41;

letter-spacing:5px;

font-size:15px;

}



.profile-info p{

color:#00ff41;

font-size:20px;

margin-top:10px;

}





.glitch{


font-size:55px;


color:#00ff41;


position:relative;


margin:30px 0;


text-shadow:

0 0 20px #00ff41;


}




.glitch::before,
.glitch::after{


content:attr(data-text);


position:absolute;


left:0;


width:100%;


}



.glitch::before{


color:white;


transform:translate(-3px);


animation:g1 1s infinite;


}



.glitch::after{


color:#00ff41;


transform:translate(3px);


animation:g2 1s infinite;


}




@keyframes g1{


50%{

clip-path:inset(40% 0 20% 0);

}


}




@keyframes g2{


50%{

clip-path:inset(10% 0 60% 0);

}


}





h2{


color:#00ff41;


letter-spacing:6px;


margin-bottom:30px;


}





.terminal{


background:rgba(0,0,0,.8);


border:1px solid #00ff41;


padding:25px;


width:90%;


max-width:800px;


text-align:left;


line-height:2;


color:#00ff41;


border-radius:10px;


box-shadow:


inset 0 0 25px rgba(0,255,65,.2);


margin-bottom:30px;


}





.content{


max-width:900px;


font-size:18px;


line-height:2;


color:#d8ffd8;


}



.content h3{


color:#00ff41;


margin-top:25px;


}



.content ul{


margin:15px 0;


list-style-position:inside;


}




footer{


margin-top:35px;


color:#00ff41;


letter-spacing:3px;


}




/* kode abstrak */


.code-background{


position:fixed;


inset:0;


overflow:hidden;


z-index:0;


}





.code-background span{


position:absolute;


top:-50px;


color:rgba(0,255,65,.25);


animation:fall linear forwards;


}





@keyframes fall{


from{

transform:translateY(-100px);

opacity:0;

}


20%{

opacity:1;

}


to{

transform:translateY(110vh);

opacity:0;

}


}





@media(max-width:700px){


.profile img{

width:180px;

height:180px;

}



.glitch{

font-size:30px;

}



.content{

font-size:14px;

}



.terminal{

font-size:13px;

}


}

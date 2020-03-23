var header=document.getElementById('header');
var a=0; 
function lurp(){
   header.style.transform='rotateX('+a+'deg)';
    a+=8;
    a=a%360;
    if((0<=a && a<=90) || (270<= a &&a<360)){
        header.className = 'face';
    }else{
        header.className = 'back';
    }
}
header.style.colore='red';
setInterval(lurp,50);

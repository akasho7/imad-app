console.log('Loaded!');
// change element from the console
 var element=document.getElementById('main_text');
 element.innerHTML = 'iam welcome you';
 
 // to move the image on clicking
 var img=document.getElementById('mady');
 var marginleft=0;
 function moveRight(){
     marginleft=marginleft+10;
     mady.style.marginleft=marginleft+'px';
 }
 mady.onclick=function()
 {
     var interval=setInterval(moveRight,100);
 }
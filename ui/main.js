console.log('Loaded!');
// change element from the console
 var element=document.getElementById('main_text');
 element.innerHTML = 'iam welcome you';
 
 // to move the image on clicking
 var img=document.getElementById('mady');
 var marginLeft= 0;
 function moveRight(){
     marginLeft = marginLeft + 1;
     img.style.marginLeft = marginLeft + 'px';
 }
 mady.onclick=function()
 {
     var interval=setInterval(moveRight,50);
 }
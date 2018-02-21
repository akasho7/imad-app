console.log('Loaded!');
// change element from the console
 var element=document.getElementById('main_text');
 element.innerHTML = 'iam welcome you';
 
 // to move the image on clicking
 var img=document.getElementById('mady');
 mady.onclick=function()
 {
     var interval=setInterval(moveRidht,100);
 }
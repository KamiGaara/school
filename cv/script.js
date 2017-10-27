
function loopImage(){
   
    var pic = document.getElementById("icon");
    var images = ['inori/1', 'inori/2', 'inori/3', 'inori/4' ];
    var pictureToDisplay = images[Math.floor(Math.random() * images.length)];
     pic.onclick = function(){
         pic.src = pictureToDisplay + '.png';
     }

}
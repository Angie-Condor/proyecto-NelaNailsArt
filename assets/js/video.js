var video = document.getElementById("video_container");
var enlace = document.getElementById("videoEnlace").children
console.log(video.firstElementChild.poster);
console.log(video.firstElementChild.currentSrc);
console.log(enlace)
for(i=0; i<enlace.length; i++){
  enlace[i].addEventListener("click", function(e){
    console.log(e.target);
  });
}

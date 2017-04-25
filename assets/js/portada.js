
window.addEventListener("load", function(){
  slideShow();

});
window.onbeforeunload = preguntarSalir;
var pregunta = true;
function preguntarSalir(){
  if(pregunta){
     var respuesta = confirm();
    if(respuesta){
      window.onunload = function(){return true;}
    }else{
      return false;
    }
  }
}
// Funcion que cambia las imagenes de portada
var imgActual = 0;
function slideShow(){
  var img = document.getElementsByClassName("portada-img");
  for(i=0; i<img.length;i++){
    img[i].classList.add("display-none");
  }
  imgActual++;
  if(imgActual>img.length){ imgActual=1;}
  img[imgActual-1].classList.remove("display-none");
  //durante un intervalo de tiempo se ejecuta la funcion callback slideShow
  setTimeout(slideShow, 2000);
}

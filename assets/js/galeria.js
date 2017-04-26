  var nailsType = document.getElementsByClassName("vp");
  var modalBox = document.getElementById("modal");
  var modalContent = document.getElementsByClassName("modal-content")[0];
  var images = document.getElementsByClassName("img-nail");
  var body = document.getElementById("body");
  var leftButton = document.getElementById("leftButton");
  var rightButton = document.getElementById("rightButton");
  var close = document.getElementById("close");
  var actualImg = 1;

  close.onmouseenter = cambiarColor;
  close.onmouseleave = colorNormal;

  for(i=0; i<nailsType.length; i++){
    nailsType[i].onclick = createdModal;
  }


function createdModal(e){
  e.preventDefault();
  var type = e.target.id;
  var ruta = "assets/img/nailsTypes/" + type + "/";
  var cantidadImagen = buscarCarpeta(type);
  body.classList.add("hidden");
  modalBox.style.display = "block";
  startInteaction(cantidadImagen, ruta, moveImag);
}

function startInteaction(longitud, ruta, funcion){
  funcion(0,longitud,ruta);
  body.addEventListener("keyup", modalClose);
  //addEventListener a los botones de desplazamiento con click
  leftButton.addEventListener("click", function(e){
    moveImag(-1,longitud,ruta);
  });
  rightButton.addEventListener("click", function(e){
    moveImag(1,longitud,ruta);
  });
  close.addEventListener("click", cerrarModal);

}

function modalClose(e){
  if(e.keyCode==27){
    cerrarModal();
  }
}
function cerrarModal(e){
  modalBox.style.display = "none";
  body.classList.remove("hidden");
}
// funciones del carrusel de imagenes
// var actualImg = 1;

 function moveImag(n,longitud,ruta){
   actualImg += n;
  if(actualImg > parseInt(longitud/3)){
     actualImg = 1;
   }
   if(actualImg  < 1){
     actualImg = parseInt(longitud/3);
   }
   var img = (actualImg-1)*3;
   firstImg.src = ruta + "img"+ (img +1) + ".jpg";
   secondImg.src = ruta + "img"+ (img +2) + ".jpg";
   thirdImg.src = ruta + "img"+ (img +3) + ".jpg";

 }

function buscarCarpeta(tipo){
  var length;
  switch (tipo) {
    case "acrilicas": length = 58;
      break;
    case "postizas": length = 29;
      break;
    case "tip": length = 16;
      break;
    case "normal": length = 15;
      break;
    default:
  }
  return length;
}

function cambiarColor(){
  close.classList.add("change-color");
}
function colorNormal(){
  close.classList.remove("change-color");
}

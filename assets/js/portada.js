
window.addEventListener("load", function(){
  var body = document.getElementById("body");
  var firstImg = document.getElementById("firstImg");
  var secondImg = document.getElementById("secondImg");
  var thirdImg = document.getElementById("thirdImg");
  var leftButton = document.getElementById("leftButton");
  var rightButton = document.getElementById("rightButton");
  var portadaContent = document.getElementsByClassName("portada-contenido")[0];
  //addEventListener para mover el carrusel con las flechas del teclado
  body.addEventListener("keyup", keyboardMove);
  //addEventListener a los botones de desplazamiento con click
  leftButton.addEventListener("click", function(e){
    moveImag(-1);
    portadaContent.classList.remove("change-slide");
  });
  rightButton.addEventListener("click", function(e){
    moveImag(1);
    portadaContent.classList.add("change-slide");
  });


});

//durante un intervalo de tiempo se ejecuta la funcion callback dash
var imgIntervalo = setInterval(dash,3000);
//funcion que mueve las imagenes
function dash(){
  moveImag(1);
}
//funcion mueve las imagenes con las flechas del teclado
function keyboardMove(e){
  if(e.keyCode == 37){ //flecha de la izquierda
    moveImag(-1);
    remove();
  }
  if(e.keyCode == 39){
    moveImag(1);
    add();
  }
}
// funciones del carrusel de imagenes
 var actualImg = 1;
 var ImgUrl = [["nails1.jpg","nails2.jpg","nails3.jpg"],["nails4.jpg","nails5.jpg","nails6.jpg"],["nails7.jpg","nails8.jpg","nails9.jpg"],["nails10.jpg","nails11.jpg","nails12.jpg"]];

 function moveImag(n){
   actualImg += n;
   if(actualImg > ImgUrl.length){
     actualImg = 1;
   }
   if(actualImg  < 1){
     actualImg = ImgUrl.length;
   }
   firstImg.src = "assets/img/portada/" + ImgUrl[actualImg -1][0];
   secondImg.src = "assets/img/portada/" + ImgUrl[actualImg-1][1];
   thirdImg.src = "assets/img/portada/" + ImgUrl[actualImg -1][2];

 }
 function remove(){
   var portadaContent = document.getElementsByClassName("portada-contenido")[0];
   portadaContent.classList.remove("change-slide");
 }
 function add(){
   var portadaContent = document.getElementsByClassName("portada-contenido")[0];
   portadaContent.classList.add("change-slide");

 }

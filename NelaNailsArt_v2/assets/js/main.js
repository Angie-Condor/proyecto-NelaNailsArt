var contenedor=document.getElementById("contenedor");
window.addEventListener('load',function() {

/**Para uñas acrilicas*/
acrilicas.addEventListener('click',function(evento) {
evento.preventDefault();


document.getElementById("modal").style.display ="block";
for (var i = 1; i <=58; i++)
{
 var div=document.createElement("div");
 var img=document.createElement("img");
div.setAttribute("class","content-images");
img.setAttribute("class","imagenes");
img.setAttribute("onclick","onClick(this)");
img.setAttribute("src","assets/img/acrilicas/img"+i+".jpg");
div.appendChild(img);
contenedor.appendChild(div);
}
});
/*
function buscarCarpeta(){
  switch (Diseño_de_Uñas) {
    case("acrilicas"):
    var img=("assets/img/acrilicas/img"+i+".jpg");
    break;
    case("postizas"):
    var img=("assets/img/postizas/im"+i+".jpg");
    break;
    case("tip"):
    var img=("assets/img/postizas/imag"+i+".jpg");
    break;
    case("normal"):
    var img=("assets/img/normal/imagen"+i+".jpg");
    break;
    default:
    alert("no se encuentra la imagen");
  }
}*/
/**Para uñas postizas*/
postizas.addEventListener('click',function(evento) {
evento.preventDefault();

document.getElementById("modal").style.display ="block";
for (var i = 1; i <=29; i++)
{
var div=document.createElement("div");
var img=document.createElement("img");
div.setAttribute("class","content-images");
img.setAttribute("class","imagenes");
img.setAttribute("onclick","onClick(this)");
img.setAttribute("src","assets/img/postizas/im"+i+".jpg");
div.appendChild(img);
contenedor.appendChild(div);
}
});

/**Para uñas tips*/
tips.addEventListener('click',function(evento) {
evento.preventDefault();

document.getElementById("modal").style.display ="block";
for (var i = 1; i <=16; i++)
{
var div=document.createElement("div");
var img=document.createElement("img");
div.setAttribute("class","content-images");
img.setAttribute("class","imagenes");
img.setAttribute("onclick","onClick(this)");
img.setAttribute("src","assets/img/tip/imag"+i+".jpg");
div.appendChild(img);
contenedor.appendChild(div);
}
});
/**Para uñas normales*/
normal.addEventListener('click',function(evento) {
evento.preventDefault();

document.getElementById("modal").style.display ="block";
for (var i = 1; i <=15; i++)
{
var div=document.createElement("div");
var img=document.createElement("img");
div.setAttribute("class","content-images");
img.setAttribute("class","imagenes");
img.setAttribute("onclick","onClick(this)");
img.setAttribute("src","assets/img/normal/imagen"+i+".jpg");
div.appendChild(img);
contenedor.appendChild(div);
}
});
});
function onClick(element) {//Muestra los elementos (imagen)//
  document.getElementById("img_modal").src = element.src;
  document.getElementById("modal").style.display ="block";
}
function closem() {//Oculta las demas imagenes//
  document.getElementById("modal").style.display ="none";
}

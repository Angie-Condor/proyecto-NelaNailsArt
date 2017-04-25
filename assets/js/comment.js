var element = document.getElementById("submit");
element.addEventListener("click", function(event){
  event.preventDefault();
  validation();
});

//crea el tooltip
function createTooltip(mensaje){
  var span = document.createElement("span");
  span.innerHTML = mensaje;
  return span;
}
//Remueve los tooltip
function quitTooltip(nodo) {
  if(nodo.nextElementSibling != null){
    console.log(nodo.nextElementSibling)
    nodo.parentNode.removeChild(nodo.nextSibling);
  }
}
//cambia el texto del tooltip
function changeTooltip(nodo,text){
  if(nodo.nextElementSibling == null){
    nodo.parentNode.appendChild(createTooltip(text));
  }else{
    nodo.nextElementSibling.textContent = text;

  }
}
function validation(){
  var divBox = document.getElementsByClassName("input-box");
  var fullName = document.getElementById("fullName");
  var mail = document.getElementById("correo");
  var comment = document.getElementById("comentario");
  var testName = /[A-Z]{1,}[a-z]+/;
  var testEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;
  var mensaje = "";

   if(fullName.value == ""){
      if(fullName.nextElementSibling == null){
        divBox[0].appendChild(createTooltip("Falta ingresar su nombre"));
      }
    }else{
      if(!fullName.value.match(testName)){
        mensaje = "La primera letra con mayúscula";
        changeTooltip(fullName,mensaje);
        fullName.focus();
      }else{
        quitTooltip(fullName);

      }
    }

    if(mail.value == ""){
      if(mail.nextElementSibling == null){
        divBox[1].appendChild(createTooltip("Falta ingresar su email"));
      }

    }else{
        if(!mail.value.match(testEmail)){
          mensaje = "El Email debe ser válido Ejm. name@domain.com \n ";
          changeTooltip(mail,mensaje);
          mail.focus();
        }else{
          quitTooltip(mail);

        }
    }

    if(comment.value == ""){
      if(comment.nextElementSibling == null){
        divBox[2].appendChild(createTooltip("Falta ingresar su comentario"));
      }
    }else{
      quitTooltip(comment);
    }

    
}

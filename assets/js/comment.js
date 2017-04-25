function createTooltip(mensaje){
  var span = document.createElement("span");
  span.setAttribute("class","tool");
  span.innerHTML = mensaje;
  return span;
}

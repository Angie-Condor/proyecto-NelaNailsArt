window.addEventListener('load',function() {
  var acrilicas = document.getElementById("acrilicas");
  var postizas = document.getElementById("postizas");
  var tips = document.getElementById("tips");
  var normal = document.getElementById("normal");
  var nailsType = document.getElementsByClassName("vp");
  var modalBox = document.getElementById("modal");
  var images = document.getElementsByClassName("modal-img");

  for(i=0; i<nailsType.length; i++){
    nailsType[i].onclick = createdModal;
  }

});
function createdModal(e){
  e.preventDefault();
  var type = e.target.id;
}

function buscarCarpeta(tipo){
  switch (tipo) {
    case "acrilicas":

    break;
    case "postizas":

    break;
    case "tips":

    break;
    case "normal":

    break;
    default:

  }
}

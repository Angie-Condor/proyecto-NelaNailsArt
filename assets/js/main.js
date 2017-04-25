document.getElementById("menu").addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById("nav-header").classList.toggle("despliega");
  document.getElementById("body").classList.toggle("overflow-hidden");
})

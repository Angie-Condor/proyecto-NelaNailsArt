document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});
document.getElementById("enlaces").addEventListener("click", function(event){
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.add("overflow-scroll");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('navHeader').style.display="table";
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
     }
   }
   lastScrollTop = currentScroll;
}, false);

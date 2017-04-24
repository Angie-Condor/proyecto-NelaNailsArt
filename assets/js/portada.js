
window.addEventListener("load", function(){
  var firstImg = document.getElementById("firstImg");
  var secondImg = document.getElementById("secondImg");
  var thirdImg = document.getElementById("thirdImg");

  var leftButton = document.getElementById("leftButton");
  var rightButton = document.getElementById("rightButton");

  leftButton.addEventListener("click", function(e){
    console.log(e.target);
    moveImag(-1);
  });
  rightButton.addEventListener("click", function(e){
    moveImag(1);
  });


});
 var actualImg = 1;
 var ImgUrl = ["nails1.jpg","nails2.jpg","nails3.jpg","nails4.jpg","nails5.jpg","nails6.jpg","nails7.jpg","nails8.jpg","nails9.jpg","nails10.jpg","nails11.jpg","nails12.jpg"];

 function moveImag(n){
   actualImg += n;
   if(actualImg * 3 > ImgUrl.length){
     actualImg = 1;
   }
   if(actualImg * 3 < 1){
     actualImg = ImgUrl.length;
     console.log(actualImg);
   }
   firstImg.src = "assets/img/portada/" + ImgUrl[actualImg -1];
   secondImg.src = "assets/img/portada/" + ImgUrl[actualImg];
   thirdImg.src = "assets/img/portada/" + ImgUrl[actualImg + 1];

 }

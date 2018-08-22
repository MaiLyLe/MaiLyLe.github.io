"use strict";
window.onload = function(){


document.getElementById("form").reset(); 




var root = document.documentElement;





var count = 0;

var simpleSlides = function () {
    var i;
    var slides = root.getElementsByClassName("slides");
    var texts = root.getElementsByClassName("textInImg");

    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style","display:none");
      texts[i].setAttribute("style", "visibility:hidden");
      console.log(82);
    }
    count++;
  console.log(typeof slides[1]);
    if (count > slides.length) { count = 1; }
    slides[count-1].setAttribute("style","display:block; width:100%");
  /**  slides[count-1].setAttribute("style","width: 100%");**/
    texts[count-1].setAttribute("style", "visibility:visible");

    setTimeout(simpleSlides, 3600);
}


simpleSlides();


}

"use strict"

window.addEventListener('load', function () {
  let arrowLeft = document.getElementById('carousel-left');
  let arrowRight = document.getElementById('carousel-right');

  arrowRight.addEventListener('click', function () {
    document.getElementById('scroll').scrollLeft += 2000;
  })

  arrowLeft.addEventListener('click', function () {
    document.getElementById('scroll').scrollLeft -= 2000;
  })

})
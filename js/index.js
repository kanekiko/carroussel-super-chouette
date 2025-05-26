"use strict"

window.addEventListener('load', function () {
  let scrollContainer = document.getElementById('scroll')
  let arrowLeft = document.getElementById('carousel-left');
  let arrowRight = document.getElementById('carousel-right');

  const getSlideWidth = () => {
    return scrollContainer.clientWidth;
  };

  arrowRight.addEventListener('click', function () {
    scrollContainer.scrollBy({
      left: getSlideWidth(),
    });
  })

  arrowLeft.addEventListener('click', function () {
    scrollContainer.scrollBy({
      left: -getSlideWidth(),
    });
  })

})
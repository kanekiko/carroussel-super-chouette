"use strict"
class carrousel {
  /**
  * This callback type is called `requestCallback` and is displayed as a global symbol.
  *
  * @callback moveCallback
  * @param {number} index
  */

  /**
  * @param {HTMLElement} element
  * @param {Object} options
  * @param {Object} [options.slidesToScroll=1] Nombre d'éléments à faire défiler
  * @param {Object} [options.slidesVisible=1] Nombre d'éléments visible dans un slide
  * @param {boolean} [options.loop=false] Doit-t-on boucler en fin de carousel
  * @param {boolean} [options.pagination=false]
  * @param {boolean} [options.navigation=true]
  */
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.asign({}, {
      slidesToScroll: 1,
      slidesVisible: 1
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new carrousel(document.querySelector('#carousel')), {
    slidesToScroll: 3,
    slidesVisible: 3
  }
})

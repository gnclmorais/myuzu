module.exports = require('vue').extend({
  template: '<div class="card grid-item" v-bind:style="styleObject">' +
    '<img v-bind:src="imgSrc" v-bind:class="imgClasses" on-load="{{_imgLoaded}}" />' +
  '</div>',

  props: ['card'],

  data: function () {
    return {
      imgSrc: '',
      imgClasses: 'card__img card__img--absent',
    };
  },

  computed: {
    styleObject: function () {
      return {
        width:  this.card.size.width  + 'px',
        height: this.card.size.height + 'px',
        backgroundColor: this.card.colour,
      };
    },
  },

  /**
   * Component life cyle
   */

  attached: function () {
    this.imgSrc = this.card.image;
    this.imgClasses.replace('card__img--absent', '');

    // img.setAttribute('src', img.getAttribute('data-src'));
  	// img.onload = function() {
  	// 	img.removeAttribute('data-src');
  	// };
  },

  /**
   * Helper methods
   */
  _imgLoaded: function () {
    console.log('Image loaded');
  },
});

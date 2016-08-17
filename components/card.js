module.exports = require('vue').extend({
  template: '<div class="grid-item" v-bind:style="styleObject">' +
    '<img v-bind:src="imgSrc" class="grid-item__img" on-load="{{_imgLoaded}}" />' +
  '</div>',

  props: ['card'],

  data: function () {
    return {
      imgSrc: '',
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
    console.log('attached');

    this.imgSrc = this.card.image;

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

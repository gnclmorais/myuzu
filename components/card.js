module.exports = require('vue').extend({
  template: '<div class="card grid-item" v-bind:style="styleObject">' +
    '<img v-bind:src="imgSrc" v-bind:class="imgClasses" v-on:load="_imgLoaded" />' +
  '</div>',

  props: ['card'],

  data: function () {
    return {
      imgSrc: '',
      imgClasses: {
        'card__img': true,
        'card__img--absent': true,
      },
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
  },

  /**
   * Helper methods
   */
  methods: {
    _imgLoaded: function () {
      this.imgClasses['card__img--absent'] = false;
    },
  },
});

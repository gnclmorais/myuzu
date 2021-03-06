module.exports = require('vue').extend({
  template: '<div class="card" :style="styleObject">' +
    '<a :href="card.url" :title="card.title">' +
      '<img :class="imgClasses" :src="imgSrc" v-on:load="_imgLoaded | debounce 1000" />' +
    '</a>' +
  '</div>',

  props: ['card'],

  data: function () {
    return {
      imgSrc: '',
      imgClasses: {
        'card__img': true,
        'card__img--loaded': false,
      }
    };
  },

  computed: {
    styleObject: function () {
      return {
        width: '400px',
        //width:  this.card.size.width  + 'px',
        //height: this.card.size.height + 'px',
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
      this.imgClasses['card__img--loaded'] = true;
    },
  },
});

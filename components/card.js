module.exports = require('vue').extend({
  template: '<div class="grid-item">' +
    '<div v-bind:style="styleObject"></div>' +
  '</div>',

  props: ['card'],

  computed: {
    styleObject: function () {
      return {
        width:  this.card.size.width  + 'px',
        height: this.card.size.height + 'px',
        backgroundColor: this.card.colour,
      };
    },
  },
});

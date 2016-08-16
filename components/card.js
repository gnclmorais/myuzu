module.exports = require('vue').extend({
  template: '<div class="grid-item">' +
    '<div style="' +
      'background-color: {{ card.colour }};' +
      'width: {{ card.size.width }}px;' +
      'height: {{ card.size.height }}px;' +
    '"></div>' +
  '</div>',

  props: ['card'],
  // data: function () {
  //   return {
  //     message: 'Hello Vue.js!'
  //   };
  // },
});

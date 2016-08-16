var $ = require('jquery');
var Vue = require('vue');
var Masonry = require('masonry-layout');
var cache = require('./cache');

var Card = require('../components/card');

var vm = new Vue({
  el: '.grid',
  data: {
    cards: cache.random(),
  },
  components: {
    'card': Card,
  },
});

// $(window).on('load', function () {
//   var msnry = new Masonry('.grid', {
//     itemSelector: '.grid-item',
//     fitWidth: true,
//   });
// });

var $ = require('jquery');
var Vue = require('vue');
var infiniteScroll = require('vue-infinite-scroll').infiniteScroll;
var Masonry = require('masonry-layout');
var cache = require('./cache');

var Card = require('../components/card');

var vm = new Vue({
  el: '.grid',

  data: {
    'cards': cache.randomAsArray(),
    'busy': false,
  },

  components: {
    'card': Card,
  },

  directives: {
    'infiniteScroll': infiniteScroll,
  },

  methods: {
    'loadMore': function() {
      // Load more cards
      // cache.randomAsArray().forEach(function (card) {
      //   this.cards.push(card);
      // }.bind(this));
    },
  },
});

$(window).on('load', function () {
  var msnry = new Masonry('.grid', {
    itemSelector: '.card',
    columnWidth: 400,
    fitWidth: true,
    transitionDuration: '0.3s',
    initLayout: false,
  })
  .on('layoutComplete', function() {
    var loading = 'grid--loading';
    $('.' + loading).removeClass(loading);
  })
  .layout();
});

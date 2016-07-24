var $ = require('jquery');
var Masonry = require('masonry-layout');

console.log('main.js');

$(window).on('load', function () {
  var msnry = new Masonry('.grid', {
    itemSelector: '.grid-item',
    fitWidth: true,
  });
});

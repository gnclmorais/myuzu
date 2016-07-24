var $ = require('jquery');
var Masonry = require('masonry-layout');

$(window).on('load', function () {
  var msnry = new Masonry('.grid', {
    itemSelector: '.grid-item',
    fitWidth: true,
  });
});

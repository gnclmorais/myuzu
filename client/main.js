var $ = require('zeptojs');
var Masonry = require('masonry-layout');

var wrapper = document.querySelector('.grid');
var msnry = new Masonry(wrapper, {
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 10,
  fitWidth: true,
});

var $ = require('zeptojs');
var Masonry = require('masonry-layout');

document.addEventListener("DOMContentLoaded", function () {
  var wrapper = document.querySelector('.grid');
  var msnry = new Masonry(wrapper, {
    itemSelector: '.grid-item',
    columnWidth: 200,
    fitWidth: true,
    gutter: 10,
  });
});

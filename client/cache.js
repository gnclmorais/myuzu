var cache = require('../cache.json');

function pluckRandom(arr) {
  return arr.splice(arr.length * Math.random() << 0, 1)[0];
}

function random(number) {
  var obj = cache;
  var n = number || 20;

  var keys = Object.keys(obj);
  var max = Math.min(n, keys.length);
  var sample = {};

  var key;
  while (max) {
    key = pluckRandom(keys);
    sample[key] = obj[key];
    max -= 1;
  }

  return sample;
}

module.exports = {
  random: random,

  randomAsArray: function (number) {
    var objs = random(number);

    return Object.keys(objs).map(function (key) {
      return objs[key];
    });
  },
};

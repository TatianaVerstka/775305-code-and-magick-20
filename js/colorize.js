'use strict';

(function () {
  var COLORS_COAT = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var COLORS_EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var COLORS_FIREBALL = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  function getRandomColors(data) {
    return data[Math.floor(Math.random() * data.length)];
  }

  function rgb2hex(rgb) {
    var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
      return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  window.colorize = function (element, date) {
    element.addEventListener('click', function () {
      var colorCoat = getRandomColors(COLORS_COAT);
      var colorEyes = getRandomColors(COLORS_EYES);
      var colorFireball = getRandomColors(COLORS_FIREBALL);

      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = colorFireball;
        var randomElement = element.style.backgroundColor;
        date.value = rgb2hex(randomElement);
      } else if (document.querySelector('.wizard-coat')) {
        element.style.fill = colorCoat;
      } else {
        element.style.fill = colorEyes;
      }
    });
  };
})();

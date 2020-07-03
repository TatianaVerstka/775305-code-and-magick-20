'use strict';

var colorCoat = document.querySelector('.wizard-coat');
var colorEyes = document.querySelector('.wizard-eyes');
var colorFireball = document.querySelector('.setup-fireball-wrap');
var valueFireball = document.querySelector('input[name="fireball-color"]');

window.colorize(colorCoat);
window.colorize(colorEyes);
window.colorize(colorFireball, valueFireball);
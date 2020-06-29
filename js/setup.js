'use strict';

var colorCoat = document.querySelector('.wizard-coat');
var colorEyes = document.querySelector('.wizard-eyes');
var colorFireball = document.querySelector('.setup-fireball-wrap');
var valueFireball = document.querySelector('input[name="fireball-color"]');

window.colorize(colorCoat);
window.colorize(colorEyes);
window.colorize(colorFireball, valueFireball);
window.renderWizards();

function setWizardName() {
  return getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SECOND_NAMES);
}

function getRandomValue(data) {
  return data[Math.floor(Math.random() * data.length)];
}

function generateWizard() {
  var wizard = {};
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizard.name = setWizardName();
    wizard.coatColor = getRandomValue(WIZARD_COAT_COLORS);
    wizard.eyesColor = getRandomValue(WIZARD_EYES_COLORS);

  }
  return wizard;
}

function generateWizards() {
  var wizards = [];
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizards.push(generateWizard());
  }
  return wizards;
}

function getWizard(wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;
  return wizardElement;
}

function renderWizards() {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var wizards = generateWizards();
  wizards.forEach(function (wizard) {
    fragment.appendChild(getWizard(wizard));
  });
  similarListElement.appendChild(fragment);
}

function rgb2hex(rgb) {
  var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function onPopupEscPress(evt) {
  if (formUserName === document.activeElement) {
    return evt;
  } else {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  }
};

function openPopup() {
  setup.classList.remove('hidden');
  setup.querySelector('.setup-similar').classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
}

function changeValueCoat() {
  colorCoat.style.fill = getRandomValue(COLORS_COAT);
  valueCoat.value = colorCoat.style.fill;
}

function changeValueEyes() {
  colorEyes.style.fill = getRandomValue(COLORS_EYES);
  valueEyes.value = colorEyes.style.fill;
}

function changeValueFireball() {
  colorFireball.style.background = getRandomValue(COLORS_FIREBALL);
  var randomColorFireball = colorFireball.style.background;

  valueFireball.value = rgb2hex(randomColorFireball);
}

colorCoat.addEventListener('click', function () {
  changeValueCoat();
})

colorEyes.addEventListener('click', function () {
  changeValueEyes();
})

colorFireball.addEventListener('click', function () {
  changeValueFireball();
})

setupOpen.addEventListener('click', function () {
  openPopup();
})

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
})

setupClose.addEventListener('click', function () {
  closePopup();
})

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
})

renderWizards();

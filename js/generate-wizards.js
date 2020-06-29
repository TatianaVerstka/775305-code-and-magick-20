'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var userDialog = document.querySelector('.setup');

  function getWizard(wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  window.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    var similarListElement = document.querySelector('.setup-similar-list');

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(getWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }, function() {});

  var form = userDialog.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function (response) {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });
})()

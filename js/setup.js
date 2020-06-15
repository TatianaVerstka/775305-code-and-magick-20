'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

function renderDialog() {
    var userDialog = document.querySelector('.setup');
    userDialog.classList.remove('hidden');
    renderWizards();
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
}

function setWizardName() {
    return getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SECOND_NAME);
}

function getRandomValue(data) {
    return data[Math.floor(Math.random() * data.length)];
}

function generateWizard() {
    var wizard = {};
    for (var i = 0; i < WIZARDS_COUNT; i++) {
        wizard.name = setWizardName();
        wizard.coatColor = getRandomValue(WIZARD_COAT_COLOR);
        wizard.eyesColor = getRandomValue(WIZARD_EYES_COLOR);
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
    wizards.forEach(function(wizard) {
        fragment.appendChild(getWizard(wizard));
    });
    similarListElement.appendChild(fragment);
}

renderDialog();
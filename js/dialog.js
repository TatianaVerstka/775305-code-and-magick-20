'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var upload = setup.querySelector('.upload');

  function onPopupEscPress(evt) {
    if (formUserName != document.activeElement && evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  }

  function defaulPositionSetup() {
    var defaultPositionSetupTop = 80 + 'px';
    var defaultPositionSetupLeft = 50 + '%';
    setup.style.top = defaultPositionSetupTop;
    setup.style.left = defaultPositionSetupLeft;
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
    defaulPositionSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          upload.removeEventListener('click', onClickPreventDefault)
        };
        upload.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function openPopup() {
    setup.classList.remove('hidden');
    setup.querySelector('.setup-similar').classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    defaulPositionSetup();
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
})();

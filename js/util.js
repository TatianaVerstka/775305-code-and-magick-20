'use strict';

(function () {
  var ESC_KEYCODE = 'Escape';
  var ENTER_KEYCODE = 'Enter';

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.key === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();

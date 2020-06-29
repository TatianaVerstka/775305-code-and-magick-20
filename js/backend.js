'use strict';

(function () {

  var StatusCode = {
    OK: 200
  };
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  window.load = function (onLoad, onError) {
    var url = 'https://javascript.pages.academy/code-and-magick/data';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('GET', url);
    xhr.send();
  };

  window.save = function (data, onLoad, onError) {
    var url = 'https://javascript.pages.academy/code-and-magick';
    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('POST', url);
    xhr.send(data);
  }
})()

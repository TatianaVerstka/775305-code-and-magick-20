'use strict';

(function () {

  var StatusCode = {
    OK: 200
  };

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    var url = 'https://javascript.pages.academy/code-and-magick/data';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        var error;
        switch (xhr.status) {
          case 400:
            error = 'Неверный запрос';
            break;
          case 401:
            error = 'Пользователь не авторизован';
            break;
          case 404:
            error = 'Ничего не найдено';
            break;
          case 500:
            error = 'Ошибка сервера';
            break;

          default:
            error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
        }

        if (error) {
          onError(error);
        }
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('GET', url);
    xhr.send();
  };

  window.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
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

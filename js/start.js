'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CANVAS_HEIGHT = 300;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_CHART_X = 130;
var TEXT_GAP = 10;
var TEXT_HEIGHT = 16;
var TEXT_BLACK_STYLE = '#000';
var BAR_CHART_MAX_HEIGHT = 150;
var barHeight = BAR_CHART_MAX_HEIGHT - GAP - TEXT_HEIGHT - GAP;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function getMaxElement(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'TEXT_BLACK_STYLE';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 40);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, 40 + TEXT_HEIGHT + TEXT_GAP);
    ctx.fillStyle = TEXT_BLACK_STYLE;
    ctx.fillText(players[i], BAR_CHART_X + (BAR_WIDTH + BAR_GAP) * i, CANVAS_HEIGHT - BAR_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 75%, 50%)';
    }
    ctx.fillRect(BAR_CHART_X + (BAR_WIDTH + BAR_GAP) * i, CANVAS_HEIGHT - (barHeight * times[i]) / maxTime - BAR_GAP - TEXT_GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime);

    ctx.fillStyle = TEXT_BLACK_STYLE;
    ctx.fillText(Math.round(times[i]), BAR_CHART_X + (BAR_WIDTH + BAR_GAP) * i, CANVAS_HEIGHT - (barHeight * times[i]) / maxTime - BAR_GAP - TEXT_HEIGHT - TEXT_GAP);
  }
};

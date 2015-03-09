var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounceIn = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');




$btnShowHide.on('click', function () {
    $box.toggleClass('js-btn-show-hide');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-btn-move');
});

$btnCollapseExpand.on('click', function () {
    $panel.toggleClass('js-panel-expand');
});

$btnBounceIn.on('click', function () {
    $circle.toggleClass('js-Bounce-in');
});

$circle.on('animationend', function () {
    $circle.removeClass('js-circle-bounce');
});

$btnAppend.on('click', function () {
    var $li = $('<li>New item</li>');
    $list.prepend($li);
    $list.toggleClass('js-btn-append');
});

var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.Collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.Bounce-in');
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
    $panel.toggleClass('js-btn-collapse-expand');
});

$BounceIn.on('click', function () {
    $circle.toggleClass('js-Bounce-in');
});

$btnAppend.on('click', function () {
    $list.toggleClass('js-btn-append');
});

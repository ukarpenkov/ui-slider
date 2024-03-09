"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.setTooltip = exports.createToolTips = void 0;
var store_1 = require("../../../model/store");
var createToolTips = function () {
    var minTooltip = document.createElement('div');
    minTooltip.className = 'js-tooltip-slider-min';
    document.body.appendChild(minTooltip);
    var maxTooltip = document.createElement('div');
    maxTooltip.className = 'js-tooltip-slider-max';
    document.body.appendChild(maxTooltip);
};
exports.createToolTips = createToolTips;
var setTooltip = function () {
    var inputMin = document.querySelectorAll('.js-uk-min');
    var inputMax = document.querySelectorAll('.js-uk-max');
    var time = 1500;
    Array.from(inputMin).forEach(function (a) {
        return (a.onmousemove = function (event) {
            var _a, _b;
            var state = store_1.store.getState();
            var minTooltip = document.querySelector('.js-tooltip-slider-min');
            var wrapper = $(this).parent().parent().parent()[0];
            var id = (_b = (_a = $(wrapper)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[0];
            var arayFromState = Array.from(__spreadArray([], state, true));
            var currentValue = arayFromState.filter(function (a) { return a.id === id; })[0]
                .minValue;
            var x = event.clientX;
            var y = event.clientY;
            if (minTooltip) {
                minTooltip.style.display = 'block';
                minTooltip.innerHTML = currentValue;
                minTooltip.style.left = "".concat(x + 10, "px");
                minTooltip.style.top = "".concat(y + 3, "px");
            }
            setTimeout(remove, time);
            function remove() {
                if (minTooltip) {
                    minTooltip.style.display = 'none';
                }
            }
        });
    });
    inputMax.forEach(function (a) {
        return (a.onmousemove = function (event) {
            var _a, _b;
            var state = store_1.store.getState();
            var maxTooltip = document.querySelector('.js-tooltip-slider-max');
            var wrapper = $(this).parent().parent().parent()[0];
            var id = (_b = (_a = $(wrapper)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[0];
            var arayFromState = Array.from(__spreadArray([], state, true));
            var currentValue = arayFromState.filter(function (a) { return a.id === id; })[0]
                .maxValue;
            var x = event.clientX;
            var y = event.clientY;
            if (maxTooltip) {
                maxTooltip.style.display = 'block';
                maxTooltip.innerHTML = currentValue;
                maxTooltip.style.left = "".concat(x + 10, "px");
                maxTooltip.style.top = "".concat(y + 3, "px");
            }
            setTimeout(remove, time);
            function remove() {
                if (maxTooltip) {
                    maxTooltip.style.display = 'none';
                }
            }
        });
    });
};
exports.setTooltip = setTooltip;

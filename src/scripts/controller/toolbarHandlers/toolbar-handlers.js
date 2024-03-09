"use strict";
exports.__esModule = true;
exports.changeVisibleTooltips = exports.changeVisibleProgressBar = exports.changeSingleOrRange = exports.changeOrientation = exports.changeScaleStep = exports.changeMaxPos = exports.changeMinPos = exports.changeMaxScale = exports.changeMinScale = void 0;
var store_1 = require("../../model/store");
var updateSliders_1 = require("../updateSlider/updateSliders");
function changeMinScale() {
    var _a, _b;
    var minScaleInput = $(this);
    var toolbarContainer = $(minScaleInput).parent().parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    var minScaleValue = Number($(minScaleInput).val());
    var maxScaleValue = Number($(minScaleInput).next().val());
    if (minScaleValue > maxScaleValue) {
        minScaleValue = maxScaleValue;
    }
    store_1.store.dispatch({
        type: 'CHANGE_MIN_SCALE',
        id: toolbarId,
        payload: minScaleValue
    });
    (0, updateSliders_1.updateSliders)();
    (0, updateSliders_1.updateToolbar)();
}
exports.changeMinScale = changeMinScale;
function changeMaxScale() {
    var _a, _b;
    var maxScaleInput = $(this);
    var toolbarContainer = $(maxScaleInput).parent().parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    var maxScaleValue = Number($(maxScaleInput).val());
    var minScaleValue = Number($(maxScaleInput).prev().val());
    if (maxScaleValue < minScaleValue) {
        maxScaleValue = minScaleValue;
    }
    store_1.store.dispatch({
        type: 'CHANGE_MAX_SCALE',
        id: toolbarId,
        payload: maxScaleValue
    });
    (0, updateSliders_1.updateSliders)();
}
exports.changeMaxScale = changeMaxScale;
function changeMinPos() {
    var _a, _b;
    var minPositionInput = $(this);
    var toolbarContainer = $(minPositionInput).parent().parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    var minPosValue = Number($(minPositionInput).val());
    store_1.store.dispatch({
        type: 'CHANGE_MIN_VAL',
        id: toolbarId,
        payload: minPosValue
    });
    (0, updateSliders_1.updateSliders)();
}
exports.changeMinPos = changeMinPos;
function changeMaxPos() {
    var _a, _b;
    var maxPositionInput = $(this);
    var toolbarContainer = $(maxPositionInput).parent().parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    var maxPosValue = Number($(maxPositionInput).val());
    store_1.store.dispatch({
        type: 'CHANGE_MAX_VAL',
        id: toolbarId,
        payload: maxPosValue
    });
    (0, updateSliders_1.updateSliders)();
}
exports.changeMaxPos = changeMaxPos;
function changeScaleStep() {
    var _a, _b;
    var scaleStepInput = $(this);
    var toolbarContainer = $(scaleStepInput).parent().parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    var scaleStepInputValue = Number(scaleStepInput.val());
    store_1.store.dispatch({
        type: 'CHANGE_STEP',
        id: toolbarId,
        payload: scaleStepInputValue
    });
    (0, updateSliders_1.updateSliders)();
}
exports.changeScaleStep = changeScaleStep;
function changeOrientation() {
    var _a, _b;
    var verticalOrHorizontalCheckbox = $(this);
    var toolbarContainer = $(verticalOrHorizontalCheckbox)
        .parent()
        .parent()
        .parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    if ($(verticalOrHorizontalCheckbox).is(':checked')) {
        store_1.store.dispatch({
            type: 'VERTICAL_ORIENTANTION',
            id: toolbarId
        });
    }
    else {
        store_1.store.dispatch({
            type: 'HORIZONTAL_ORIENTANTION',
            id: toolbarId
        });
    }
    (0, updateSliders_1.updateSliders)();
}
exports.changeOrientation = changeOrientation;
function changeSingleOrRange() {
    var _a, _b;
    var singleOrRangeCheckbox = $(this);
    var toolbarContainer = $(singleOrRangeCheckbox).parent().parent().parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    if ($(singleOrRangeCheckbox).is(':checked')) {
        store_1.store.dispatch({
            type: 'SET_SINGLE',
            id: toolbarId
        });
    }
    else {
        store_1.store.dispatch({
            type: 'SET_INTERVAL',
            id: toolbarId
        });
    }
    (0, updateSliders_1.updateSliders)();
}
exports.changeSingleOrRange = changeSingleOrRange;
function changeVisibleProgressBar() {
    var _a, _b;
    var progressBarCheckbox = $(this);
    var toolbarContainer = $(progressBarCheckbox).parent().parent().parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    var valueBlocks = document.querySelectorAll('.uk-slider__value_block ');
    if ($(progressBarCheckbox).is(':checked')) {
        valueBlocks.forEach(function (element) {
            store_1.store.dispatch({
                type: 'ON_TOOLBAR',
                id: toolbarId
            });
        });
    }
    else {
        valueBlocks.forEach(function (element) {
            store_1.store.dispatch({
                type: 'OFF_TOOLBAR',
                id: toolbarId
            });
        });
    }
    (0, updateSliders_1.updateSliders)();
}
exports.changeVisibleProgressBar = changeVisibleProgressBar;
function changeVisibleTooltips() {
    var _a, _b;
    var tooltipCheckbox = $(this);
    var toolbarContainer = $(tooltipCheckbox).parent().parent().parent()[0];
    var toolbarId = (_b = (_a = $(toolbarContainer)) === null || _a === void 0 ? void 0 : _a.attr('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    var maxTooltip = document.querySelector('.js-tooltip-slider-max');
    var minTooltip = document.querySelector('.js-tooltip-slider-min');
    if ($(tooltipCheckbox).is(':checked')) {
        store_1.store.dispatch({
            type: 'ON_TOOLTIP',
            id: toolbarId
        });
        if (maxTooltip) {
            maxTooltip.style.visibility = 'visible';
        }
        if (minTooltip) {
            minTooltip.style.visibility = 'visible';
        }
    }
    else {
        store_1.store.dispatch({
            type: 'OFF_TOOLTIP',
            id: toolbarId
        });
        if (maxTooltip) {
            maxTooltip.style.visibility = 'hidden';
        }
        if (minTooltip) {
            minTooltip.style.visibility = 'hidden';
        }
    }
}
exports.changeVisibleTooltips = changeVisibleTooltips;

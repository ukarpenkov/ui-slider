"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.updateToolbar = exports.updateSliders = void 0;
var toolbar_handlers_1 = require("../toolbarHandlers/toolbar-handlers");
var view_init_slider_1 = __importDefault(require("../../view/components/initSlider/view-init-slider"));
var view_init_toolbar_1 = __importDefault(require("../../view/components/initToolbar/view-init-toolbar"));
var input_tooltips_1 = require("../../view/components/input-tooltips/input-tooltips");
var updateSliders = function () {
    $('.sliders-container').remove();
    (0, view_init_slider_1["default"])('.slider-page');
    (0, input_tooltips_1.setTooltip)();
};
exports.updateSliders = updateSliders;
var updateToolbar = function () {
    $('.control-panel').remove();
    (0, view_init_toolbar_1["default"])('.toolbar-page');
    $("input[name='minScale']").on('change', toolbar_handlers_1.changeMinScale);
    $("input[name='maxScale']").on('change', toolbar_handlers_1.changeMaxScale);
    $("input[name='minPosition']").on('change', toolbar_handlers_1.changeMinPos);
    $("input[name='maxPosition']").on('change', toolbar_handlers_1.changeMaxPos);
    $("input[name='scaleStep']").on('change', toolbar_handlers_1.changeScaleStep);
    $("input[name='verticalOrHorizontal']").on('change', toolbar_handlers_1.changeOrientation);
    $("input[name='singleOrRange']").on('change', toolbar_handlers_1.changeSingleOrRange);
    $("input[name='progressBar']").on('change', toolbar_handlers_1.changeVisibleProgressBar);
    $("input[name='scaleRange']").on('change', toolbar_handlers_1.changeVisibleTooltips);
    (0, input_tooltips_1.setTooltip)();
};
exports.updateToolbar = updateToolbar;

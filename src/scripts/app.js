"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("./utils/import-jquery");
var view_init_slider_1 = __importDefault(require("./view/components/initSlider/view-init-slider"));
var input_tooltips_1 = require("./view/components/input-tooltips/input-tooltips");
var addSliderToStore_1 = require("./controller/addSliderToStore/addSliderToStore");
var slider1 = new addSliderToStore_1.AddSliderToStore('1', 'interval', 'horizontal', 1, 50, 1, 100, 1, true, true);
slider1.init();
var slider2 = new addSliderToStore_1.AddSliderToStore('2', 'interval', 'vertical', 1, 20, 1, 20, 1, true, true);
slider2.init();
var slider3 = new addSliderToStore_1.AddSliderToStore('3', 'single', 'horizontal', 1, 20, 1, 20, 1, true, true);
slider3.init();
(0, view_init_slider_1["default"])('.slider-page');
(0, input_tooltips_1.createToolTips)();
(0, input_tooltips_1.setTooltip)();

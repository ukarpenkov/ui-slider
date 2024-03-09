"use strict";
exports.__esModule = true;
var store_1 = require("../../../model/store");
var updateSliders_1 = require("../../../controller/updateSlider/updateSliders");
function initSlider(wrapper) {
    var state = store_1.store.getState();
    var sliderRendering = function (data) {
        return data.map(function (item) {
            return $("\n    <div class=\"".concat(item.id, " slider-wrapper\">  \n    <div class=\"slider-tem\">\n      <div class=\"uk-slider__range ").concat(item.orientation === 'vertical'
                ? 'uk-slider__range_orient_vertical'
                : '', "\">\n      <input class=\"uk-slider__input uk-slider__input_handle_min js-uk-min\" name=\"range_1\" type=\"range\" min=\"").concat(item.minScale, "\" max=\"").concat(item.maxScale, "\" value=\"").concat(item.minValue, "\" step=\"").concat(item.step, "\" orient=\"vertical\"  />\n      <input class=\"uk-slider__input uk-slider__input_handle_max js-uk-max ").concat(item.interval === 'single' ? 'hidden' : '', "\" name=\"range_1\" type=\"range\" min=\"").concat(item.minScale, "\"\n      max=\"").concat(item.maxScale, "\" value=\"").concat(item.maxValue, "\" orient=\"vertical\" step=\"").concat(1, "\"/>\n      </div>\n    \n      <div class=\"uk-slider__value_block ").concat(item.orientation === 'vertical'
                ? 'uk-slider__value_block_orient_vertical'
                : '', "  ").concat(item.valueBlock === true ? '' : 'hidden', "\">\n      <input type=\"number\" value=\"").concat(item.minValue, "\" min=\"0\" max=\"99999999\" class=\"uk-slider__range_value uk-slider__range_value_min left js-uk-range_min\" />\n      <input type=\"number\" value=\"").concat(item.maxValue, "\" min=\"0\" max=\"99999999\" class=\"uk-slider__range_value uk-slider__range_value_max right js-uk-range_max ").concat(item.interval === 'single' ? 'no-vis' : '', "\" />\n      </div>\n  \n      </div>\n    </div>\n  "));
        });
    };
    var slidersContainer = $('<div class="sliders-container"></div>');
    $(wrapper).append(slidersContainer);
    $(slidersContainer).append(sliderRendering(state));
    (function handleRange() {
        function rangeInputChangeEventHandler() {
            var minBtn = $(this).parent().children('.js-uk-min');
            var maxBtn = $(this).parent().children('.js-uk-max');
            var range_min = $(this)
                .parent()
                .parent()
                .children('.uk-slider__value_block')
                .children('.js-uk-range_min');
            var range_max = $(this)
                .parent()
                .parent()
                .children('.uk-slider__value_block')
                .children('.js-uk-range_max');
            var minVal = Number($(minBtn).val());
            var maxVal = Number($(maxBtn).val());
            var sliderId = $(range_min).parent().parent().parent()[0].classList[0];
            (0, updateSliders_1.updateToolbar)();
            if (minVal > maxVal - 1) {
                $(minBtn).val(maxVal);
            }
            $(range_min).change(function () {
                var currentValue = Number($(this).val()) / 1;
                $(minBtn).val(currentValue);
                store_1.store.dispatch({
                    type: 'CHANGE_MIN_VAL',
                    id: sliderId,
                    payload: currentValue
                });
                if (Number($(range_min).val()) > Number($(range_max).val())) {
                    $(minBtn).val(maxVal);
                    $(range_min).val(Number($(range_max).val()));
                    store_1.store.dispatch({
                        type: 'CHANGE_MIN_VAL',
                        id: sliderId,
                        payload: currentValue
                    });
                }
                (0, updateSliders_1.updateToolbar)();
            });
            $(range_min).val(minVal * 1);
            if (maxVal < minVal) {
                $(maxBtn).val(minVal);
            }
            $(range_max).change(function () {
                var currentValue = Number($(this).val()) / 1;
                $(maxBtn).val(currentValue);
                if (Number($(range_max).val()) < Number($(range_min).val())) {
                    $(maxBtn).val(maxVal);
                    $(range_max).val(Number($(range_min).val()));
                }
                store_1.store.dispatch({
                    type: 'CHANGE_MAX_VAL',
                    id: sliderId,
                    payload: currentValue
                });
                (0, updateSliders_1.updateToolbar)();
            });
            $(range_max).val(maxVal * 1);
            store_1.store.dispatch({
                type: 'CHANGE_MIN_VAL',
                id: sliderId,
                payload: minVal
            });
            store_1.store.dispatch({
                type: 'CHANGE_MAX_VAL',
                id: sliderId,
                payload: maxVal
            });
            (0, updateSliders_1.updateToolbar)();
        }
        $('.uk-slider__input').on('input', rangeInputChangeEventHandler);
        $('.uk-slider__input').trigger('input');
    })();
}
exports["default"] = initSlider;

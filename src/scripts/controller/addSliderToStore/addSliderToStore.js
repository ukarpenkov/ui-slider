"use strict";
exports.__esModule = true;
exports.AddSliderToStore = void 0;
var store_1 = require("../../model/store");
var AddSliderToStore = /** @class */ (function () {
    function AddSliderToStore(id, interval, orientation, minValue, maxValue, minScale, maxScale, step, tooltip, valueBlock) {
        if (id === void 0) { id = ''; }
        if (interval === void 0) { interval = 'interval'; }
        if (orientation === void 0) { orientation = 'horizontal'; }
        if (minValue === void 0) { minValue = 1; }
        if (maxValue === void 0) { maxValue = 100; }
        if (minScale === void 0) { minScale = 1; }
        if (maxScale === void 0) { maxScale = 100; }
        if (step === void 0) { step = 1; }
        if (tooltip === void 0) { tooltip = true; }
        if (valueBlock === void 0) { valueBlock = true; }
        this.id = id;
        this.interval = interval;
        this.orientation = orientation;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.minScale = minScale;
        this.maxScale = maxScale;
        this.step = step;
        this.tooltip = tooltip;
        this.valueBlock = valueBlock;
    }
    AddSliderToStore.prototype.init = function () {
        store_1.store.dispatch({
            type: 'ADD_SLIDER',
            id: this.id,
            interval: this.interval,
            orientation: this.orientation,
            minValue: this.minValue,
            maxValue: this.maxValue,
            minScale: this.minScale,
            maxScale: this.maxScale,
            step: this.step,
            tooltip: this.tooltip,
            valueBlock: this.valueBlock
        });
    };
    return AddSliderToStore;
}());
exports.AddSliderToStore = AddSliderToStore;

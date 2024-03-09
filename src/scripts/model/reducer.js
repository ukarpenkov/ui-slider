"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.reducer = void 0;
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_SLIDER':
            return __spreadArray(__spreadArray([], state, true), [
                {
                    id: action.id,
                    interval: action.interval,
                    orientation: action.orientation,
                    minValue: action.minValue,
                    maxValue: action.maxValue,
                    minScale: action.minScale,
                    maxScale: action.maxScale,
                    step: action.step,
                    tooltip: action.tooltip,
                    valueBlock: action.valueBlock
                },
            ], false);
        case 'VERTICAL_ORIENTANTION':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { orientation: 'vertical' });
                }
                return slider;
            });
        case 'HORIZONTAL_ORIENTANTION':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { orientation: 'horizontal' });
                }
                return slider;
            });
        case 'CHANGE_MIN_VAL':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { minValue: action.payload });
                }
                return slider;
            });
        case 'CHANGE_MAX_VAL':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { maxValue: action.payload });
                }
                return slider;
            });
        case 'CHANGE_MIN_SCALE':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { minScale: action.payload });
                }
                return slider;
            });
        case 'CHANGE_MAX_SCALE':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { maxScale: action.payload });
                }
                return slider;
            });
        case 'CHANGE_STEP':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { step: action.payload });
                }
                return slider;
            });
        case 'SET_SINGLE':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { interval: 'single' });
                }
                return slider;
            });
        case 'SET_INTERVAL':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { interval: 'interval' });
                }
                return slider;
            });
        case 'ON_TOOLTIP':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { tooltip: true });
                }
                return slider;
            });
        case 'OFF_TOOLTIP':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { tooltip: false });
                }
                return slider;
            });
        case 'ON_TOOLBAR':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { valueBlock: true });
                }
                return slider;
            });
        case 'OFF_TOOLBAR':
            return state.map(function (slider) {
                if (slider.id === action.id) {
                    return __assign(__assign({}, slider), { valueBlock: false });
                }
                return slider;
            });
        default:
            return state;
    }
}
exports.reducer = reducer;

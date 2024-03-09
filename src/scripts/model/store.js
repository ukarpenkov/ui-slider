"use strict";
exports.__esModule = true;
exports.store = void 0;
var reducer_1 = require("./reducer");
function createStore(reducer, initialState) {
    var state = initialState;
    return {
        dispatch: function (action) {
            state = reducer(state, action);
        },
        getState: function () { return state; }
    };
}
var initialSlider = [];
exports.store = createStore(reducer_1.reducer, initialSlider);

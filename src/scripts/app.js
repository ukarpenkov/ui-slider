import "./import-jquery";
import SliderSettings from "./slider-settings";
import initSlider from "./view-init-slider";
import initToolBar from "./view-init-toolbar";
import destroySlider from "./destroy-slider";
import { createStore } from "../createStore";
import { rootReducer } from "../rootReducer";

const store = createStore(rootReducer, {

})

let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
let settings2 = new SliderSettings('interval', 'vertical', 1, 300)
let settings3 = new SliderSettings('single', 'horizontal', 1, 1000)

let slider1 = initSlider(".id2", settings1)

let slider2 = initSlider(".id3", settings2)
let slider3 = initSlider(".id4", settings3)
initToolBar('.js-page-item1')
initToolBar('.js-page-item2')
initToolBar('.js-page-item3')


let toolBarHandlers = {
    verticalOrHorizontalChanger: function changeOrientation() {
        let verticalOrHorizontalCheckbox = $(this).find("input[name='verticalOrHorizontal']");
        let wrap = $(verticalOrHorizontalCheckbox).parent().parent().parent().parent().children()
        let slider = ($(wrap).children())[0]
        let valueBlock = ($(wrap).children())[1]
        if ($(verticalOrHorizontalCheckbox).is(':checked')) {
            $(slider).addClass('uk-slider__range_orient_vertical')
            $(valueBlock).addClass('uk-slider__value_block_orient_vertical')
        }
        else {
            $(slider).removeClass('uk-slider__range_orient_vertical')
            $(valueBlock).removeClass('uk-slider__value_block_orient_vertical')
        }
        if (!$(verticalOrHorizontalCheckbox).is(':checked')) {
            $(slider).removeClass('uk-slider__range_orient_vertical')
            $(valueBlock).removeClass('uk-slider__value_block_orient_vertical')
        }
    },

    singleRangeChanger: function changeSingleOrRange() {
        let singleOrRangeCheckbox = $(this).find("input[name='singleOrRange']")
        let wrap = $(singleOrRangeCheckbox).parent().parent().parent().parent().children()
        let slider = ($(wrap).children())[0]
        let valueBlock = ($(wrap).children())[1]
        let secondSlider = ($(slider).children())[1]
        let secondValueBlock = ($(valueBlock).children())[1]

        if ($(singleOrRangeCheckbox).is(':checked')) {

            $(secondSlider).addClass('hidden')
            $(secondValueBlock).addClass('hidden')

        } else {
            $(secondSlider).removeClass('hidden')
            $(secondValueBlock).removeClass('hidden')
        }
    },

    viewProgressBar: function changeVisibleProgressBar() {
        let progressBarCheckbox = $(this).find("input[name='progressBar']")
        let wrap = $(progressBarCheckbox).parent().parent().parent().parent().children()
        let valueBlock = ($(wrap).children())[1]

        if ($(progressBarCheckbox).is(':checked')) {
            $(valueBlock).addClass('hidden')
        }
        else {
            $(valueBlock).removeClass('hidden')
        }
    },

    viewScale: function changeVisibleSlider() {
        let scaleCheckbox = $(this).find("input[name='scaleRange']")
        let wrap = $(scaleCheckbox).parent().parent().parent().parent().children()
        let slider = ($(wrap).children())[0]

        if ($(scaleCheckbox).is(':checked')) {
            $(slider).addClass('hidden')
        }
        else {
            $(slider).removeClass('hidden')
        }
    },
}

let textInputsHandlers = {
    minScaleValue: function changeMinScale() {
        let minScaleInput = $(this).find("input[name='minScale']")
        let minScaleValue = $(minScaleInput).val()
        let wrap = $(minScaleInput).parent().parent().parent().children()
        let valueBlock = (($(wrap).children().children())[2])
        let minBtn = (($(wrap).children().children())[0])
        $(valueBlock).val(minScaleValue)
        $(minBtn).val(minScaleValue)

    },
    maxScaleValue: function changeMaxScale() {
        let maxScaleInput = $(this).find("input[name='maxScale']")
        let maxScaleValue = $(maxScaleInput).val()
        let wrap = $(maxScaleInput).parent().parent().parent().children()
        let valueBlock = (($(wrap).children().children())[3])
        let maxBtn = (($(wrap).children().children())[1])
        $(valueBlock).val(maxScaleValue)
        $(maxBtn).val(maxScaleValue)
    },
    scaleStepValue: function changeScaleStep() {
        let scaleStepInput = $(this).find("input[name='scaleStep']")
        let wrap = $(scaleStepInput).parent().parent().parent().children()
        let slider = ($(wrap).children())[0]
        let minSlider = ($(slider).children())[0]
        let sliderStep = $(minSlider).attr('step')
        console.log(minSlider, sliderStep)
        $(minSlider).attr('step', scaleStepInput.val())

    },
}

$('.control-panel').on('change', toolBarHandlers.verticalOrHorizontalChanger)
$('.control-panel').on('change', toolBarHandlers.singleRangeChanger)
$('.control-panel').on('change', toolBarHandlers.viewProgressBar)
$('.control-panel').on('change', toolBarHandlers.viewScale)
$('.control-panel').on('change', textInputsHandlers.minScaleValue)
$('.control-panel').on('change', textInputsHandlers.maxScaleValue)
$('.control-panel').on('change', textInputsHandlers.scaleStepValue)




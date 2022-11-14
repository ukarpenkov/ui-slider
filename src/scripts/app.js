import "./import-jquery";
import SliderSettings from "./slider-settings";
import initSlider from "./view-init-slider";
import initToolBar from "./view-init-toolbar";



let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
let settings2 = new SliderSettings('interval', 'vertical', 1, 300)
let settings3 = new SliderSettings('single', 'horizontal', 1, 1000)

initSlider(".id2", settings1)
initSlider(".id3", settings2)
initSlider(".id4", settings3)
initToolBar('.id2')
initToolBar('.id3')
initToolBar('.id4')


!(function handleRange() {
    function rangeInputChangeEventHandler(e) {
        var minBtn = $(this).parent().children('.js-uk-min');
        var maxBtn = $(this).parent().children('.js-uk-max');
        var range_min = $(this).parent().parent().children('.uk-slider__value_block').children('.js-uk-range_min');
        var range_max = $(this).parent().parent().children('.uk-slider__value_block').children('.js-uk-range_max');
        var minVal = Number($(minBtn).val());
        var maxVal = Number($(maxBtn).val());
        if (minVal > maxVal - 3) {
            $(minBtn).val(maxVal - 3);
        }
        $(range_min).change(function () {
            $(minBtn).val($(this).val() / 1)
            if ($(range_min).val() > $(range_max).val() - 1) {
                $(minBtn).val(maxVal - 3);
                $(range_min).val(Number($(range_max).val()))
            }
        });
        $(range_min).val((minVal * 1));
        if (maxVal < minVal + 3) {
            $(maxBtn).val(minVal + 3);
        }
        $(range_max).change(function () {
            $(maxBtn).val($(this).val() / 1)
            if ($(range_max).val() < $(range_min).val() - 1) {
                $(maxBtn).val(maxVal + 3);
                $(range_max).val(Number($(range_min).val()))
            }
        });
        $(range_max).val((maxVal * 1));
    }
    $('.uk-slider__input').on('input', rangeInputChangeEventHandler)
    $('.uk-slider__input').trigger('input')
})()

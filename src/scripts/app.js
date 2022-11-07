import "./import-jquery";

class SliderSettings {
    constructor(orientation, minValue, maxValue) {
        this.orientation = orientation
        this.inputsOrientation = orientation
        this.minValue = minValue
        this.maxValue = maxValue
    }
}

let settings = new SliderSettings('horizontal', 1, 100)

initSlider(settings)

function initSlider(orientation) {
    if (settings.orientation === 'vertical') {
        orientation = 'uk-slider__range_orient_vertical'
        inputsOrientation = 'uk-slider__value_block_orient_vertical'
    } else {
        orientation = ''
        inputsOrientation = ''
    }
    let horizontalSlider = $(`<div class="uk-slider__range ${orientation}"> <input class="uk-slider__input uk-slider__input_handle_min js-uk-min" name="range_1" type="range" min="${settings.minValue}" max="${settings.maxValue}" value="1" orient="vertical" /> <input class="uk-slider__input uk-slider__input_handle_max js-uk-max" name="range_1" type="range" min="${settings.minValue}" max="${settings.maxValue}" value="100" orient="vertical" /> </div> </div> <div class="uk-slider__value_block ${inputsOrientation}"> <input type="text" value="${settings.minValue}" class="uk-slider__range_value uk-slider__range_value_min left js-uk-range_min" /> <input type="text" value="${settings.maxValue}" class="uk-slider__range_value uk-slider__range_value_max right js-uk-range_max" /> `)

    let verticalSlider = $('<div class="uk-slider__range uk-slider__range_orient_vertical"> <input class="uk-slider__input uk-slider__input_handle_min js-uk-min" name="range_1" type="range" min="1" max="100" value="1" /> <input class="uk-slider__input uk-slider__input_handle_max js-uk-max" name="range_1" type="range" min="1" max="100" value="100" orient="vertical" /> </div> <div class="uk-slider__value_block uk-slider__value_block_orient_vertical" > <input type="text" value="1000" class="uk-slider__range_value uk-slider__range_value_min left js-uk-range_min" /> <input type="text" value="100000" class="uk-slider__range_value uk-slider__range_value_max right js-uk-range_max" /> </div>')

    $('body').append(horizontalSlider)
    // $('body').append(verticalSlider)
}

(function handleRange() {
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
            $(minBtn).val($(range_min).val() / 1000)
            if ($(range_min).val() > $(range_max).val() - 1000) {
                $(minBtn).val(maxVal - 3);
                $(range_min).val($(range_max).val() - 1000)
            }
        });

        $(range_min).val((minVal * 1000));

        if (maxVal < minVal + 3) {
            $(maxBtn).val(minVal + 3);
        }

        $(range_max).change(function () {
            $(maxBtn).val($(this).val() / 1000)
            if ($(range_max).val() < $(range_min).val() - 1000) {
                $(maxBtn).val(maxVal + 3);
                $(range_max).val(Number($(range_min).val()) + 1000)
            }
        });
        $(range_max).val((maxVal * 1000));
    }

    $('.uk-slider__input').on('input', rangeInputChangeEventHandler)

    $('.uk-slider__input').trigger('input')

})()




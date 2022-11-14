function initSlider(wrapper, settings) {
    let orientation
    let visible
    if (settings.orientation === 'vertical') {
        orientation = 'uk-slider__range_orient_vertical'
        inputsOrientation = 'uk-slider__value_block_orient_vertical'
    } else {
        orientation = ''
        inputsOrientation = ''
    }
    if (settings.interval === 'single') {
        visible = 'hidden'
    }
    let slider = $(`<div class="uk-slider__range ${orientation}"> <input class="uk-slider__input uk-slider__input_handle_min js-uk-min" name="range_1"  type="range" min="${settings.minValue}" max="${settings.maxValue}" value="${settings.minValue}" orient="vertical" /> <input class="uk-slider__input uk-slider__input_handle_max js-uk-max ${visible}" name="range_1" type="range" min="${settings.minValue}" max="${settings.maxValue}" value="${settings.maxValue}" orient="vertical" /> </div> </div> <div class="uk-slider__value_block ${inputsOrientation}"> <input type="text" value="${settings.minValue}" class="uk-slider__range_value uk-slider__range_value_min left js-uk-range_min" /> <input type="text" value="${settings.maxValue}" class="uk-slider__range_value uk-slider__range_value_max right js-uk-range_max ${visible}" />`)

    $(wrapper).append(slider)
}


export default initSlider
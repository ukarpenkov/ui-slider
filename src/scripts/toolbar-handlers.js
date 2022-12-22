
export function changeMinScale() {
    let minScaleInput = $(this)
    let minScaleValue = $(minScaleInput).val()
    let wrap = $(minScaleInput).parent().parent().parent().children()
    let slider1 = ($(wrap).children().children())[0]
    let slider2 = ($(wrap).children().children())[1]
    let valueBlock = (($(wrap).children().children())[2])
    $(slider1).attr('min', minScaleValue)
    $(slider2).attr('min', minScaleValue)
    $(valueBlock).val() < minScaleValue ? $(valueBlock).val(minScaleValue) : null
}

export function changeMaxScale() {
    let maxScaleInput = $(this)
    let maxScaleValue = $(maxScaleInput).val()
    let wrap = $(maxScaleInput).parent().parent().parent().children()
    let slider1 = ($(wrap).children().children())[0]
    let slider2 = ($(wrap).children().children())[1]
    let valueBlock = (($(wrap).children().children())[3])
    $(slider1).attr('max', maxScaleValue)
    $(slider2).attr('max', maxScaleValue)
    $(valueBlock).val() > maxScaleValue ? $(valueBlock).val(maxScaleValue) : null

}

export function changeMinPos() {
    let minPositionInput = $(this)
    let minPosValue = $(minPositionInput).val()
    let wrap = $(minPositionInput).parent().parent().parent().children()
    let valueBlock = (($(wrap).children().children())[2])
    let minBtn = (($(wrap).children().children())[0])
    $(valueBlock).val(minPosValue)
    $(minBtn).val(minPosValue)
}

export function changeMaxPos() {
    let maxPositionInput = $(this)
    let maxPosValue = $(maxPositionInput).val()
    let wrap = $(maxPositionInput).parent().parent().parent().children()
    let valueBlock = (($(wrap).children().children())[3])
    let maxBtn = (($(wrap).children().children())[1])
    $(valueBlock).val(maxPosValue)
    $(maxBtn).val(maxPosValue)
}

export function changeScaleStep() {
    let scaleStepInput = $(this)
    let wrap = $(scaleStepInput).parent().parent().parent().children()
    let slider = ($(wrap).children())[0]
    let minSlider = ($(slider).children())[0]
    let sliderStep = $(minSlider).attr('step')
    console.log(minSlider, sliderStep)
    $(minSlider).attr('step', scaleStepInput.val())
}


export function changeOrientation() {
    let verticalOrHorizontalCheckbox = $(this)
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
}

export function changeSingleOrRange() {
    let singleOrRangeCheckbox = $(this)
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
}

export function changeVisibleProgressBar() {
    let progressBarCheckbox = $(this)
    let wrap = $(progressBarCheckbox).parent().parent().parent().parent().children()
    let valueBlock = ($(wrap).children())[1]

    if ($(progressBarCheckbox).is(':checked')) {
        $(valueBlock).addClass('hidden')
    }
    else {
        $(valueBlock).removeClass('hidden')
    }
}

export function changeVisibleSlider() {
    let scaleCheckbox = $(this)
    let wrap = $(scaleCheckbox).parent().parent().parent().parent().children()
    let slider = ($(wrap).children())[0]

    if ($(scaleCheckbox).is(':checked')) {
        $(slider).addClass('hidden')
    }
    else {
        $(slider).removeClass('hidden')
    }
}

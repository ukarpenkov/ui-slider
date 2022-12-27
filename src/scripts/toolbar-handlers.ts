export function changeMinScale(): void {
  let minScaleInput: JQuery<object> = $(this)
  let minScaleValue: number = Number($(minScaleInput).val())
  let wrap: JQuery<object> = $(minScaleInput)
    .parent()
    .parent()
    .parent()
    .children()
  let slider1: HTMLElement = $(wrap).children().children()[0]
  let slider2: HTMLElement = $(wrap).children().children()[1]
  let valueBlock: HTMLElement = $(wrap).children().children()[2]
  let currentValue: number = Number($(valueBlock).val())
  $(slider1).attr('min', minScaleValue)
  $(slider2).attr('min', minScaleValue)
  currentValue < minScaleValue ? $(valueBlock).val(minScaleValue) : null
}

export function changeMaxScale(): void {
  let maxScaleInput: JQuery<object> = $(this)
  let maxScaleValue: number = Number($(maxScaleInput).val())
  let wrap: JQuery<object> = $(maxScaleInput)
    .parent()
    .parent()
    .parent()
    .children()
  let slider1: HTMLElement = $(wrap).children().children()[0]
  let slider2: HTMLElement = $(wrap).children().children()[1]
  let valueBlock: HTMLElement = $(wrap).children().children()[3]
  let currentValue: number = Number($(valueBlock).val())
  $(slider1).attr('max', maxScaleValue)
  $(slider2).attr('max', maxScaleValue)
  currentValue > maxScaleValue ? $(valueBlock).val(maxScaleValue) : null
}

export function changeMinPos(): void {
  let minPositionInput: JQuery<object> = $(this)
  let minPosValue: number = Number($(minPositionInput).val())
  let wrap: JQuery<object> = $(minPositionInput)
    .parent()
    .parent()
    .parent()
    .children()
  let valueBlock: HTMLElement = $(wrap).children().children()[2]
  let minBtn: HTMLElement = $(wrap).children().children()[0]
  $(valueBlock).val(minPosValue)
  $(minBtn).val(minPosValue)
}

export function changeMaxPos(): void {
  let maxPositionInput: JQuery<object> = $(this)
  let maxPosValue: number = Number($(maxPositionInput).val())
  let wrap: JQuery<object> = $(maxPositionInput)
    .parent()
    .parent()
    .parent()
    .children()
  let valueBlock: HTMLElement = $(wrap).children().children()[3]
  let maxBtn: HTMLElement = $(wrap).children().children()[1]
  $(valueBlock).val(maxPosValue)
  $(maxBtn).val(maxPosValue)
}

export function changeScaleStep(): void {
  let scaleStepInput: JQuery<object> = $(this)
  let scaleStepInputValue: number = Number(scaleStepInput.val())
  let wrap: JQuery<object> = $(scaleStepInput)
    .parent()
    .parent()
    .parent()
    .children()
  let slider: HTMLElement = $(wrap).children()[0]
  let minSlider: HTMLElement = $(slider).children()[0]
  $(minSlider).attr('step', scaleStepInputValue)
}

export function changeOrientation(): void {
  let verticalOrHorizontalCheckbox: JQuery<object> = $(this)
  let wrap: JQuery<object> = $(verticalOrHorizontalCheckbox)
    .parent()
    .parent()
    .parent()
    .parent()
    .children()
  let slider: HTMLElement = $(wrap).children()[0]
  let valueBlock: HTMLElement = $(wrap).children()[1]
  if ($(verticalOrHorizontalCheckbox).is(':checked')) {
    $(slider).addClass('uk-slider__range_orient_vertical')
    $(valueBlock).addClass('uk-slider__value_block_orient_vertical')
  } else {
    $(slider).removeClass('uk-slider__range_orient_vertical')
    $(valueBlock).removeClass('uk-slider__value_block_orient_vertical')
  }
  if (!$(verticalOrHorizontalCheckbox).is(':checked')) {
    $(slider).removeClass('uk-slider__range_orient_vertical')
    $(valueBlock).removeClass('uk-slider__value_block_orient_vertical')
  }
}

export function changeSingleOrRange(): void {
  let singleOrRangeCheckbox: JQuery<object> = $(this)
  let wrap: JQuery<object> = $(singleOrRangeCheckbox)
    .parent()
    .parent()
    .parent()
    .parent()
    .children()
  let slider: HTMLElement = $(wrap).children()[0]
  let valueBlock: HTMLElement = $(wrap).children()[1]
  let secondSlider: HTMLElement = $(slider).children()[1]
  let secondValueBlock: HTMLElement = $(valueBlock).children()[1]

  if ($(singleOrRangeCheckbox).is(':checked')) {
    $(secondSlider).addClass('hidden')
    $(secondValueBlock).addClass('hidden')
  } else {
    $(secondSlider).removeClass('hidden')
    $(secondValueBlock).removeClass('hidden')
  }
}

export function changeVisibleProgressBar(): void {
  let progressBarCheckbox: JQuery<object> = $(this)
  let wrap: JQuery<object> = $(progressBarCheckbox)
    .parent()
    .parent()
    .parent()
    .parent()
    .children()
  let valueBlock: HTMLElement = $(wrap).children()[1]

  if ($(progressBarCheckbox).is(':checked')) {
    $(valueBlock).addClass('hidden')
  } else {
    $(valueBlock).removeClass('hidden')
  }
}

export function changeVisibleSlider(): void {
  let scaleCheckbox: JQuery<object> = $(this)
  let wrap: JQuery<object> = $(scaleCheckbox)
    .parent()
    .parent()
    .parent()
    .parent()
    .children()
  let slider: HTMLElement = $(wrap).children()[0]

  if ($(scaleCheckbox).is(':checked')) {
    $(slider).addClass('hidden')
  } else {
    $(slider).removeClass('hidden')
  }
}

import { store } from './model/store'
import { updateSliders } from './updateSliders'
import initSlider from './view-init-slider'
import initToolBar from './view-init-toolbar'

export function changeMinScale(): void {
  let minScaleInput: JQuery<object> = $(this)
  let minScaleValue: number = Number($(minScaleInput).val())
  let maxScaleInput: JQuery<object> = $(minScaleInput).next()
  let wrap: JQuery<object> = $(minScaleInput)
    .parent()
    .parent()
    .parent()
    .children()
  let slider1: HTMLElement = $(wrap).children().children()[0]
  let slider2: HTMLElement = $(wrap).children().children()[1]
  let valueBlock: HTMLElement = $(wrap).children().children()[2]
  let currentValue: number = Number($(valueBlock).val())
  let maxBtn: HTMLElement = $(wrap).children().children()[1]
  let maxBtnValue: number = Number($(maxBtn).val())
  $(maxScaleInput).val(maxBtnValue)
  let maxScaleValue: number = Number($(maxScaleInput).val())
  if (minScaleValue < 0) {
    minScaleValue = 0
    $(minScaleInput).val(0)
  }
  $(maxScaleInput).val(maxBtnValue)
  if (minScaleValue > maxScaleValue) {
    minScaleValue = maxScaleValue - 3
    $(minScaleInput).val(maxScaleValue - 3)
  }
  $(slider1).attr('min', minScaleValue)
  $(slider2).attr('min', minScaleValue)
  currentValue < minScaleValue ? $(valueBlock).val(minScaleValue) : null
}

export function changeMaxScale(): void {
  let maxScaleInput: JQuery<object> = $(this)
  let maxScaleValue: number = Number($(maxScaleInput).val())
  let minScaleInput: JQuery<object> = $(maxScaleInput).prev()
  let wrap: JQuery<object> = $(maxScaleInput)
    .parent()
    .parent()
    .parent()
    .children()
  let slider1: HTMLElement = $(wrap).children().children()[0]
  let slider2: HTMLElement = $(wrap).children().children()[1]
  let valueBlock: HTMLElement = $(wrap).children().children()[3]
  let minValueBlock: HTMLElement = $(wrap).children().children()[2]
  let currentValue: number = Number($(valueBlock).val())
  let minBtn: HTMLElement = $(wrap).children().children()[0]
  let minBtnValue: number = Number($(minBtn).val())
  $(minScaleInput).val(minBtnValue)
  let minScaleValue: number = Number($(minScaleInput).val())
  if (maxScaleValue < 0) {
    maxScaleValue = 3
    maxScaleInput.val(3)
    $(minScaleInput).val(maxScaleValue - 3)
    $(minBtn).val(maxScaleValue - 3)
  }
  if (minScaleValue) {
    if (maxScaleValue < minScaleValue) {
      maxScaleValue = minScaleValue + 3
      maxScaleInput.val(minScaleValue + 3)
    }
  }
  $(slider1).attr('max', maxScaleValue)
  $(slider2).attr('max', maxScaleValue)
  currentValue > maxScaleValue ? $(valueBlock).val(maxScaleValue) : null
}

export function changeMinPos(): void {
  let minPositionInput: JQuery<object> = $(this)
  console.log(minPositionInput)
  let minPosValue: number = Number($(minPositionInput).val())
  let wrap: JQuery<object> = $(minPositionInput).parent().parent().parent()
  console.log('WRAP', wrap)
  let valueBlock: HTMLElement = $(wrap).children().children()[2]
  console.log('VALL', valueBlock)
  let minBtn: HTMLElement = $(wrap).children().children().children()[0]
  let minBtnValue = Number($(minBtn).val())
  let maxBtn: HTMLElement = $(wrap).children().children().children()[1]
  let maxBtnValue = Number($(maxBtn).val())

  let slider: HTMLElement = $(wrap).children()
  let sliderId = $(slider)
    .parent()
    .parent()
    .children()
    .attr('class')
    .split(' ')[0]
  console.log('iddddd', sliderId)
  store.dispatch({
    type: 'CHANGE_MIN_VAL',
    id: sliderId,
    payload: minBtnValue,
  })
  updateSliders()
  console.log(store.getState())
  if (minPosValue > maxBtnValue) {
    $(minPositionInput).val(minBtnValue)
    $(valueBlock).val(maxBtnValue - 1)
    $(minPositionInput).val(maxBtnValue - 1)
    $(minBtn).val(maxBtnValue - 1)
    return
  }
  if (minPosValue < 0) {
    $(valueBlock).val(1)
    $(minPositionInput).val(1)
    return
  }

  $(minBtn).val(Number(minPosValue))
  $(valueBlock).val(minPosValue)
  $(minPositionInput).val(Number($(minBtn).val()))
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
  let valueBlockVal: number = Number($(valueBlock).val())
  let minBtn: HTMLElement = $(wrap).children().children()[0]
  let minBtnValue = Number($(minBtn).val())
  let maxBtn: HTMLElement = $(wrap).children().children()[1]
  let maxBtnValue = Number($(maxBtn).val())
  if (valueBlockVal < minBtnValue) {
    $(valueBlock).val(minBtnValue)
    $(maxPositionInput).val(minBtnValue)
    $(maxBtn).val(minBtnValue)
  }
  if (maxPosValue <= 0) {
    $(valueBlock).val(1)
    maxPosValue = 1
    $(maxPositionInput).val(1)
  }
  if (maxPosValue < minBtnValue) {
    $(maxPositionInput).val(maxBtnValue)
    $(valueBlock).val(minBtnValue + 1)
    $(maxPositionInput).val(minBtnValue + 1)
    $(maxBtn).val(minBtnValue + 1)
    return
  }
  $(maxBtn).val(maxPosValue)
  $(valueBlock).val(maxPosValue)
  $(maxPositionInput).val(Number($(maxBtn).val()))
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
  let maxSlider: HTMLElement = $(slider).children()[1]
  $(minSlider).attr('step', scaleStepInputValue)
  $(maxSlider).attr('step', scaleStepInputValue)
}

export function changeOrientation(): void {
  let verticalOrHorizontalCheckbox: JQuery<object> = $(this)
  let toolbarContainer = $(verticalOrHorizontalCheckbox)
    .parent()
    .parent()
    .parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  if ($(verticalOrHorizontalCheckbox).is(':checked')) {
    store.dispatch({
      type: 'VERTICAL_ORIENTANTION',
      id: toolbarId,
    })
  } else {
    store.dispatch({
      type: 'HORIZONTAL_ORIENTANTION',
      id: toolbarId,
    })
  }
  updateSliders()
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
  let sliderId = $(slider).parent().parent().attr('class').split(' ')[0]
  if ($(singleOrRangeCheckbox).is(':checked')) {
    $(secondSlider).addClass('hidden')
    $(secondValueBlock).addClass('no-vis')
    store.dispatch({
      type: 'SET_SINGLE',
      id: sliderId,
    })
    console.log(store.getState())
  } else {
    $(secondSlider).removeClass('hidden')
    $(secondValueBlock).removeClass('no-vis')
    store.dispatch({
      type: 'SET_INTERVAL',
      id: sliderId,
    })
    console.log(store.getState())
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

import { store } from './model/store'
import { updateSliders, updateToolbar } from './updateSliders'
import initSlider from './view-init-slider'
import initToolBar from './view-init-toolbar'

export function changeMinScale(): void {
  let minScaleInput: JQuery<object> = $(this)
  let toolbarContainer = $(minScaleInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  let minScaleValue: number = Number($(minScaleInput).val())
  let maxScaleValue = Number($(minScaleInput).next().val())
  if (minScaleValue > maxScaleValue) {
    minScaleValue = maxScaleValue
  }
  store.dispatch({
    type: 'CHANGE_MIN_SCALE',
    id: toolbarId,
    payload: minScaleValue,
  })
  updateSliders()
  updateToolbar()

  console.log(store.getState())
}

export function changeMaxScale(): void {
  let maxScaleInput: JQuery<object> = $(this)
  let toolbarContainer = $(maxScaleInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  let maxScaleValue: number = Number($(maxScaleInput).val())
  let minScaleValue = Number($(maxScaleInput).prev().val())
  if (maxScaleValue < minScaleValue) {
    maxScaleValue = minScaleValue
  }
  store.dispatch({
    type: 'CHANGE_MAX_SCALE',
    id: toolbarId,
    payload: maxScaleValue,
  })
  updateSliders()
}
export function changeMinPos(): void {
  let minPositionInput: JQuery<object> = $(this)
  let toolbarContainer = $(minPositionInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  let minPosValue: number = Number($(minPositionInput).val())

  store.dispatch({
    type: 'CHANGE_MIN_VAL',
    id: toolbarId,
    payload: minPosValue,
  })
  updateSliders()
  // !!!!!!!!!!!!!!!!!!НАДО ДОПИСАТЬ ЛОГИКУ КОГДА МИН БОЛЬШЕ МАКС!!!!!!!!!!!!
}

export function changeMaxPos(): void {
  let maxPositionInput: JQuery<object> = $(this)
  let toolbarContainer = $(maxPositionInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  let maxPosValue: number = Number($(maxPositionInput).val())
  store.dispatch({
    type: 'CHANGE_MAX_VAL',
    id: toolbarId,
    payload: maxPosValue,
  })
  updateSliders()
}

export function changeScaleStep(): void {
  let scaleStepInput: JQuery<object> = $(this)
  let toolbarContainer = $(scaleStepInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  let scaleStepInputValue: number = Number(scaleStepInput.val())
  store.dispatch({
    type: 'CHANGE_STEP',
    id: toolbarId,
    payload: scaleStepInputValue,
  })
  updateSliders()
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
  let toolbarContainer = $(singleOrRangeCheckbox).parent().parent().parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  if ($(singleOrRangeCheckbox).is(':checked')) {
    store.dispatch({
      type: 'SET_SINGLE',
      id: toolbarId,
    })
  } else {
    store.dispatch({
      type: 'SET_INTERVAL',
      id: toolbarId,
    })
  }
  updateSliders()
}

export function changeVisibleProgressBar(): void {
  let progressBarCheckbox: JQuery<object> = $(this)
  let toolbarContainer = $(progressBarCheckbox).parent().parent().parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  console.log(toolbarId)
  let valueBlocks: HTMLElement = document.querySelectorAll(
    '.uk-slider__value_block '
  )

  if ($(progressBarCheckbox).is(':checked')) {
    valueBlocks.forEach((element) => {
      store.dispatch({
        type: 'ON_TOOLBAR',
        id: toolbarId,
      })
      // element.classList.add('hidden')
    })
  } else {
    valueBlocks.forEach((element) => {
      store.dispatch({
        type: 'OFF_TOOLBAR',
        id: toolbarId,
      })
      // element.classList.remove('hidden')
    })
  }
  updateSliders()
}

export function changeVisibleTooltips(): void {
  let tooltipCheckbox: JQuery<object> = $(this)
  let toolbarContainer = $(tooltipCheckbox).parent().parent().parent()[0]
  let toolbarId = $(toolbarContainer).attr('class').split(' ')[1]
  let maxTooltip = document.querySelector('.js-tooltip-slider-max')
  let minTooltip = document.querySelector('.js-tooltip-slider-min')
  if ($(tooltipCheckbox).is(':checked')) {
    store.dispatch({
      type: 'ON_TOOLTIP',
      id: toolbarId,
    })
    maxTooltip.style.visibility = 'visible'
    minTooltip.style.visibility = 'visible'
  } else {
    store.dispatch({
      type: 'OFF_TOOLTIP',
      id: toolbarId,
    })
    maxTooltip.style.visibility = 'hidden'
    minTooltip.style.visibility = 'hidden'
  }
}

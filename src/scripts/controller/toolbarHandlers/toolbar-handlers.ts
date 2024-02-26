import { store } from '../../model/store'
import { updateSliders, updateToolbar } from '../updateSlider/updateSliders'
import initSlider from '../../view/components/initSlider/view-init-slider'
import initToolBar from '../../view/components/initToolbar/view-init-toolbar'

export function changeMinScale(this: JQuery<Element>): void {
  let minScaleInput = $(this)
  let toolbarContainer: Element = $(minScaleInput).parent().parent()[0]
  let toolbarId: string | undefined = $(toolbarContainer)
    ?.attr('class')
    ?.split(' ')[1]
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

export function changeMaxScale(this: JQuery<Element>): void {
  let maxScaleInput = $(this)
  let toolbarContainer = $(maxScaleInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer)?.attr('class')?.split(' ')[1]
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
export function changeMinPos(this: JQuery<Element>): void {
  let minPositionInput = $(this)
  let toolbarContainer = $(minPositionInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer)?.attr('class')?.split(' ')[1]
  let minPosValue: number = Number($(minPositionInput).val())
  store.dispatch({
    type: 'CHANGE_MIN_VAL',
    id: toolbarId,
    payload: minPosValue,
  })
  updateSliders()
}

export function changeMaxPos(this: JQuery<Element>): void {
  let maxPositionInput = $(this)
  let toolbarContainer = $(maxPositionInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer)?.attr('class')?.split(' ')[1]
  let maxPosValue: number = Number($(maxPositionInput).val())
  store.dispatch({
    type: 'CHANGE_MAX_VAL',
    id: toolbarId,
    payload: maxPosValue,
  })
  updateSliders()
}

export function changeScaleStep(this: JQuery<Element>): void {
  let scaleStepInput = $(this)
  let toolbarContainer = $(scaleStepInput).parent().parent()[0]
  let toolbarId = $(toolbarContainer)?.attr('class')?.split(' ')[1]
  let scaleStepInputValue: number = Number(scaleStepInput.val())
  store.dispatch({
    type: 'CHANGE_STEP',
    id: toolbarId,
    payload: scaleStepInputValue,
  })
  updateSliders()
}

export function changeOrientation(this: JQuery<Element>): void {
  let verticalOrHorizontalCheckbox: JQuery<object> = $(this)
  let toolbarContainer = $(verticalOrHorizontalCheckbox)
    .parent()
    .parent()
    .parent()[0]
  let toolbarId = $(toolbarContainer)?.attr('class')?.split(' ')[1]
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

export function changeSingleOrRange(this: JQuery<Element>): void {
  let singleOrRangeCheckbox = $(this)
  let toolbarContainer = $(singleOrRangeCheckbox).parent().parent().parent()[0]
  let toolbarId = $(toolbarContainer)?.attr('class')?.split(' ')[1]
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

export function changeVisibleProgressBar(this: JQuery<Element>): void {
  let progressBarCheckbox = $(this)
  let toolbarContainer = $(progressBarCheckbox).parent().parent().parent()[0]
  let toolbarId = $(toolbarContainer)?.attr('class')?.split(' ')[1]
  let valueBlocks: NodeListOf<Element> = document.querySelectorAll(
    '.uk-slider__value_block '
  )
  if ($(progressBarCheckbox).is(':checked')) {
    valueBlocks.forEach((element) => {
      store.dispatch({
        type: 'ON_TOOLBAR',
        id: toolbarId,
      })
    })
  } else {
    valueBlocks.forEach((element) => {
      store.dispatch({
        type: 'OFF_TOOLBAR',
        id: toolbarId,
      })
    })
  }
  updateSliders()
}

export function changeVisibleTooltips(this: JQuery<Element>): void {
  let tooltipCheckbox = $(this)
  let toolbarContainer = $(tooltipCheckbox).parent().parent().parent()[0]
  let toolbarId = $(toolbarContainer)?.attr('class')?.split(' ')[1]
  let maxTooltip: HTMLElement | null = document.querySelector(
    '.js-tooltip-slider-max'
  )
  let minTooltip: HTMLElement | null = document.querySelector(
    '.js-tooltip-slider-min'
  )
  if ($(tooltipCheckbox).is(':checked')) {
    store.dispatch({
      type: 'ON_TOOLTIP',
      id: toolbarId,
    })
    if (maxTooltip) {
      maxTooltip.style.visibility = 'visible'
    }
    if (minTooltip) {
      minTooltip.style.visibility = 'visible'
    }
  } else {
    store.dispatch({
      type: 'OFF_TOOLTIP',
      id: toolbarId,
    })
    if (maxTooltip) {
      maxTooltip.style.visibility = 'hidden'
    }
    if (minTooltip) {
      minTooltip.style.visibility = 'hidden'
    }
  }
}

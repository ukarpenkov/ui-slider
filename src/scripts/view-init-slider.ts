import { store } from './model/store'
import { updateSliders, updateToolbar } from './updateSliders'
import { inputTooltip } from './view/components/input-tooltips/input-tooltips'

type Settings = {
  minValue: number
  maxValue: number
  orientation: string
  interval: string
}

function initSlider(wrapper: string) {
  let state = store.getState()
  let sliderRendering = (data) => {
    return data.map((item) => {
      return $(`
    <div class="${item.id} slider-wrapper">  
    <div class="slider-tem">
      <div class="uk-slider__range ${
        item.orientation === 'vertical'
          ? 'uk-slider__range_orient_vertical'
          : ''
      }">
      <input title="${
        item.minValue
      }" class="uk-slider__input uk-slider__input_handle_min js-uk-min" name="range_1" type="range" min="${
        item.minScale
      }" max="${item.maxScale}" value="${item.minValue}" step="${
        item.step
      }" orient="vertical"  />
      <input class="uk-slider__input uk-slider__input_handle_max js-uk-max ${
        item.interval === 'single' ? 'hidden' : ''
      }" name="range_1" type="range" min="${item.minScale}"
      max="${item.maxScale}" value="${
        item.maxValue
      }" orient="vertical" step="${1}"/>
      </div>
      <div class="js-tooltip-slider-min">${item.minValue}</div>
      <div class="js-tooltip-slider-max">${item.maxValue}</div>
      <div class="uk-slider__value_block ${
        item.orientation === 'vertical'
          ? 'uk-slider__value_block_orient_vertical'
          : ''
      }">
      <input type="number" value="${
        item.minValue
      }" min="0" max="99999999" class="uk-slider__range_value uk-slider__range_value_min left js-uk-range_min" />
      <input type="number" value="${
        item.maxValue
      }" min="0" max="99999999" class="uk-slider__range_value uk-slider__range_value_max right js-uk-range_max ${
        item.interval === 'single' ? 'no-vis' : ''
      }" />
      </div>
  
      </div>
    </div>
  `)
    })
  }

  const slidersContainer = $('<div class="sliders-container"></div>')
  $(wrapper).append(slidersContainer)
  $(slidersContainer).append(sliderRendering(state))
  ;(function handleRange(): void {
    function rangeInputChangeEventHandler(): void {
      var minBtn: JQuery<HTMLElement> = $(this).parent().children('.js-uk-min')
      var maxBtn: JQuery<HTMLElement> = $(this).parent().children('.js-uk-max')
      var range_min: JQuery<HTMLElement> = $(this)
        .parent()
        .parent()
        .children('.uk-slider__value_block')
        .children('.js-uk-range_min')
      var range_max: JQuery<HTMLElement> = $(this)
        .parent()
        .parent()
        .children('.uk-slider__value_block')
        .children('.js-uk-range_max')
      var minVal: number = Number($(minBtn).val())
      var maxVal: number = Number($(maxBtn).val())
      let sliderId = $(range_min).parent().parent().parent()[0].classList[0]
      updateToolbar()

      if (minVal > maxVal - 1) {
        $(minBtn).val(maxVal)
      }
      $(range_min).change(function () {
        let currentValue = Number($(this).val()) / 1
        $(minBtn).val(currentValue)
        store.dispatch({
          type: 'CHANGE_MIN_VAL',
          id: sliderId,
          payload: currentValue,
        })
        if (Number($(range_min).val()) > Number($(range_max).val())) {
          $(minBtn).val(maxVal)
          $(range_min).val(Number($(range_max).val()))
          store.dispatch({
            type: 'CHANGE_MIN_VAL',
            id: sliderId,
            payload: currentValue,
          })
        }
        updateToolbar()
      })

      $(range_min).val(minVal * 1)
      if (maxVal < minVal) {
        $(maxBtn).val(minVal)
      }
      $(range_max).change(function () {
        let currentValue = Number($(this).val()) / 1
        $(maxBtn).val(currentValue)
        if (Number($(range_max).val()) < Number($(range_min).val())) {
          $(maxBtn).val(maxVal)
          $(range_max).val(Number($(range_min).val()))
        }
        store.dispatch({
          type: 'CHANGE_MAX_VAL',
          id: sliderId,
          payload: currentValue,
        })
        updateToolbar()
      })
      $(range_max).val(maxVal * 1)
      store.dispatch({
        type: 'CHANGE_MIN_VAL',
        id: sliderId,
        payload: minVal,
      })
      store.dispatch({
        type: 'CHANGE_MAX_VAL',
        id: sliderId,
        payload: maxVal,
      })
    }

    $('.uk-slider__input').on('input', rangeInputChangeEventHandler)
    $('.uk-slider__input').trigger('input')
  })()
}

export default initSlider

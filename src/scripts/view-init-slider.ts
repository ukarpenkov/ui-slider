type Settings = {
  minValue: number
  maxValue: number
  orientation: string
  interval: string
}

function initSlider(wrapper: string, settings: Settings): Settings {
  let orientation: string
  let visible: string = ''
  let inputsOrientation: string
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
  let slider: JQuery<HTMLElement> = $(`
        <div class="uk-slider__range ${orientation}">
        <input class="uk-slider__input uk-slider__input_handle_min js-uk-min" name="range_1" type="range" min="${settings.minValue}" max="${settings.maxValue}" value="${settings.minValue}" orient="vertical" step="1"/>
        <input class="uk-slider__input uk-slider__input_handle_max js-uk-max ${visible}" name="range_1" type="range" min="${settings.minValue}"
        max="${settings.maxValue}" value="${settings.maxValue}" orient="vertical" step="1"/>
        </div>
        <div class="uk-slider__value_block ${inputsOrientation}">
        <input type="number" value="${settings.minValue}" min="0" max="99999999" class="uk-slider__range_value uk-slider__range_value_min left js-uk-range_min" />
        <input type="number" value="${settings.maxValue}" min="0" max="99999999" class="uk-slider__range_value uk-slider__range_value_max right js-uk-range_max ${visible}" />
        </div>
        `)

  $(wrapper).append(slider)

  let exportSettings = settings

  ;(function handleRange(): void {
    function rangeInputChangeEventHandler(e): void {
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
      if (minVal > maxVal - 1) {
        $(minBtn).val(maxVal)
      }
      $(range_min).change(function () {
        $(minBtn).val(Number($(this).val()) / 1)
        if (Number($(range_min).val()) > Number($(range_max).val()) - 1) {
          $(minBtn).val(maxVal - 1)
          $(range_min).val(Number($(range_max).val()))
        }
      })
      $(range_min).val(minVal * 1)
      if (maxVal < minVal + 1) {
        $(maxBtn).val(minVal + 1)
      }
      $(range_max).change(function () {
        $(maxBtn).val(Number($(this).val()) / 1)
        if (Number($(range_max).val()) < Number($(range_min).val()) - 1) {
          $(maxBtn).val(maxVal + 1)
          $(range_max).val(Number($(range_min).val()))
        }
      })
      $(range_max).val(maxVal * 1)
    }
    $('.uk-slider__input').on('input', rangeInputChangeEventHandler)
    $('.uk-slider__input').trigger('input')
  })()

  return exportSettings
}

export default initSlider

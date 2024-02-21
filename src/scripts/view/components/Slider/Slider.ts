export const Slider = (props) => {
  return $(`
  <div class="uk-slider__range ${props.orientation}">
  <input class="uk-slider__input uk-slider__input_handle_min js-uk-min" name="range_1" type="range" min="${props.minValue}" max="${settings.maxValue}" value="${props.minValue}" orient="vertical" step="1"/>
  <input class="uk-slider__input uk-slider__input_handle_max js-uk-max ${props.display}" name="range_1" type="range" min="${props.minValue}"
  max="${props.maxValue}" value="${props.maxValue}" orient="vertical" step="1"/>
  </div>
  <div class="uk-slider__value_block ${props.orientation}">
  <input type="number" value="${props.minValue}" min="0" max="99999999" class="uk-slider__range_value uk-slider__range_value_min left js-uk-range_min" />
  <input type="number" value="${props.maxValue}" min="0" max="99999999" class="uk-slider__range_value uk-slider__range_value_max right js-uk-range_max ${props.visibility}" />
  </div>
  `)
}

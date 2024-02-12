import './import-jquery'
import initSlider from './view-init-slider'
import { store } from './model/store'
import {
  inputTooltip,
  setTooltip,
  simple_tooltip,
  tooltip,
} from './view/components/input-tooltips/input-tooltips'

store.dispatch({
  type: 'ADD_SLIDER',
  id: 'id2',
  interval: 'interval',
  orientation: 'horizontal',
  minValue: 1,
  maxValue: 20,
  minScale: 1,
  maxScale: 20,
  step: 1,
})
store.dispatch({
  type: 'ADD_SLIDER',
  id: 'id3',
  interval: 'single',
  orientation: 'vertical',
  minValue: 1,
  maxValue: 20,
  minScale: 1,
  maxScale: 20,
  step: 1,
})
store.dispatch({
  type: 'ADD_SLIDER',
  id: 'id4',
  interval: 'single',
  orientation: 'vertical',
  minValue: 1,
  maxValue: 100,
  minScale: 1,
  maxScale: 100,
  step: 1,
})

initSlider('.slider-page', '.tooltip')
// inputTooltip()
// simple_tooltip()
// $(function () {
//   $(document).tooltip()
// })
setTooltip()

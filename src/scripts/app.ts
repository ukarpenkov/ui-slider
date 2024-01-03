import './import-jquery'
import SliderSettings from './slider-settings'
import initSlider from './view-init-slider'
import initToolBar from './view-init-toolbar'
import {
  changeMaxPos,
  changeMaxScale,
  changeMinPos,
  changeMinScale,
  changeOrientation,
  changeScaleStep,
  changeSingleOrRange,
  changeVisibleProgressBar,
  changeVisibleSlider,
} from './toolbar-handlers'
import { store } from './model/store'

// let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
// let settings2 = new SliderSettings('interval', 'vertical', 1, 300)
// let settings3 = new SliderSettings('single', 'horizontal', 1, 1000)

store.dispatch({
  type: 'ADD_SLIDER',
  id: 'id2',
  interval: 'interval',
  orientation: 'horizontal',
  minValue: 1,
  maxValue: 20,
})
store.dispatch({
  type: 'ADD_SLIDER',
  id: 'id3',
  interval: 'single',
  orientation: 'vertical',
  minValue: 1,
  maxValue: 20,
})
store.dispatch({
  type: 'ADD_SLIDER',
  id: 'id4',
  interval: 'single',
  orientation: 'vertical',
  minValue: 1,
  maxValue: 100,
})

console.log(store.getState())

initSlider('.slider-page')
// initSlider('.id3')
// initSlider('.id3', null)
// initSlider('.id4', null)

initToolBar('.id2')
initToolBar('.id3')
initToolBar('.id4')

$("input[name='minScale']").on('change', changeMinScale)
$("input[name='maxScale']").on('change', changeMaxScale)
$("input[name='minPosition']").on('change', changeMinPos)
$("input[name='maxPosition']").on('change', changeMaxPos)
$("input[name='scaleStep']").on('change', changeScaleStep)

$("input[name='verticalOrHorizontal']").on('change', changeOrientation)
$("input[name='singleOrRange']").on('change', changeSingleOrRange)
$("input[name='progressBar']").on('change', changeVisibleProgressBar)
$("input[name='scaleRange']").on('change', changeVisibleSlider)

let verticalCheckedCheckbox: any = $('input[name="verticalOrHorizontal"]')[1]
verticalCheckedCheckbox.checked = true

let singleCheckedCheckbox: any = $("input[name='singleOrRange']")[2]
singleCheckedCheckbox.checked = true

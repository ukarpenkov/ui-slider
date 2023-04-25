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

let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
let settings2 = new SliderSettings('interval', 'vertical', 1, 300)
let settings3 = new SliderSettings('single', 'horizontal', 1, 1000)

initSlider('.id2', settings1)
initSlider('.id3', settings2)
initSlider('.id4', settings3)

initToolBar('.js-page-item1')
initToolBar('.js-page-item2')
initToolBar('.js-page-item3')

$("input[name='minScale']").on('change', changeMinScale)
$("input[name='maxScale']").on('change', changeMaxScale)
$("input[name='minPosition']").on('change', changeMinPos)
$("input[name='maxPosition']").on('change', changeMaxPos)
$("input[name='scaleStep']").on('change', changeScaleStep)

$("input[name='verticalOrHorizontal']").on('change', changeOrientation)
$("input[name='singleOrRange']").on('change', changeSingleOrRange)
$("input[name='progressBar']").on('change', changeVisibleProgressBar)
$("input[name='scaleRange']").on('change', changeVisibleSlider)

let verticalCheckedCheckbox: jQuery<HTMLElement> = $(
  'input[name="verticalOrHorizontal"]'
)[1]

verticalCheckedCheckbox.checked = true

let singleCheckedCheckbox: jQuery<HTMLElement> = $(
  "input[name='singleOrRange']"
)[2]

singleCheckedCheckbox.checked = true

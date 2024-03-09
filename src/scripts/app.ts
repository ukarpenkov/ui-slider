import './utils/import-jquery'
import initSlider from './view/components/initSlider/view-init-slider'
import { store } from './model/store'
import {
  createToolTips,
  setTooltip,
} from './view/components/input-tooltips/input-tooltips'
import { AddSliderToStore } from './controller/addSliderToStore/addSliderToStore'

let slider1 = new AddSliderToStore(
  '1',
  'interval',
  'horizontal',
  1,
  50,
  1,
  100,
  1,
  true,
  true
)
slider1.init()

let slider2 = new AddSliderToStore(
  '2',
  'interval',
  'vertical',
  1,
  20,
  1,
  20,
  1,
  true,
  true
)
slider2.init()
let slider3 = new AddSliderToStore(
  '3',
  'single',
  'horizontal',
  1,
  20,
  1,
  20,
  1,
  true,
  true
)
slider3.init()

initSlider('.slider-page')
createToolTips()
setTooltip()

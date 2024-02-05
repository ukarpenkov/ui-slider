import { store } from './model/store'
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
import initSlider from './view-init-slider'
import initToolBar from './view-init-toolbar'
import { inputTooltip } from './view/components/input-tooltips/input-tooltips'

export const updateSliders = () => {
  $('.sliders-container').remove()
  initSlider('.slider-page')
}

export const updateToolbar = () => {
  $('.control-panel').remove()
  initToolBar('.toolbar-page')
  $("input[name='minScale']").on('change', changeMinScale)
  $("input[name='maxScale']").on('change', changeMaxScale)
  $("input[name='minPosition']").on('change', changeMinPos)
  $("input[name='maxPosition']").on('change', changeMaxPos)
  $("input[name='scaleStep']").on('change', changeScaleStep)

  $("input[name='verticalOrHorizontal']").on('change', changeOrientation)
  $("input[name='singleOrRange']").on('change', changeSingleOrRange)
  $("input[name='progressBar']").on('change', changeVisibleProgressBar)
  $("input[name='scaleRange']").on('change', changeVisibleSlider)
}

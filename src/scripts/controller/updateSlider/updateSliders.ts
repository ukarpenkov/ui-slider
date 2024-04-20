import {
  changeMaxPos,
  changeMaxScale,
  changeMinPos,
  changeMinScale,
  changeOrientation,
  changeScaleStep,
  changeSingleOrRange,
  changeVisibleProgressBar,
  changeVisibleTooltips,
} from '../toolbarHandlers/toolbar-handlers'
import initSlider from '../../view/components/initSlider/view-init-slider'
import initToolBar from '../../view/components/initToolbar/view-init-toolbar'
import { setTooltip } from '../../view/components/input-tooltips/input-tooltips'

export const updateSliders = () => {
  $('.sliders-container').remove()
  initSlider('.slider-page')
  setTooltip()
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
  $("input[name='scaleRange']").on('change', changeVisibleTooltips)
  setTooltip()
}

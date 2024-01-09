import initSlider from './view-init-slider'
import initToolBar from './view-init-toolbar'

export const updateSliders = () => {
  $('.slider-page').empty()
  initSlider('.slider-page')
  initToolBar('.id2')
  initToolBar('.id3')
  initToolBar('.id4')
}

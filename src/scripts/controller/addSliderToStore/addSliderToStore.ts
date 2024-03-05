import { store } from '../../model/store'

export class AddSliderToStore {
  id: string
  interval: 'single' | 'interval'
  orientation: 'vertical' | 'horizontal'
  minValue: number
  maxValue: number
  minScale: number
  maxScale: number
  step: number
  tooltip: boolean
  valueBlock: boolean
  constructor(
    id = '',
    interval: 'single' | 'interval' = 'interval',
    orientation: 'vertical' | 'horizontal' = 'horizontal',
    minValue = 1,
    maxValue = 100,
    minScale = 1,
    maxScale = 100,
    step = 1,
    tooltip = true,
    valueBlock = true
  ) {
    this.id = id
    this.interval = interval
    this.orientation = orientation
    this.minValue = minValue
    this.maxValue = maxValue
    this.minScale = minScale
    this.maxScale = maxScale
    this.step = step
    this.tooltip = tooltip
    this.valueBlock = valueBlock
  }
  init() {
    store.dispatch({
      type: 'ADD_SLIDER',
      id: this.id,
      interval: this.interval,
      orientation: this.orientation,
      minValue: this.minValue,
      maxValue: this.maxValue,
      minScale: this.minScale,
      maxScale: this.maxScale,
      step: this.step,
      tooltip: this.tooltip,
      valueBlock: this.valueBlock,
    })
  }
}

class SliderSettings {
  interval: string
  orientation: string
  inputsOrientation: string
  minValue: number
  maxValue: number
  constructor(
    interval: string,
    orientation: string,
    minValue: number,
    maxValue: number
  ) {
    this.interval = interval
    this.orientation = orientation
    this.inputsOrientation = orientation
    this.minValue = minValue
    this.maxValue = maxValue
  }
}

export default SliderSettings

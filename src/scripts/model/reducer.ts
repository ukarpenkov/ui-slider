import { store } from './store'

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_SLIDER':
      return [
        ...state,
        {
          id: action.id,
          interval: action.interval,
          orientation: action.orientation,
          minValue: action.minValue,
          maxValue: action.maxValue,
          minScale: action.minScale,
          maxScale: action.maxScale,
          step: action.step,
        },
      ]
    case 'VERTICAL_ORIENTANTION':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, orientation: 'vertical' }
        }
        return slider
      })
    case 'HORIZONTAL_ORIENTANTION':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, orientation: 'horizontal' }
        }
        return slider
      })
    case 'CHANGE_MIN_VAL':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, minValue: action.payload }
        }

        return slider
      })
    case 'CHANGE_MAX_VAL':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, maxValue: action.payload }
        }
        return slider
      })
    case 'CHANGE_MIN_SCALE':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, minScale: action.payload }
        }
        return slider
      })
    case 'CHANGE_MAX_SCALE':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, maxScale: action.payload }
        }
        return slider
      })
    case 'CHANGE_STEP':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, step: action.payload }
        }
        return slider
      })
    case 'SET_SINGLE':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, interval: 'single' }
        }
        return slider
      })
    case 'SET_INTERVAL':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, interval: 'interval' }
        }
        return slider
      })
    default:
      return state
  }
}

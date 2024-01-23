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
        },
      ]
    case 'VERTICAL_ORIENTANTION':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, orientation: 'vertical' }
        }
        console.log('vert reducer')
        return slider
      })
    case 'HORIZONTAL_ORIENTANTION':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, orientation: 'horizontal' }
        }
        console.log('horiz reducer')
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
    case 'SET_SINGLE':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, interval: 'single' }
        }
        console.log('single')
        return slider
      })
    case 'SET_INTERVAL':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, interval: 'interval' }
        }
        console.log('interval')
        return slider
      })
    default:
      return state
  }
}

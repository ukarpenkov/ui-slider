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
        },
      ]
    case 'VERTICAL_ORIENTANTION':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, orientation: 'vertical' }
        }
        console.log(store.getState())
        return slider
      })
    case 'HORIZONTAL_ORIENTANTION':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, orientation: 'horizontal' }
        }
        console.log(store.getState())
        return slider
      })
    case 'CHANGE_MIN_VAL':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, minValue: action.payload }
        }
        console.log(store.getState())
        return slider
      })
    default:
      return state
  }
}

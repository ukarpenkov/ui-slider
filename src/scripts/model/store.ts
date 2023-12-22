import { reducer } from './reducer'

function createStore(reducer, initialState) {
  let state = initialState
  return {
    dispatch: (action) => {
      state = reducer(state, action)
    },
    getState: () => state,
  }
}

const initialSlider = []

export const store = createStore(reducer, initialSlider)

import { ActionType, StateItemType, reducer } from './reducer'

function createStore(reducer: any, initialState: StateItemType | []) {
  let state = initialState
  return {
    dispatch: (action: ActionType) => {
      state = reducer(state, action)
    },
    getState: () => state,
  }
}

const initialSlider: StateItemType | [] = []

export const store = createStore(reducer, initialSlider)

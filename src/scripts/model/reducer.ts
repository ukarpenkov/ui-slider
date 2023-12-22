export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_SLIDER':
      return [
        ...state,
        {
          interval: 'interval',
          orientation: 'horizontal',
          minValue: 0,
          maxValue: 100,
        },
      ]
    // case 'VERTICAL_ORIENTANTION':
    //   return state.map((slider) => {
    //     if (slider.id === action.id) {
    //       return { ...todo, completed: !todo.completed }
    //     }
    //     return todo
    //   })
    default:
      return state
  }
}

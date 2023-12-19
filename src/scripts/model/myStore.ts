const createMyStore = (reducer) => {
  let state: object
  const lisnteters = []
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    lisnteters.forEach((listener) => listener())
  }
  const subscribe = (lisnteter) => {
    lisnteters.push(lisnteter)
  }
  dispatch({})

  return { getState, dispatch, subscribe }
}

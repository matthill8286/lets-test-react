import * as ACTIONS from './actions'

export const initialState = {
    stateProperty1: false,
}

export const Reducer1 = (state = initialState, action) => {
  switch(action.type) {
    case "SUCCESS":
      return {
        ...state,
        stateProperty1: true,
      }
    case "FAILURE":
      return {
        ...state,
        stateProperty1: false,
      }
    default:
      console.log(state)
  }
}

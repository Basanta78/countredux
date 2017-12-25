
import { combineReducers } from 'redux'
 function counterReducer(count =0 , action) {
  switch (action.type) {
    case "INCREMENT":
          return count+1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;

  }
}
 function addCounterReducer(state = [0], action){
  switch(action.type) {
    case "ADDCOUNTER":
    return [...state,0]
    case "REMOVECOUNTER":
    return [...state.slice(0,-1)]
    case "INCREMENT":
    return [
      ...state.slice(0, action.index),
      state[action.index] + 1,
      ...state.slice(action.index + 1)
    ]
    case "DECREMENT":
    return [
      ...state.slice(0, action.index),
      state[action.index] - 1,
      ...state.slice(action.index + 1)
    ];
    default:
    return state

  }
}
const reducer = combineReducers({
  counterReducer,
  addCounterReducer
})
export default addCounterReducer;
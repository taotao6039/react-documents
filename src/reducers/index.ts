import { DEFAULT_SHOW } from './../constants/actionTypes'

export default (state = {}, action) => {
  switch(action.type) {
    case DEFAULT_SHOW: 
      return {
        ...state,
        tags: action.payload[0].tags
      }
    default: 
      return state
  }
}
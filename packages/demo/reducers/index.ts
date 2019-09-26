import * as types from './../constants/actionTypes'
import { combineReducers } from 'redux'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

function todos(state = initialState, action: any) {
  switch (action.type) {
    case types.ADD_TODO:
      const newState = state.slice()
      newState.push({
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.text
      })
      return newState
    default:
      return state
  }
}

const rootReducer = combineReducers({todos})

export default rootReducer
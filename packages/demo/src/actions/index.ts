import * as types from './../constants/actionTypes'


export function addTodo(text: string) {
  return {
    type: types.ADD_TODO,
    text
  }
}
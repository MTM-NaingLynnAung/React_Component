import * as types from './actionTypes'

export const completeTodo = (todo) => ({
  type: types.COMPLETE_TODO,
  payload: todo
})

export const addedTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo
})

export const handleEdit = (todo) => ({
  type: types.HANDLE_EDIT,
  payload: todo
})

export const editTodo = (todo) => ({
  type: types.EDIT_TODO,
  payload: todo
})

export const deleteTodo = (todo) => ({
  type: types.DELETE_TODO,
  payload: todo
})

export const clearCompleted = () => ({
  type: types.CLEAR_COMPLETED
})

export const checkAll = () => ({
  type: types.CHECK_ALL
})

export const unCheckAll = () => ({
  type: types.UNCHECK_ALL
})

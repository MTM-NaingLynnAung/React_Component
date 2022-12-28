import * as types from './actionTypes'
import { v4 as uuidv4 } from 'uuid';

const initialState =
  localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : { todos: [] }


const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        isCompleted: false,
        isEditing: false
      }
      const addedTodo = [...state.todos, newTodo]
      return {
        todos: addedTodo
      }

    case types.COMPLETE_TODO:
      const toggleComplete = state.todos.map(todo => todo.id === action.payload.id ? { ...action.payload, isCompleted: !action.payload.isCompleted } : todo)
      return {
        todos: toggleComplete
      };

    case types.HANDLE_EDIT:
      const handleEdit = state.todos.map(todo => todo.id === action.payload.id ? { ...action.payload, isEditing: !action.payload.isEditing } : todo)
      return {
        todos: handleEdit
      }

    case types.EDIT_TODO:
      const editTodo = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          if (action.payload.updateTitle.trim().length === 0) {
            return { ...todo, isEditing: false }
          }
          return { ...todo, title: action.payload.updateTitle, isEditing: false }
        }
        return todo
      })
      return {
        todos: editTodo
      }

    case types.DELETE_TODO:
      const deleteTodo = state.todos.filter(todo => todo.id !== action.payload)
      return {
        todos: deleteTodo
      }

    case types.CLEAR_COMPLETED:
      const clear = state.todos.filter(todo => !todo.isCompleted)
      return {
        todos: clear
      }

    case types.CHECK_ALL:
      const checkAll = state.todos.map(todo => {
        return { ...todo, isCompleted: true }
      })
      return {
        todos: checkAll
      }

    case types.UNCHECK_ALL:
      const unCheckAll = state.todos.map(todo => {
        return { ...todo, isCompleted: false }
      })
      return {
        todos: unCheckAll
      }

    default:
      return state
  }
}

export default todosReducer

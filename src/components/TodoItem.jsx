import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

function TodoItem() {

  const { todos, setTodos } = useContext(TodosContext)

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo
      })
    )
  }

  const handleEdit = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {...todo, isEditing: !todo.isEditing}
        }
        return todo
      })
    )
  }

  const removeInput = (e,id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          if(e.target.value.trim().length === 0){
            return { ...todo, isEditing: false }
          }
          return {...todo, title: e.target.value, isEditing: false}
        }
        return todo
      })
    )
  }

  const handleDelete = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  return (
     todos.map(todo => {
        return (
          <li key={todo.id} className='d-flex justify-content-between my-3'>
          <div className='div-width'>
          <input type="checkbox" className='me-3 size' onChange={() => toggleComplete(todo.id)} checked={todo.isCompleted ? true : false} />
          { !todo.isEditing ? (
            <span className={ todo.isCompleted ? 'completed' : '' } onDoubleClick={() => handleEdit(todo.id)}>{ todo.title }</span>
          ) : (
            <input type='text' defaultValue={todo.title} autoFocus onBlur={(e) => removeInput(e, todo.id)} onKeyDown={e => {
              if(e.key === 'Enter'){
                removeInput(e, todo.id)
              }else if (e.key === 'Escape'){
                handleEdit(todo.id)
              }
            }} />
          )
          }
          </div>
          <span className='size cursor' onClick={() => handleDelete(todo.id)}>&times;</span>
        </li>
        )
      })

    
  )
}

export default TodoItem

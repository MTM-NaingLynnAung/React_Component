import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

function Footer() {

  const { todos, setTodos } = useContext(TodosContext)

  const remaining = todos.filter(todo => !todo.isCompleted).length

  const clearCompleted = () => {
    setTodos([...todos].filter(todo => !todo.isCompleted))
  }

  const completed = todos.filter(todo => todo.isCompleted).length

  return (
    <div className='d-flex justify-content-between'>
        <span>{remaining} items remaining</span>
        {completed ? (

          <span className='cursor' onClick={ clearCompleted }>Clear Completed</span>
        ) : (
          <span></span>
        )}
      </div>
  )
}

export default Footer

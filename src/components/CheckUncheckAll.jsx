import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

function CheckUncheckAll() {
  const { todos, setTodos } = useContext(TodosContext)
  const remaining = todos.filter(todo => !todo.isCompleted).length

  const checkAll = () => {
    setTodos(
      todos.map( todo => {
        return { ...todo, isCompleted: true }
       })
    )
  }

  const unCheckAll = () => {
    setTodos(
      todos.map( todo => {
        return { ...todo, isCompleted: false }
       })
    )
  }

  return (
   
      remaining === 0 ? (
        <p style={{textAlign: 'right', float: 'right'}} className='cursor' onClick={() => unCheckAll()}>UnCheck All</p>
        ) : (
          <p style={{textAlign: 'right', float: 'right'}} className='cursor' onClick={() => checkAll()}>Check All</p>
          
      )
    
  )
}

export default CheckUncheckAll

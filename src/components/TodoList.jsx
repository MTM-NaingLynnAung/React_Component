import React from 'react'
import Footer from './Footer'
import TodoItem from './TodoItem'

function TodoList(props) {
  return (
    <>
      <ul className='mt-2'>
      { props.todos.map(todo => {
        return (
          <TodoItem todo={todo} toggleComplete={props.toggleComplete} handleEdit={props.handleEdit} removeInput={props.removeInput} handleDelete={props.handleDelete} />
        )
      }) }
      </ul>
      <Footer remaining={props.remaining} completed={props.completed} clearCompleted={props.clearCompleted} />
    </>
  )
}

export default TodoList 

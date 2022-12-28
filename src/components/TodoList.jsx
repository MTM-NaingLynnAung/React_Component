import React from 'react'
import Footer from './Footer'
import TodoItem from './TodoItem'

function TodoList() {

  return (
    <>
      <ul className='mt-2'>
        <TodoItem />
      </ul>
      <Footer />
    </>
  )
}

export default TodoList 

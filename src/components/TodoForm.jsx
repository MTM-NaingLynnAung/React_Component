import React from 'react'
import { useState } from 'react'


function TodoForm(props) {

  const [titleName , setName] = useState('')

  const handleSubmit = () => {
    if(titleName.trim().length === 0) {
      return;
    }
    props.addTodo(titleName)
    setName('')
  }

  
  return (
    <input type="text" className='form-control' onKeyPress={(e) => e.key === 'Enter' && handleSubmit() } onChange={(e) => setName(e.target.value)} value={titleName} />
  )
}

export default TodoForm 

import React, { useContext } from 'react'
import { useState } from 'react'
import { TodosContext } from '../context/TodosContext'
import { v4 as uuidv4 } from 'uuid';


function TodoForm() {
  const unique_id = uuidv4();
  const { todos, setTodos } = useContext(TodosContext)
  const [titleName , setName] = useState('')

  const addTodo = () => {
    if(titleName.trim().length === 0) {
      return;
    }
    setTodos([...todos, {id: unique_id, title: titleName, isCompleted: false, isEditing: false}])
    setName('')
  }
 
  return (
    <div>
    <input type="text" className='form-control' onKeyPress={(e) => e.key === 'Enter' && addTodo() } onChange={(e) => setName(e.target.value)} value={titleName} />
    </div>
  )
}

export default TodoForm 

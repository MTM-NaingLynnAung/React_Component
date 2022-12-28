import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addedTodo } from '../redux/action'

function TodoForm() {
  const [titleName, setName] = useState('')
  let dispatch = useDispatch()

  const addTodo = () => {
    if (titleName.trim().length === 0) {
      return;
    }
    dispatch(addedTodo(titleName))
    setName('')
  }

  return (
    <div>
      <input type="text" className='form-control' onKeyPress={(e) => e.key === 'Enter' && addTodo()} onChange={(e) => setName(e.target.value)} value={titleName} />
    </div>
  )
}

export default TodoForm 

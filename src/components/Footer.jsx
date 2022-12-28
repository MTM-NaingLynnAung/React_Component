import { clearCompleted } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'

function Footer() {

  const state = useSelector(state => ({ ...state }))
  let dispatch = useDispatch()

  const remaining = state.todos.filter(todo => !todo.isCompleted).length

  const completed = state.todos.filter(todo => todo.isCompleted).length

  return (
    <div className='d-flex justify-content-between'>
      <span>{remaining} items remaining</span>
      {completed ? (

        <span className='cursor' onClick={() => dispatch(clearCompleted())}>Clear Completed</span>
      ) : (
        <span></span>
      )}
    </div>
  )
}

export default Footer

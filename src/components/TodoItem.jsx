import { useSelector, useDispatch } from 'react-redux'
import { completeTodo, deleteTodo, handleEdit, editTodo } from '../redux/action'

function TodoItem() {
  const state = useSelector(state => ({ ...state }))
  let dispatch = useDispatch()

  const removeInput = (e, id) => {
    const updateTitle = e.target.value
    dispatch(editTodo({ updateTitle, id }))

  }

  return (

    state.todos.map(todo => {
      return (
        <li key={todo.id} className='d-flex justify-content-between my-3'>
          <div className='div-width'>
            <input type="checkbox" className='me-3 size' onChange={() => dispatch(completeTodo(todo))} checked={todo.isCompleted ? true : false} />
            {!todo.isEditing ? (
              <span className={todo.isCompleted ? 'completed' : ''} onDoubleClick={() => dispatch(handleEdit(todo))}>{todo.title}</span>
            ) : (
              <input type='text' defaultValue={todo.title} onChange={e => e.target.value} autoFocus onBlur={(e) => removeInput(e, todo.id)} onKeyDown={e => {
                if (e.key === 'Enter') {
                  removeInput(e, todo.id)
                } else if (e.key === 'Escape') {
                  dispatch(handleEdit(todo))
                }
              }} />
            )
            }
          </div>
          <span className='size cursor' onClick={() => dispatch(deleteTodo(todo.id))}>&times;</span>
        </li>

      )
    })


  )
}

export default TodoItem

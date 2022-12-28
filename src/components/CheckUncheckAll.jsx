import { useSelector, useDispatch } from 'react-redux'
import { checkAll, unCheckAll } from '../redux/action'

function CheckUncheckAll() {
  const state = useSelector(state => ({ ...state }))
  let dispatch = useDispatch();
  const remaining = state.todos.filter(todo => !todo.isCompleted).length

  return (
    state.todos.length ? (
      remaining === 0 ? (
        <p style={{ textAlign: 'right', float: 'right' }} className='cursor' onClick={() => dispatch(unCheckAll())}>UnCheck All</p>
      ) : (
        <p style={{ textAlign: 'right', float: 'right' }} className='cursor' onClick={() => dispatch(checkAll())}>Check All</p>

      )
    ) : ('')
  )
}

export default CheckUncheckAll

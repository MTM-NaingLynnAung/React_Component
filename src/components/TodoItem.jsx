import React from 'react'

function TodoItem(props) {
  return (
    <li key={props.todo.id} className='d-flex justify-content-between my-3'>
      <div className='div-width'>
        <input type="checkbox" className='me-3 size' onChange={() => props.toggleComplete(props.todo.id)} checked={props.todo.isCompleted ? true : false} />
        { !props.todo.isEditing ? (
          <span className={ props.todo.isCompleted ? 'completed' : '' } onDoubleClick={() => props.handleEdit(props.todo.id)}>{ props.todo.title }</span>
        ) : (
          <input type='text' defaultValue={props.todo.title} autoFocus onBlur={(e) => props.removeInput(e, props.todo.id)} onKeyDown={e => {
            if(e.key === 'Enter'){
              props.removeInput(e, props.todo.id)
            }else if (e.key === 'Escape'){
              props.handleEdit(props.todo.id)
            }
          }} />
        )
        }
      </div>
        <span className='size cursor' onClick={() => props.handleDelete(props.todo.id)}>&times;</span>
    </li>
  )
}

export default TodoItem

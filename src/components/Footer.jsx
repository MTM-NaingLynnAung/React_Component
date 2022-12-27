import React from 'react'

function Footer(props) {
  return (
    <div className='d-flex justify-content-between'>
        <span>{props.remaining} items remaining</span>
        {props.completed ? (

          <span className='cursor' onClick={ props.clearCompleted }>Clear Completed</span>
        ) : (
          <span></span>
        )}
      </div>
  )
}

export default Footer

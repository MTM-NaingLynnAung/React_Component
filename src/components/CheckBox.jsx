import React from 'react'

function CheckBox(props) {
  return (
   
      props.remaining === 0 ? (
        <p style={{textAlign: 'right', float: 'right'}} className='cursor' onClick={() => props.unCheckAll()}>UnCheck All</p>
        ) : (
          <p style={{textAlign: 'right', float: 'right'}} className='cursor' onClick={() => props.checkAll()}>Check All</p>
          
      )
    
  )
}

export default CheckBox

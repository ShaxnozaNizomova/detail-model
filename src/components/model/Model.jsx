import React from 'react'
import './Model.css'
function Model({close, children}) {
  return (
    <>
    <div onClick={() => close(false)} className='overlay'>
    </div>
    <div className='model'>
    {children}
  </div>
  </>
  )
}

export default Model

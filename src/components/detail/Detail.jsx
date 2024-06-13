import React from 'react'
import logo from '../../assets/images/logo.svg'
function Detail({close, data}) {
  return (
    <div>
      <h2>Detail Page</h2>
      <img src={data?.thumbnail} alt="" width={300} height={200}/>
    </div>
  )
}

export default Detail

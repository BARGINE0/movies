import React from 'react'
import { Link } from 'react-router-dom'
import './link.css'

function Jw_l() {
  return (
    <div className='chap-con'>
        <Link to='/watch/jw_1' className='chap'>Chapter 1</Link>
        <Link to='/watch/jw_2' className='chap'>Chapter 2</Link>
        <Link to='/watch/jw_3' className='chap'>Chapter 3</Link>
    </div>
  )
}

export default Jw_l
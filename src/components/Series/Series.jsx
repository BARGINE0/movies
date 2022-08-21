import React from 'react'
import { Link } from 'react-router-dom'
import './Series.css'

function Series() {
  return (
    <div className='series' id='series'>
        <h1 className='title'>TV SERIES</h1>
        <div className="serie-con">
            <Link to='/watch' className="serie"></Link>
            <Link to='/watch' className="serie"></Link>
            <Link to='/watch/TWD-1/1' className="serie"></Link>
            <Link to='/watch' className="serie"></Link>
            <Link to='/watch' className="serie"></Link>
            <Link to='/watch' className="serie"></Link>
            <Link to='/watch' className="serie"></Link>
            <Link to='/watch' className="serie"></Link>
            <Link to='/watch' className="serie"></Link>
            <Link to='/watch/jw_1' className="serie"></Link>
        </div>
    </div>
  )
}

export default Series
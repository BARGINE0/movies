import React, { useState } from 'react'
import './Movies.css'
import { Link } from 'react-router-dom'

function Movies() {
  return (
    <div className='movies' id='movies'>
        <h1 className='title'>MOVIES</h1>
        <div className="movie-con">
          <Link to='/watch/m-1' className="movie"></Link>
          <Link to='/watch/m-2' className="movie"></Link>
          <Link to='/watch/m-3' className="movie"></Link>
          <Link to='/watch/m-4' className="movie"></Link>
          <Link to='/watch/m-5' className="movie"></Link>
          <Link to='/watch/m-6' className="movie"></Link>
          <Link to='/watch/m-7' className="movie"></Link>
          <Link to='/watch/m-8' className="movie"></Link>
          <Link to='/watch/m-9' className="movie"></Link>
          <Link to='/watch/m-10' className="movie"></Link>
          <Link to='/watch/m-11' className="movie"></Link>
          <Link to='/watch/m-12' className="movie"></Link>
          <Link to='/watch/m-13' className="movie"></Link>
          <Link to='/watch/m-14' className="movie"></Link>
          <Link to='/watch/m-15' className="movie"></Link>
          <Link to='/watch/m-16' className="movie"></Link>
          <Link to='/watch/m-17' className="movie"></Link>
          <Link to='/watch/m-18' className="movie"></Link>
          <Link to='/watch/m-19' className="movie"></Link>
          <Link to='/watch/m-20' className="movie"></Link>
        </div>
    </div>
  )
}

export default Movies;
import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll'

function Nav() {
  return (
    <div className='nav'>
        <h1 className='title'>MOV .IES</h1>
        <div className="navbar">
            <nav>
                <a href="/" className='links'>HOME</a>
                <Link to='movies' spy={true} smooth={true}  offset={0} duration={1000} className='links'>MOVIES</Link>
                <Link to='series' spy={true} smooth={true}  offset={0} duration={1000} className='links'>TV SERIES</Link>
            </nav>
            <input type="search" className='search' placeholder='Search...'/>
        </div>
    </div>
  )
}

export default Nav
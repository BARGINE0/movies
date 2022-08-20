import React from 'react'
import { Link } from 'react-router-dom'

function TWD1_4() {
  return (
    <div className='sox'>
        <iframe src="https://www.2embed.to/embed/tmdb/tv?id=1402&s=1&e=4" frameBorder="0" className='mov' alt='loading' allowFullScreen></iframe>
        <br /><br />
        <div className='episodes'>
          <div className="s1">
          <h1>SEASON 1</h1>
          <Link to='/watch/TWD-1/1' className="EP">EPISODE 1</Link>
          <Link to='/watch/TWD-1/2' className="EP">EPISODE 2</Link>
          <Link to='/watch/TWD-1/3' className="EP">EPISODE 3</Link>
          <Link to='/watch/TWD-1/4' className="EP">EPISODE 4</Link>
          <Link to='/watch/TWD-1/5' className="EP">EPISODE 5</Link>
          <Link to='/watch/TWD-1/6' className="EP">EPISODE 6</Link>
          </div>
        <div className="s2">
                <h1>SEASON 2</h1>
                <Link to='/watch/TWD-2/1' className="EP">EPISODE 1</Link>
                <Link to='/watch/TWD-2/2' className="EP">EPISODE 2</Link>
                <Link to='/watch/TWD-2/3' className="EP">EPISODE 3</Link>
                <Link to='/watch/TWD-2/4' className="EP">EPISODE 4</Link>
                <Link to='/watch/TWD-2/5' className="EP">EPISODE 5</Link>
                <Link to='/watch/TWD-2/6' className="EP">EPISODE 6</Link>
            </div>
            <div className="s3">
                <h1>SEASON 3</h1>
                <Link to='/watch/TWD-3/1' className="EP">EPISODE 1</Link>
                <Link to='/watch/TWD-3/2' className="EP">EPISODE 2</Link>
                <Link to='/watch/TWD-3/3' className="EP">EPISODE 3</Link>
                <Link to='/watch/TWD-3/4' className="EP">EPISODE 4</Link>
                <Link to='/watch/TWD-3/5' className="EP">EPISODE 5</Link>
                <Link to='/watch/TWD-3/6' className="EP">EPISODE 6</Link>
            </div>
            </div>
    </div>
  )
}

export default TWD1_4
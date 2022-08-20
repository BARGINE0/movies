import React from 'react'
import Carousel from '../Carousel/Carousel'
import Movies from '../Movies/Movies'
import Series from '../Series/Series'

function Home() {
  return (
    <div>
        <Carousel />
        <Movies /> 
        <Series />
    </div>
  )
}

export default Home
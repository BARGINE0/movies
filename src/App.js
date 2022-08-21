import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav'
import Carousel from './components/Carousel/Carousel'
import Movies from './components/Movies/Movies'
import Series from './components/Series/Series'
import { BiUpArrowAlt } from 'react-icons/bi'
import { Link } from 'react-scroll'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Watch from './components/Watch/Watch'
import M1 from './pages/M/M1'
import M2 from './pages/M/M2'
import M3 from './pages/M/M3'
import M4 from './pages/M/M4'
import M5 from './pages/M/M5'
import M6 from './pages/M/M6'
import M7 from './pages/M/M7'
import M8 from './pages/M/M8'
import M9 from './pages/M/M9'
import M10 from './pages/M/M10'
import M11 from './pages/M/M11'
import M12 from './pages/M/M12'
import M13 from './pages/M/M13'
import M14 from './pages/M/M14'
import M15 from './pages/M/M15'
import M16 from './pages/M/M16'
import M17 from './pages/M/M17'
import M18 from './pages/M/M18'
import M19 from './pages/M/M19'
import M20 from './pages/M/M20'

import TWD1_1 from './pages/S/TWD/TWD1_1'

import Jw_1 from './pages/S/JW/Jw_1';
import Jw_2 from './pages/S/JW/Jw_2';
import Jw_3 from './pages/S/JW/Jw_3';

import Home from './components/Home/Home'

function App() {
  const [visible, setVisible] = useState();
  const changeVisible= () => {
    if (window.scrollY >= 200) {
        setVisible(true)
    } else {
        setVisible(false)
    }
  }
  window.addEventListener('scroll', changeVisible);

  return (  
    <div className="App">
      <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/watch' element={<Watch />}/>
      
      
      {/*MOVIES*/}
      <Route path='/watch/m-1' element={<M1 />}/>
      <Route path='/watch/m-2' element={<M2 />}/>
      <Route path='/watch/m-3' element={<M3 />}/>
      <Route path='/watch/m-4' element={<M4 />}/>
      <Route path='/watch/m-5' element={<M5 />}/>
      <Route path='/watch/m-6' element={<M6 />}/>
      <Route path='/watch/m-7' element={<M7 />}/>
      <Route path='/watch/m-8' element={<M8 />}/>
      <Route path='/watch/m-9' element={<M9 />}/>
      <Route path='/watch/m-10' element={<M10 />}/>
      <Route path='/watch/m-11' element={<M11 />}/>
      <Route path='/watch/m-12' element={<M12 />}/>
      <Route path='/watch/m-13' element={<M13 />}/>
      <Route path='/watch/m-14' element={<M14 />}/>
      <Route path='/watch/m-15' element={<M15 />}/>
      <Route path='/watch/m-16' element={<M16 />}/>
      <Route path='/watch/m-17' element={<M17 />}/>
      <Route path='/watch/m-18' element={<M18 />}/>
      <Route path='/watch/m-19' element={<M19 />}/>
      <Route path='/watch/m-20' element={<M20 />}/>
      
      <Route path='/watch/TWD-1/1' element={<TWD1_1 />}/>
      
      <Route path='/watch/jw_1' element={<Jw_1 />}/>
      <Route path='/watch/jw_2' element={<Jw_2 />}/>
      <Route path='/watch/jw_3' element={<Jw_3 />}/>
      
      {/*SERIES
      <Route path='/watch/s-1' element={<S1 />}/>
      <Route path='/watch/s-2' element={<S2 />}/>
      <Route path='/watch/s-3' element={<S3 />}/>
      <Route path='/watch/s-4' element={<S4 />}/>
      <Route path='/watch/s-5' element={<S5 />}/>
      <Route path='/watch/s-6' element={<S6 />}/>
      <Route path='/watch/s-7' element={<S7 />}/>
      <Route path='/watch/s-8' element={<S8 />}/>
      <Route path='/watch/s-9' element={<S9 />}/>
      <Route path='/watch/s-10' element={<S10 />}/>
      */}
    </Routes>
    <Footer />

      <Link to='nav' className={visible ? 'top top-af' : 'top'} spy={true} smooth={true}  offset={0} duration={1000}><BiUpArrowAlt /></Link>
    </div>
  );
}

export default App;

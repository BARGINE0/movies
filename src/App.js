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
import Home from './components/Home/Home'

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

import Jw_1 from './pages/S/JW/Jw_1';
import Jw_2 from './pages/S/JW/Jw_2';
import Jw_3 from './pages/S/JW/Jw_3';

import Br0_1 from './pages/S/BR-BA/Br0_1'
import Br0_2 from './pages/S/BR-BA/Br0_2'
import Br0_3 from './pages/S/BR-BA/Br0_3'
import Br0_4 from './pages/S/BR-BA/Br0_4'
import Br0_5 from './pages/S/BR-BA/Br0_5'
import Br0_6 from './pages/S/BR-BA/Br0_6'
import Br0_7 from './pages/S/BR-BA/Br0_7'
import Br0_8 from './pages/S/BR-BA/Br0_8'
import Br0_9 from './pages/S/BR-BA/Br0_9'
import Br0_10 from './pages/S/BR-BA/Br0_10'
import Br0_11 from './pages/S/BR-BA/Br0_11'

import Br1_1 from './pages/S/BR-BA/Br1_1'
import Br1_2 from './pages/S/BR-BA/Br1_2'
import Br1_3 from './pages/S/BR-BA/Br1_3'
import Br1_4 from './pages/S/BR-BA/Br1_4'
import Br1_5 from './pages/S/BR-BA/Br1_5'
import Br1_6 from './pages/S/BR-BA/Br1_6'
import Br1_7 from './pages/S/BR-BA/Br1_7'

import Br2_1 from './pages/S/BR-BA/Br2_1'
import Br2_2 from './pages/S/BR-BA/Br2_2'
import Br2_3 from './pages/S/BR-BA/Br2_3'
import Br2_4 from './pages/S/BR-BA/Br2_4'
import Br2_5 from './pages/S/BR-BA/Br2_5'
import Br2_6 from './pages/S/BR-BA/Br2_6'
import Br2_7 from './pages/S/BR-BA/Br2_7'
import Br2_8 from './pages/S/BR-BA/Br2_8'
import Br2_9 from './pages/S/BR-BA/Br2_9'
import Br2_10 from './pages/S/BR-BA/Br2_10'
import Br2_11 from './pages/S/BR-BA/Br2_11'
import Br2_12 from './pages/S/BR-BA/Br2_12'
import Br2_13 from './pages/S/BR-BA/Br2_13'

import Br3_1 from './pages/S/BR-BA/Br3_1'
import Br3_2 from './pages/S/BR-BA/Br3_2'
import Br3_3 from './pages/S/BR-BA/Br3_3'
import Br3_4 from './pages/S/BR-BA/Br3_4'
import Br3_5 from './pages/S/BR-BA/Br3_5'
import Br3_6 from './pages/S/BR-BA/Br3_6'
import Br3_7 from './pages/S/BR-BA/Br3_7'
import Br3_8 from './pages/S/BR-BA/Br3_8'
import Br3_9 from './pages/S/BR-BA/Br3_9'
import Br3_10 from './pages/S/BR-BA/Br3_10'
import Br3_11 from './pages/S/BR-BA/Br3_11'
import Br3_12 from './pages/S/BR-BA/Br3_12'
import Br3_13 from './pages/S/BR-BA/Br3_13'

import Br4_1 from './pages/S/BR-BA/Br4_1'
import Br4_2 from './pages/S/BR-BA/Br4_2'
import Br4_3 from './pages/S/BR-BA/Br4_3'
import Br4_4 from './pages/S/BR-BA/Br4_4'
import Br4_5 from './pages/S/BR-BA/Br4_5'
import Br4_6 from './pages/S/BR-BA/Br4_6'
import Br4_7 from './pages/S/BR-BA/Br4_7'
import Br4_8 from './pages/S/BR-BA/Br4_8'
import Br4_9 from './pages/S/BR-BA/Br4_9'
import Br4_10 from './pages/S/BR-BA/Br4_10'
import Br4_11 from './pages/S/BR-BA/Br4_11'
import Br4_12 from './pages/S/BR-BA/Br4_12'
import Br4_13 from './pages/S/BR-BA/Br4_13'

import Br5_1 from './pages/S/BR-BA/Br5_1'
import Br5_2 from './pages/S/BR-BA/Br5_2'
import Br5_3 from './pages/S/BR-BA/Br5_3'
import Br5_4 from './pages/S/BR-BA/Br5_4'
import Br5_5 from './pages/S/BR-BA/Br5_5'
import Br5_6 from './pages/S/BR-BA/Br5_6'
import Br5_7 from './pages/S/BR-BA/Br5_7'
import Br5_8 from './pages/S/BR-BA/Br5_8'
import Br5_9 from './pages/S/BR-BA/Br5_9'
import Br5_10 from './pages/S/BR-BA/Br5_10'
import Br5_11 from './pages/S/BR-BA/Br5_11'
import Br5_12 from './pages/S/BR-BA/Br5_12'
import Br5_13 from './pages/S/BR-BA/Br5_13'
import Br5_14 from './pages/S/BR-BA/Br5_14'
import Br5_15 from './pages/S/BR-BA/Br5_15'
import Br5_16 from './pages/S/BR-BA/Br5_16'

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
      
      {/*jhon wick*/}
      <Route path='/watch/jw_1' element={<Jw_1 />}/>
      <Route path='/watch/jw_2' element={<Jw_2 />}/>
      <Route path='/watch/jw_3' element={<Jw_3 />}/>


      {/*breaking bad specials*/}
      <Route path='/watch/br_0/1' element={<Br0_1 />}/>
      <Route path='/watch/br_0/2' element={<Br0_2 />}/>
      <Route path='/watch/br_0/3' element={<Br0_3 />}/>
      <Route path='/watch/br_0/4' element={<Br0_4 />}/>
      <Route path='/watch/br_0/5' element={<Br0_5 />}/>
      <Route path='/watch/br_0/6' element={<Br0_6 />}/>
      <Route path='/watch/br_0/7' element={<Br0_7 />}/>
      <Route path='/watch/br_0/8' element={<Br0_8 />}/>
      <Route path='/watch/br_0/9' element={<Br0_9 />}/>
      <Route path='/watch/br_0/10' element={<Br0_10 />}/>
      <Route path='/watch/br_0/11' element={<Br0_11 />}/>
      
      {/*breaking bad s1*/}
      <Route path='/watch/br_1/1' element={<Br1_1 />}/>
      <Route path='/watch/br_1/2' element={<Br1_2 />}/>
      <Route path='/watch/br_1/3' element={<Br1_3 />}/>
      <Route path='/watch/br_1/4' element={<Br1_4 />}/>
      <Route path='/watch/br_1/5' element={<Br1_5 />}/>
      <Route path='/watch/br_1/6' element={<Br1_6 />}/>
      <Route path='/watch/br_1/7' element={<Br1_7 />}/>

      {/*breaking bad s2*/}
      <Route path='/watch/br_2/1' element={<Br2_1 />}/>
      <Route path='/watch/br_2/2' element={<Br2_2 />}/>
      <Route path='/watch/br_2/3' element={<Br2_3 />}/>
      <Route path='/watch/br_2/4' element={<Br2_4 />}/>
      <Route path='/watch/br_2/5' element={<Br2_5 />}/>
      <Route path='/watch/br_2/6' element={<Br2_6 />}/>
      <Route path='/watch/br_2/7' element={<Br2_7 />}/>
      <Route path='/watch/br_2/8' element={<Br2_8 />}/>
      <Route path='/watch/br_2/9' element={<Br2_9 />}/>
      <Route path='/watch/br_2/10' element={<Br2_10 />}/>
      <Route path='/watch/br_2/11' element={<Br2_11 />}/>
      <Route path='/watch/br_2/12' element={<Br2_12 />}/>
      <Route path='/watch/br_2/13' element={<Br2_13 />}/>

      {/*breaking bad s3*/}
      <Route path='/watch/br_3/1' element={<Br3_1 />}/>
      <Route path='/watch/br_3/2' element={<Br3_2 />}/>
      <Route path='/watch/br_3/3' element={<Br3_3 />}/>
      <Route path='/watch/br_3/4' element={<Br3_4 />}/>
      <Route path='/watch/br_3/5' element={<Br3_5 />}/>
      <Route path='/watch/br_3/6' element={<Br3_6 />}/>
      <Route path='/watch/br_3/7' element={<Br3_7 />}/>
      <Route path='/watch/br_3/8' element={<Br3_8 />}/>
      <Route path='/watch/br_3/9' element={<Br3_9 />}/>
      <Route path='/watch/br_3/10' element={<Br3_10 />}/>
      <Route path='/watch/br_3/11' element={<Br3_11 />}/>
      <Route path='/watch/br_3/12' element={<Br3_12 />}/>
      <Route path='/watch/br_3/13' element={<Br3_13 />}/>

      {/*breaking bad s4*/}
      <Route path='/watch/br_4/1' element={<Br4_1 />}/>
      <Route path='/watch/br_4/2' element={<Br4_2 />}/>
      <Route path='/watch/br_4/3' element={<Br4_3 />}/>
      <Route path='/watch/br_4/4' element={<Br4_4 />}/>
      <Route path='/watch/br_4/5' element={<Br4_5 />}/>
      <Route path='/watch/br_4/6' element={<Br4_6 />}/>
      <Route path='/watch/br_4/7' element={<Br4_7 />}/>
      <Route path='/watch/br_4/8' element={<Br4_8 />}/>
      <Route path='/watch/br_4/9' element={<Br4_9 />}/>
      <Route path='/watch/br_4/10' element={<Br4_10 />}/>
      <Route path='/watch/br_4/11' element={<Br4_11 />}/>
      <Route path='/watch/br_4/12' element={<Br4_12 />}/>
      <Route path='/watch/br_4/13' element={<Br4_13 />}/>

      {/*breaking bad s5*/}
      <Route path='/watch/br_5/1' element={<Br5_1 />}/>
      <Route path='/watch/br_5/2' element={<Br5_2 />}/>
      <Route path='/watch/br_5/3' element={<Br5_3 />}/>
      <Route path='/watch/br_5/4' element={<Br5_4 />}/>
      <Route path='/watch/br_5/5' element={<Br5_5 />}/>
      <Route path='/watch/br_5/6' element={<Br5_6 />}/>
      <Route path='/watch/br_5/7' element={<Br5_7 />}/>
      <Route path='/watch/br_5/8' element={<Br5_8 />}/>
      <Route path='/watch/br_5/9' element={<Br5_9 />}/>
      <Route path='/watch/br_5/10' element={<Br5_10 />}/>
      <Route path='/watch/br_5/11' element={<Br5_11 />}/>
      <Route path='/watch/br_5/12' element={<Br5_12 />}/>
      <Route path='/watch/br_5/13' element={<Br5_13 />}/>
      <Route path='/watch/br_5/14' element={<Br5_14 />}/>
      <Route path='/watch/br_5/15' element={<Br5_15 />}/>
      <Route path='/watch/br_5/16' element={<Br5_16 />}/>

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

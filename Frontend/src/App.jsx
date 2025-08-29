import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Coin from './Pages/Coin'
import Features from './Pages/Features'
import Aboutus from './Pages/Aboutus'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

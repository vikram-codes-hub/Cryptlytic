import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Coin from './Pages/Coin'
import Features from './Pages/Features'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/features' element={<Features/>}/>
      </Routes>
    </div>
  )
}

export default App

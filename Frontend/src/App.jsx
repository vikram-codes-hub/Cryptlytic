import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Coin from './Pages/Coin'
import Features from './Pages/Features'
import Aboutus from './Pages/Aboutus'
import Footer from './Pages/Footer'
import Signup from './Pages/Signup'
import Portfolio from './Pages/Portfolio'
import { Toaster } from 'react-hot-toast'
import { UserContext } from './Context/UserContext'

const App = () => {
  const {authuser}=useContext(UserContext)
   const location = useLocation()
    const isSignupPage = location.pathname === '/signup'
  return (
    <div className='app'>
      
      <Toaster/>
      {isSignupPage&&<Navbar/>}

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={authuser?<Home/>:<Signup/>}/>
        <Route path='/coin/:coinId' element={authuser?<Coin/>:<Signup/>}/>
        <Route path='/features' element={authuser?<Features/>:<Signup/>}/>
        <Route path='/portfolio' element={authuser?<Portfolio/>:<Signup/>}/>
        <Route path='/Aboutus' element={authuser?<Aboutus/>:<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      {isSignupPage&&<Footer/>}
    </div>
  )
}

export default App

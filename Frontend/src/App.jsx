import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Coin from './Pages/Coin'
import Features from './Pages/Features'
import Aboutus from './Pages/Aboutus'
import Footer from './Pages/Footer'
import Signup from './Pages/Signup'
import Portfolio from './Pages/Portfolio'
import { Toaster } from 'react-hot-toast'
import { UserContext } from './Context/UserContext'
import ProtectedRoute from '../Utility/ProtectedROute'

const App = () => {
  const {authuser} = useContext(UserContext)
  
  return (
    <div className='app'>
      <Toaster/>
      {authuser && <Navbar/>}

       <Routes>
        <Route path='/signup' element={!authuser ? <Signup/> : <Navigate to="/" replace />}/>
        
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/coin/:coinId' element={<ProtectedRoute><Coin/></ProtectedRoute>}/>
        <Route path='/features' element={<ProtectedRoute><Features/></ProtectedRoute>}/>
        <Route path='/portfolio' element={<ProtectedRoute><Portfolio/></ProtectedRoute>}/>
        <Route path='/aboutus' element={<ProtectedRoute><Aboutus/></ProtectedRoute>}/>
      </Routes>
      
      {authuser && <Footer/>}
    </div>
  )
}
export default App

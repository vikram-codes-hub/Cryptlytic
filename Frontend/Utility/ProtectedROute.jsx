// ProtectedRoute.jsx
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../src/Context/UserContext'

const ProtectedRoute = ({ children }) => {
  const { authuser } = useContext(UserContext)
  
  if (!authuser) {
    return <Navigate to="/signup" replace />
  }
  
  return children
}

export default ProtectedRoute
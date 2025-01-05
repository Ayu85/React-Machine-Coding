import React from 'react'
import { Navigate } from 'react-router-dom'
const Dashboard = () => {
  return <h1>Welcome to Protected Dashboard</h1>
}
// @ts-ignore

const withAuth = InputComponent => {
  return props => {
    const isAuth = true
    if (!isAuth) return <Navigate to={'/login'} />

    return <InputComponent {...props} />
  }
}

const HOC = withAuth(Dashboard)

export default HOC

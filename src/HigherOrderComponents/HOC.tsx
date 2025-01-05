import React from 'react'
import { Navigate } from 'react-router-dom'

// this is protected dashboard
const Dashboard = () => {
  return <h1>Welcome to Protected Dashboard</h1>
}
// @ts-ignore

const withAuth = InputComponent => {
  return props => {
    // here use the localStorage or cokkies to check the token
    const isAuth = true
    // if no token available , redirect to the login page
    if (!isAuth) return <Navigate to={'/login'} />

    // if the user is authenticated , token is present , then return the dashboard
    //it means thatt the dashboard is protected , and only logged in users can access that

    return <InputComponent {...props} />
  }
}
// now we can use this withAuth(any component) for any component
const HOC = withAuth(Dashboard)

export default HOC

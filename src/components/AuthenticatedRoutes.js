import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { authContext } from './context/authContext'

function AuthenticatedRoutes() {
    const {token,user} = useContext(authContext)
    return (
        (token && user) ? <Outlet/> : <Navigate to='/login' />
    )
}

export default AuthenticatedRoutes
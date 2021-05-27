import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props)=>{
        if (localStorage.getItem('token')) {
            return <Component {...props}/>
        } else {
            return <Redirect to="/"/>
        }
    }}
    />
}

export default PrivateRoute
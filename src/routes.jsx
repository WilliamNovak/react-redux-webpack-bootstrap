import React from 'react'
import { Router, Redirect, hashHistory } from 'react-router'
import { router as routesAuth } from 'module-auth/routes'

export default = () => (
    <Router history={hashHistory}>
        {routesAuth}
        <Redirect from="*" to="/" />
    </Router>
)

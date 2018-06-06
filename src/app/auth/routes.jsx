import React from 'react'
import SignIn from 'module-auth/components/signIn/'
import LogOut from 'module-auth/components/logOut/'
import Unauthorized from 'module-auth/components/unauthorized/'
import { Route } from 'react-router'

export const router = (
    <Route>
        <Route path="/" component={SignIn} />
        <Route path="/log-out" component={LogOut} />
        <Route path="/you-shall-not-pass" component={Unauthorized} />
    </Route>
)

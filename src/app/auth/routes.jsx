import React from 'react'
import SignIn from 'auth/components/signIn/'
import LogOut from 'auth/components/logOut/'
import Register from 'auth/components/register/'
import Unauthorized from 'auth/components/unauthorized/'
import { Route } from 'react-router'

export const router = (
    <Route>
        <Route path="/" component={SignIn} />
        <Route path="/log-out" component={LogOut} />
        <Route path="/register" component={Register} />
        <Route path="/you-shall-not-pass" component={Unauthorized} />
    </Route>
)

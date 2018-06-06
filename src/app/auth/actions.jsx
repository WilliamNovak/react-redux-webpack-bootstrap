import type from './types'

export const logOut = () => ({
    type: type.USER_LOGOUT,
    payload: false
})

export const setUser = (user = false) => ({
    type: type.LOGGED_USER_FETCHED,
    payload: user
})

export const setToken = (token = false) => ({
    type: type.USER_TOKEN,
    payload: token
})

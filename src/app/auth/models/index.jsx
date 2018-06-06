import { setToken, setUser } from 'module-auth/actions'

/**
 * Sign in.
 * @param payload
 */
export const signIn = (payload = false) => {
    return dispatch => {
        let token = 'sense8,houseofcards,vikings,westworld,gameofthrones'
        dispatch([
            setUser(payload),
            setToken(token)
        ])
    }
}

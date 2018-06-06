import { combineReducers } from 'redux'

/**
 * The3rd Components reducers
 */
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

/**
 * App Components reducers
 */
import authReducer from 'module-auth/reducer'

/**
 * Combine all reducers
 */
export default combineReducers({
    toastr: toastrReducer,
    form: formReducer,
    loadingBar: loadingBarReducer,
    auth: authReducer
})

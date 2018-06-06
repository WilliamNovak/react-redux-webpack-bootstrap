import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import './styles.css'

/**
 * Component toast.
 * Easy to handdle message alerts.
 */
export default props => (
    <ReduxToastr
        timeOut={3000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />

)

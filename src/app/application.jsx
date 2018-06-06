import React from 'react'
import LoadingBar from 'html-loading-bar'
import ToastMessage from 'html-toastr-messages'

export default () => (
    <div>
        <LoadingBar />
        <ToastMessage />
        {props.children}
    </div>
)

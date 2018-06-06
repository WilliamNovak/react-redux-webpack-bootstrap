import React from 'react'
import LoadingBar from 'react-redux-loading-bar'
export default props => <LoadingBar
    updateTime={100}
    progressIncrease={10}
    style={{zIndex: 999999999, height: '4px'}}
    showFastActions
/>

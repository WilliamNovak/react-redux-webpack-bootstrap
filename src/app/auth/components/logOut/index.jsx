import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOut } from 'auth/actions'
import View from 'auth/components/logOut/view'

/**
 * Component LogOut.
 */
class LogOut extends Component {

    constructor(props) {
        super (props)
        this.state = {
        }
    }

    render() {

        return <View />
        
    }
}

LogOut.contextTypes = {
    router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
    logOut
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)

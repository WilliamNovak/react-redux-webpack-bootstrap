import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signIn } from 'module-auth/models/'
import View from 'module-auth/components/signIn/view'
import Form from 'module-auth/components/signIn/forms/form-sign-in'

class Index extends Component {

    constructor(props) {
        super(props)
    }

    onSubmit = (values) => this.props.signIn(values)

    render() {

        const { authenticated } = this.props.auth

        if (!authenticated) {
            return <View><Form onSubmit={this.onSubmit} /></View>
        }

        if (authenticated) {
            return <View>See app/auth/components/signIn/index.jsx:21<View>
        }

        return <div>Loading...</div>
    }
}

Index.contextTypes = {
    router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)

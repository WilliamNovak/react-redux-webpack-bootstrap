import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signIn } from 'module-auth/models/'
import { logOut } from 'module-auth/actions'
import { Link } from 'react-router'
import View from 'module-auth/components/signIn/view'
import Form from 'module-auth/forms/form-sign-in'

class Index extends Component {

    constructor(props) {
        super(props)
    }

    onSubmit = (values) => this.props.signIn(values)

    render() {

        const { authenticated, user } = this.props.auth

        if (!authenticated) {
            return (
                <View>
                    <Form onSubmit={this.onSubmit} />
                </View>
            )
        }

        if (authenticated) {
            return (
                <View>
                    <p>{JSON.stringify(user)}</p>
                    <small>See app/auth/components/signIn/index.jsx:33</small>
                    <p>
                        Click <Link onClick={this.props.logOut} to="/log-out">here</Link> to clear auth.user reducer and go to log out component.
                    </p>
                </View>
            )
        }

        return (
            <div>Loading...</div>
        )
    }
}

Index.contextTypes = {
    router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn, logOut
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)

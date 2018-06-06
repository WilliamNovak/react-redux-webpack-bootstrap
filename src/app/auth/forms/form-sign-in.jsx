import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { required, email, renderField } from 'form-utils'

class SignIn extends Component {

    constructor(props){ super(props) }

    render () {

        const { handleSubmit, submitting, pristine, onSubmit } = this.props

        return (
                <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>

                    <Field
                        name="email"
                        type="email"
                        placeholder="Seu e-mail"
                        component={renderField}
                        validate={[required, email]}
                        />

                    <Field
                        name="password"
                        type="password"
                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
                        component={renderField}
                        validate={[required]}
                        />

                    <button type="submit" disabled={pristine || submitting} className="btn btn-lg btn-primary btn-block" >
                        sign in
                    </button>

                </form>
        )

    }
}

SignIn = reduxForm({
    form: 'form-sign-in',
    destroyOnUnmount: false
})(SignIn)

const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

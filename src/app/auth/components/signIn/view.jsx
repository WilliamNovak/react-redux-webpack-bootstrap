import React from 'react'
import { Container, Row, Column } from 'html-grid'
import { Link } from 'react-router'

export default (props) => (
    <Container>
        <Row>
            <Column mobile={12} tablet={3} desktop={4}></Column>
            <Column mobile={12} tablet={6} desktop={4}>

                <h1 className="text-center login-title">
                    SignIn Component
                </h1>

                <p>
                    Please install <Link to="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">Redux Devtools</Link> on your Google Chrome and activate it when running this app.
                </p>

                <div>
                    {props.children}
                </div>

            </Column>
            <Column mobile={12} tablet={3} desktop={4}></Column>
        </Row>
    </Container>
)

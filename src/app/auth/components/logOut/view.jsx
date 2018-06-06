import React from 'react'
import { Container, Row, Column } from 'html-grid'
import { Link } from 'react-router'

export default (props) => (
    <Container>
        <Row>
            <Column mobile={12} tablet={3} desktop={4}></Column>
            <Column mobile={12} tablet={6} desktop={4}>

                <h1 className="text-center login-title">
                    LogOut Component
                </h1>

                <p>
                    Bye!<br />
                    Click <Link to="/">here</Link> to back to sign in form.
                </p>

            </Column>
            <Column mobile={12} tablet={3} desktop={4}></Column>
        </Row>
    </Container>
)

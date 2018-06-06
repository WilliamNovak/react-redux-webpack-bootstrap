import React from 'react'
import { Container, Row, Column } from 'html-grid'

export default props => (
    <Container>
        <Row>
            <Column mobile={12} tablet={3} desktop={4}></Column>
            <Column mobile={12} tablet={6} desktop={4}>

                <h1 className="text-center login-title">
                    Sign In Component
                </h1>

                <div>
                    {props.children}
                </div>

            </Column>
            <Column mobile={12} tablet={3} desktop={4}></Column>
        </Row>
    </Container>
)

import React from 'react'
import { Container, Row, Column } from 'html-grid'
import { Link } from 'react-router'

export default props => (
    <Container>
        <Row>
            <Column mobile={12} tablet={4} desktop={4} />
            <Column mobile={12} tablet={4} desktop={4}>
                <div className="text-center">
                    <h1>You shall not pass!</h1>
                    <p>
                        <small><Link to="/">Clique here</Link> to back.</small>
                    </p>
                </div>
            </Column>
            <Column mobile={12} tablet={4} desktop={4} />
        </Row>
    </Container>
)

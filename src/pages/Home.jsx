import React from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'

function Home() {
    return (
        <>
            <Row className='mt-5'>
                <Col sm={6} md={4} lg={3} xl={2} className='px-5 py-3'>
                    <RestCard />
                </Col>
            </Row>
        </>
    )
}

export default Home
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';

function RestView() {
    return (
        <>
            <Row>
                <Col md={1}>

                </Col>

                <Col md={3}>
                    <img src="https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/4:3/w_1440,h_1080,c_limit/Untitled%20design%20(14).png" alt="" width={'100%'} height={'100%'} className='rounded' />
                </Col>

                <Col md={7} className='px-5 '>
                    <hr />
                    <h5 className='text-center'>Restaurant <span className='text-warning'>Details</span></h5>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item><h5 className='text-center p-2'>Restaurant Name</h5></ListGroup.Item>
                        <ListGroup.Item>Neighbourhood:</ListGroup.Item>
                        <ListGroup.Item>Cuisine type: </ListGroup.Item>
                        
                    </ListGroup>
                </Col>

            </Row>
        </>
    )
}

export default RestView
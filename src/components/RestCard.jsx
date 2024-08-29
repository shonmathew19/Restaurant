import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard() {
    return (
        <>
            <Link to={'/restaurant_view'} style={{textDecoration:'none'}}>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src="https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/4:3/w_1440,h_1080,c_limit/Untitled%20design%20(14).png" />
                    <Card.Body>
                        <Card.Title className='text-center text-warning'>Card Title</Card.Title>
                        <Card.Text className='text-center'>
                            Neighbour hood: <span className=' text-warning ms-2'>Location</span>
                        </Card.Text>

                    </Card.Body>
                </Card></Link>

        </>
    )
}

export default RestCard
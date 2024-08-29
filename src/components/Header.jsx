import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar className="dark">
                <Container>
                    <Link to={'/'} style={{textDecoration:'none'}}>
                        <Navbar.Brand href="#home"  >
                            <img
                                alt=""
                                src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
                                width="40"
                                height="40"
                                className="d-inline-block align-top me-2"
                            />{' '}
                            <span style={{ color: 'white' }}>FOOD</span> <span className='text-warning fw-bold'>CIRCLE</span>
                        </Navbar.Brand>
                    </Link>

                </Container>
            </Navbar>
        </>
    )
}

export default Header
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar className="bg-dark mt-3">
            <Container className="d-flex justify-content-between align-items-center">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand className="d-flex align-items-center text-white">
                        <img
                            alt=""
                            src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-2"
                        />
                        <span>FOOD</span>
                        <span className='text-warning fw-bold '>CIRCLE</span>
                    </Navbar.Brand>
                </Link>
                <input
                    type="text"
                    className='form-control w-50'
                    placeholder='Search by neighborhood'
                    
                />
            </Container>
        </Navbar>
    );
}

export default Header;

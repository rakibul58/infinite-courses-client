import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../assests/images/favicon-32x32.png';
import { FaToggleOn , FaToggleOff} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Header = () => {
    const [dark, setDark] = useState(false);
    return (
        <Navbar collapseOnSelect expand="lg" bg={dark?'dark':'light'} variant={dark?'dark':'light'}>
            <Container>
                <Navbar.Brand href="#home" className='navbar-title text-primary fw-semibold fs-2'>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-center"
                    />{' '}
                    Infinite Courses
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fw-semibold text-secondary">
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <div onClick={()=>setDark(!dark)} className={`fw-semibold fs-4 me-3 ${dark?'text-light':'text-dark'}`}>
                            {dark ?

                                <>
                                    Dark {' '}
                                    <FaToggleOn/>
                                </>
                                :
                                <>
                                    Light {' '}
                                    <FaToggleOff/>
                                </>

                            }
                        </div>
                        
                        <Button className='fw-semibold mx-2 my-1' variant='primary'>Login</Button>
                        <Button className='fw-semibold my-1' variant='outline-primary'>Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
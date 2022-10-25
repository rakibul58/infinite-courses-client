import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../assests/images/favicon-32x32.png';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Header = () => {
    const [dark, setDark] = useState(false);
    return (
        <Navbar collapseOnSelect expand="lg" bg={dark ? 'dark' : 'light'} variant={dark ? 'dark' : 'light'}>
            <Container>
                <Link className='text-decoration-none' to='/'>
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
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-flex gap-3">
                        <Link className='text-secondary text-decoration-none fw-semibold' to="/courses">Courses</Link>
                        <Link className='text-secondary text-decoration-none fw-semibold' to="/faq">FAQ</Link>
                        <Link className='text-secondary text-decoration-none fw-semibold' to="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        <div onClick={() => setDark(!dark)} className={`fw-semibold fs-4 me-3 ${dark ? 'text-light' : 'text-dark'}`}>
                            {dark ?

                                <>
                                    Dark {' '}
                                    <FaToggleOn />
                                </>
                                :
                                <>
                                    Light {' '}
                                    <FaToggleOff />
                                </>

                            }
                        </div>
                        <Link to='/login'>
                            <Button className='fw-semibold mx-2 my-1' variant='primary'>Login</Button>
                        </Link>
                        <Link to='/register'>
                            <Button className='fw-semibold my-1' variant='outline-primary'>Register</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
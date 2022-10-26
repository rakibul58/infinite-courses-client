import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div style={{ maxWidth: '400px' }} className='container mt-5 border border-3 p-4 rounded-5 border-primary'>
            <h2 className='mb-3 text-center text-primary'>Register</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-semibold text-primary text-opacity-75'>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label className='fw-semibold text-primary text-opacity-75'>ImageUrl</Form.Label>
                    <Form.Control name='imageURL' type="text" placeholder="Enter Image URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold text-primary text-opacity-75'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-semibold text-primary text-opacity-75'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='rounded-3 w-100 fw-semibold' variant="primary" type="submit">
                    Register
                </Button>

                <p className="text-dark mt-4 text-center">
                    Already Have an Account? Please <Link to='/login'>Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;
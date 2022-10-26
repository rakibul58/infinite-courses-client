import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {googleProviderLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.error(error));
    }
    return (
        <div style={{maxWidth:'400px'}} className='container mt-5 border border-3 p-4 rounded-5 border-primary'>
            <h2 className='mb-3 text-center text-primary'>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold text-primary text-opacity-75'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-semibold text-primary text-opacity-75'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <Button className='rounded-3 w-100 fw-semibold' variant="primary" type="submit">
                    Login
                </Button>
                <p className="text-dark mt-4 text-center">
                    Don't Have an Account? Please <Link to='/register'>Register</Link>
                </p>
                <p className='text-center fw-semibold text-secondary'>Or</p>
                <Button onClick={handleGoogleSignIn} className='rounded-3 w-100 fw-semibold mb-3' variant="outline-primary">
                    Join With <FaGoogle/>
                </Button>
                <Button className='rounded-3 w-100 fw-semibold' variant="outline-dark">
                    Join With <FaGithub/>
                </Button>
            </Form>
        </div>
    );
};

export default Login;
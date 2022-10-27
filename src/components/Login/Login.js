import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error , setError] = useState('');
    const {providerLogin , signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email , password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from , {replace: true});
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }
    

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            navigate(from , {replace: true});
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        });
    }
    return (
        <div style={{maxWidth:'400px'}} className='container mt-5 border border-3 p-4 rounded-5 border-primary'>
            <h2 className='mb-3 text-center text-primary'>Login</h2>
            <Form onSubmit={handleSubmit}>
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
                <p className='text-danger text-center'><small>{error}</small></p>
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
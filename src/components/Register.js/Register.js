import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Register = () => {

    const {createUser} = useContext(AuthContext);


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name , photoURL , email , password);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.error(error));
    }

    return (
        <div style={{ maxWidth: '400px' }} className='container mt-5 border border-3 p-4 rounded-5 border-primary'>
            <h2 className='mb-3 text-center text-primary'>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-semibold text-primary text-opacity-75'>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label className='fw-semibold text-primary text-opacity-75'>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL" />
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
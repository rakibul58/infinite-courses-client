import React from 'react';
import { Button } from 'react-bootstrap';
import { FaHome,  FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NotFound = () => {
    //404 Route
    return (
        <div style={{height: '700px'}} className='text-center d-flex justify-content-center align-items-center'>
            <div>
                <h1 style={{fontSize:'10rem'}} className='text-danger'>404</h1>
                <h2 className='my-3 text-danger text-opacity-75 fw-bold'>OPPS! PAGE NOT FOUND</h2>
                <p className='fw-semibold text-secondary mb-3'>The page you are looking for does not exists.If you thing
                    <br /> something is wrong contact us</p>
                <Link to='/'>
                    <Button variant='outline-danger fw-semibold'>Return <FaHome /></Button>
                </Link>
                <Button variant='danger' className='ms-2 fw-semibold'>Contact <FaMobileAlt/></Button>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div style={{marginTop: '100px'}} className='container'>
            <h5 className='text-primary text-center fw-bold'>Frequently Asked Questions</h5>
            <h1 className='text-center text-secondary mb-5'>These are some of the Frequently Asked Question</h1>
            {/* Accordian */}
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How Can I Login?</Accordion.Header>
                    <Accordion.Body>
                        You Can Login directly with your Gmail and Github. You can also login with your email and password if you registered.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I register without an email?</Accordion.Header>
                    <Accordion.Body>
                        No, email is required for registration. You can register without an email address.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Will there be any courses added?</Accordion.Header>
                    <Accordion.Body>
                        Yes, we are constantly trying to more meaningful courses.Our team is working hard bring them to you;
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;
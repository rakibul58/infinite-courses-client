import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mt-4 container px-3'>
            <h1 className='mb-4 text-primary text-center'>Recent Blogs</h1>
            <div className='grid row row-cols-1 row-cols-lg-3 justify-content-center gap-5'>
                <Card border="primary">
                    <Card.Header className='text-primary fw-bold bg-primary bg-opacity-10 fs-6'>What is cors?</Card.Header>
                    <Card.Body>
                        
                        <Card.Text className='fw-semibold text-secondary'>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card border="primary">
                    <Card.Header className='text-primary fw-bold bg-primary bg-opacity-10 fs-6'>Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
                    <Card.Body>
                        
                        <Card.Text className='fw-semibold text-secondary'>
                        Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world. <br /><br />
                        The other options to implement authentication are: <br /><br />
                        AWS Amplify , Supabase , Nhost , Appwrite , Realm etc.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card border="primary">
                    <Card.Header className='text-primary fw-bold bg-primary bg-opacity-10 fs-6'>How does the private route work?</Card.Header>
                    <Card.Body>
                        
                        <Card.Text className='fw-semibold text-secondary'>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card border="primary">
                    <Card.Header className='text-primary fw-bold bg-primary bg-opacity-10 fs-6'>What is Node? How does Node work?</Card.Header>
                    <Card.Body>
                        
                        <Card.Text className='fw-semibold text-secondary'>
                        Learn about Node.js, a JavaScript runtime for building server-side or desktop applications.
                        <br /><br />
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
    );
};

export default Blog;
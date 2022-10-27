import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { image, title , description , id} = course;
    // Cards for cardDetail
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img className='img-fluid' variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-primary'>{title}</Card.Title>
                    <Card.Text className='text-secondary'>
                        {description.length>20 ? description.slice(0,70)+'...' : description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-white border-0'>
                    <Link to={`/course/${id}`}><Button variant='outline-primary' className="fw-semibold w-100 mb-2">Go to Course Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default CourseCard;
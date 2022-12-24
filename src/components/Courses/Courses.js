import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
    
        <Container fluid className='mb-5'>
            {/* Cards */}
            <Row className='gy-5'>
                <Col lg="9" className='px-5'>
                    <h4 className='mt-5 text-primary fw-bold text-opacity-75 text-center'>Our Courses</h4>
                    <h1 className='text-secondary text-center'>These are our main courses</h1>
                    <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                        {
                            courses.map(course => <CourseCard
                                key={course.id}
                                course={course}
                            ></CourseCard>)
                        }
                    </Row>

                </Col>
                {/* Sidebar */}
                <Col lg="3" className='bg-gray bg-opacity-10 h-100 p-5 sticky-lg-top'>
                    <h4 className='mb-3 fw-semibold'>Visit Courses</h4>
                    <ListGroup>
                        {courses.map(course=><ListGroupItem key={course.id}><Link to={`/course/${course.id}`} className='fw-semibold text-decoration-none text-secondary'>{course.title}</Link></ListGroupItem>)}
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    );
};

export default Courses;
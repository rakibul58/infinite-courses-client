import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <Container fluid className='mb-5'>
            <Row className='gy-5'>
                <Col lg="9" className='px-5'>
                    <h1 className='mt-5 text-primary text-opacity-75'>Our Courses</h1>

                    <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                        {
                            courses.map(course => <CourseCard
                                key={course.id}
                                course={course}
                            ></CourseCard>)
                        }
                    </Row>

                </Col>
                <Col lg="3" className='bg-primary bg-opacity-10 h-100 p-5'>
                    <h2 className='mb-3 text-center font-monospace text-primary fw-bold'>Visit Our Courses</h2>
                    <Row lg={1} className="gy-4">
                        {courses.map(course=><Link className='btn btn-primary fw-semibold'>{course.title}</Link>)}
                    </Row>
                </Col>
            </Row>

        </Container>
    );
};

export default Courses;
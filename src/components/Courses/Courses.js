import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <Container className='mb-5'>
            <Row>
                <Col lg="10">
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
                <Col lg="2"></Col>
            </Row>

        </Container>
    );
};

export default Courses;
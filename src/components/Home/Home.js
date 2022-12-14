import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import FAQ from '../FAQ/FAQ';
import Courses from '../Courses/Courses';
import Blogs from './Blogs';
import UpcomingCourses from './UpcomingCourses/UpcomingCourses';
import Contact from './Contact/Contact';
import Team from './Team/Team';
import Pricing from './Pricing/Pricing';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {

    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col lg={7}>
                        <Image rounded fluid src='https://img.etimg.com/thumb/msid-77937584,width-1200,height-900,imgsize-148807,resizemode-8,quality-100/industry/services/education/view-heres-why-india-needs-to-be-future-ready-in-online-education.jpg'></Image>
                    </Col>
                    <Col lg={5} className='my-auto'>
                        <h1 className='ms-0 ms-lg-5 mt-3 mt-lg-0 fw-bold'>Welcome to <span className='text-primary font-monospace'>Infinite Knowledge</span>!!!</h1>
                        <p className='ms-0 ms-lg-5 my-5 text-secondary fw-semibold fs-5'>Join our courses today. This is place to enrich your Knowledge and increase your horizon.You can learn everything from the comfort of your home.</p>
                        <Link className='ms-0 ms-lg-5' to='/courses'><Button className='fw-semibold fs-5'>Visit Courses <FaArrowRight /> </Button></Link>
                    </Col>
                </Row>
            </Container>
            <div style={{ margin: "200px 0" }}>
                <Courses></Courses>
            </div>
            <div style={{ margin: "200px 0" }}>
                <UpcomingCourses></UpcomingCourses>
            </div>
            <div style={{ margin: "200px 0" }}>
                <Team></Team>
            </div>
            <div style={{ margin: "200px 0" }}>
                <Pricing></Pricing>
            </div>
            <div style={{ margin: "200px 0" }}>
                <CustomerReviews></CustomerReviews>
            </div>
            <div style={{ margin: "200px 0" }}>
                <Blogs></Blogs>
            </div>
            <div style={{ margin: "200px 0" }}>
                <FAQ></FAQ>
            </div>
            <div style={{ margin: "200px 0" }}>
                <Contact></Contact>
            </div>
            <div style={{ margin: "200px 0" }}>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;
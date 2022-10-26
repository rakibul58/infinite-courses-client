import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaDollarSign, FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf'
const ref = React.createRef();
const CourseDetail = () => {
    const course = useLoaderData();
    const {id, image, title, description, author, rating, price } = course;
    console.log(course)
    return (
        <div className='App mt-3'>
            <h1 className='d-inline me-3'>Download Here</h1>
            <ReactToPdf targetRef={ref} filename={`${title}.pdf`}>
                {({ toPdf }) => (
                    <Button variant='outline-dark' className='ms-auto' onClick={toPdf}><FaDownload /></Button>
                )}
            </ReactToPdf>
            <div className='mt-5' style={{ width: 800, margin: '0 auto' }} ref={ref}>
                <Image className='w-25' fluid src={image} />
                <div className='text-start px-5 mt-3'>
                    <h2>{title}</h2>
                    <h5 className='my-4 text-secondary fw-semibold'>{description}</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-2'>
                            <Image roundedCircle style={{ height: '50px' }} src={author.img}></Image>
                            <div>
                                <p className='m-0 fw-semibold fs-5'>{author.name}</p>
                                <p className='m-0'>Published : <span className='text-secondary fw-semibold'>{author.published_date}</span></p>
                            </div>
                        </div>

                        <p className='m-0 fw-semibold fs-5'>Rating: <span className='text-secondary'>{rating}/5</span></p>
                        <p className='m-0 fw-semibold fs-5'>Price: <span className='text-warning fw-bold'>${price}</span></p>

                    </div>
                </div>
            </div>
            <Link to={`/cashout/${id}`}><Button variant='warning' className='mt-5 text-start fw-semibold'><FaDollarSign/> Purchase Course</Button></Link>
        </div>
    );
};

export default CourseDetail;
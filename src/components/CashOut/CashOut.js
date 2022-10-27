import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Table from 'react-bootstrap/Table';
import { Image } from 'react-bootstrap';
const CashOut = () => {
    const course = useLoaderData();
    const { title, price , image} = course;
    const { user } = useContext(AuthContext);
    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return (
        <div className='mt-5 container'>
            <div className='d-flex flex-wrap justify-content-lg-between px-5 gap-3'>
                <h4 className='text-success fw-bold'>Thanks For Purchasing</h4>
                <div className='bg-success bg-opacity-75 py-2 px-5 rounded-3 text-light fw-semibold fs-4'>Paid</div>
            </div>
            <div className='d-flex flex-wrap justify-content-center justify-content-lg-between px-5 mt-3 fw-semibold text-secondary text-lg-end text-center align-items-center'>
                <div>
                    <Image style={{height:'100px'}} fluid src={image}></Image>
                </div>
                <div>
                    <p className='m-0'>Order ID : #{user?.uid}</p>
                    <p className='m-0'>Date of Purchase: {date}-{month}-{year}</p>
                </div>
            </div>
            <div className='mt-5'>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Sold By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fw-semibold'>
                                <p className='m-0'>Infinite Course</p>
                                <p className='m-0'>Email: infinit.course@gmail.com</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mt-2'>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Sold to</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fw-semibold'>
                                <p className='m-0'>Name: {user?.displayName}</p>
                                {user?.email && <p className='m-0'>Email: {user?.email}</p>}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mt-2'>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className='text-end'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fw-semibold'>
                                <p className='m-0'>{title}</p>
                            </td>
                            <td className='fw-semibold'>
                                <p className='m-0 text-end'>${price}</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='fw-semibold'>
                                <p className='m-0 text-end'>Subtotal: ${price}</p>
                                <p className='m-0 text-end'>Discount: $0</p>
                                <p className='m-0 text-end'>Tax: ${price*0.15}</p>
                                <p className='m-0 text-end'>Total: ${price + price*0.15}</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default CashOut;
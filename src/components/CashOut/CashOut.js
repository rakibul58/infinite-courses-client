import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CashOut = () => {
    const course = useLoaderData();
    const {title} = course;
    return (
        <div>
            <h4>{title}</h4>
        </div>
    );
};

export default CashOut;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    const handleGoBackToHome = () => {
        navigate('/');
    }

    return (
        <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='font-extrabold text-9xl'>404</h1>
            <h3 className='font-medium text-3xl mt-5'>Woops, looks like this page does not exist</h3>
            <p>You could either go back to the homepage</p>
            <button onClick={handleGoBackToHome} className='mt-10 bg-black text-white px-20 py-4 text-xl rounded-xl hover:opacity-50 duration-300'>Go Back</button>
        </section>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-bookify-base text-white fixed w-full'>
            <div className='flex justify-between w-4/5 mx-auto py-4'>
                <div>
                    <Link to='/'>
                        <h2 className='font-medium className= hover:opacity-50 duration-300'><span className='text-2xl text-bookify-light'>BOOK</span><span>ify</span></h2>
                    </Link>
                </div>
                <div>
                    <nav className='flex font-medium text-lg'>
                        <Link to='/categories' className='hover:opacity-50 duration-300'>Categories</Link>
                        <Link to='/books' className='ml-10 hover:opacity-50 duration-300'>Books</Link>
                    </nav>
                </div>
            </div>
        </header >
    );
};

export default Header;
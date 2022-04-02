import React, { createContext, useState } from 'react';
import { PhotographIcon } from '@heroicons/react/solid';
import { MapIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/solid';
import { BookOpenIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

export const CategoryContext = createContext('All');

const Categories = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState('Arts');

    const showBooks = (cat) => {
        setCategory(cat);
        navigate(`/books`);
    }

    return (
        <CategoryContext.Provider value={category}>
            <section className='py-40 w-4/5 mx-auto'>
                <h2 className='text-left text-5xl font-medium text-bookify-light mb-10'>Categories</h2>
                <div className='grid grid-cols-4 gap-8'>
                    <div onClick={() => showBooks('Arts & Photography')} className='border-4 border-bookify-light p-8 rounded-3xl cursor-pointer hover:opacity-50 duration-300'>
                        <PhotographIcon className='fill-bookify-light'></PhotographIcon>
                        <h3 className='text-2xl font-medium text-bookify-light'>Arts & Photography</h3>
                    </div>
                    <div className='border-4 border-bookify-light p-8 rounded-3xl cursor-pointer hover:opacity-50 duration-300'>
                        <MapIcon className='fill-bookify-light'></MapIcon>
                        <h3 className='text-2xl font-medium text-bookify-light'>Food & Drink</h3>
                    </div>
                    <div className='border-4 border-bookify-light p-8 rounded-3xl cursor-pointer hover:opacity-50 duration-300'>
                        <HeartIcon className='fill-bookify-light'></HeartIcon>
                        <h3 className='text-2xl font-medium text-bookify-light'>Romance</h3>
                    </div>
                    <div className='border-4 border-bookify-light p-8 rounded-3xl cursor-pointer hover:opacity-50 duration-300'>
                        <BookOpenIcon className='fill-bookify-light'></BookOpenIcon>
                        <h3 className='text-2xl font-medium text-bookify-light'>Biography</h3>
                    </div>
                </div>
            </section>
        </CategoryContext.Provider>
    );
};

export default Categories;
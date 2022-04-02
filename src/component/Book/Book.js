import React from 'react';

const Book = (props) => {
    const { img, category, name, writer, price } = props.book;

    return (
        <div className='border-2 border-bookify-light-gray rounded-3xl grid grid-rows-book-card'>
            <div className='flex justify-center p-8'>
                <img className='h-full rounded-xl' src={img} alt={name} width='248' />
            </div>
            <div className='text-left px-8'>
                <p className='text-bookify-base-light'>{category}</p>
                <h5 className='text-lg font-medium'>{name}</h5>
                <p className='text-bookify-dark-gray'><small>{writer}</small></p>
                <h3 className='text-lg font-medium'>${price}</h3>
            </div>
            <div className='px-8 my-5'>
                <button className='bg-black w-full text-white py-3 font-medium rounded-xl hover:opacity-50 duration-300'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Book;
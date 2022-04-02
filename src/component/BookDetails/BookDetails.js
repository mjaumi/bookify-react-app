import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import useBooks from '../../hooks/useBooks';

const BookDetails = () => {
    const { bookId } = useParams();
    const [books] = useBooks();
    const [book, setBook] = useState({});

    useEffect(() => {
        setBook(books.find(book => book.id === bookId));
    }, [bookId, books]);

    return (
        <section className='py-40 w-4/5 mx-auto'>
            <h2 className='text-left text-5xl font-medium text-bookify-light mb-10'>Book Details</h2>

            <div>
                <div className='flex justify-center'>
                    <img src={book?.img} alt={book?.name} width='280' />
                </div>
                <div className='mt-10'>
                    <h3 className='font-semibold text-4xl text-bookify-base-light'>Name: {book?.name}</h3>
                    <p className='text-lg font-medium mt-2'>Author: {book?.writer}</p>
                    <p className='text-lg font-medium mt-2'>Category: {book?.category}</p>
                    <p className='text-lg font-medium mt-2'>Number of Pages: {book?.page}</p>
                    <p className='text-lg font-medium mt-2'>Price: ${book?.price}</p>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;
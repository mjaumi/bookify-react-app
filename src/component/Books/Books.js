import React from 'react';
import useBooks from '../../hooks/useBooks';
import Book from '../Book/Book';

const Books = () => {
    const [books] = useBooks();

    return (
        <section className='py-40 w-4/5 mx-auto'>
            <div className='grid grid-cols-3 gap-8'>
                {
                    books.map(book => <Book
                        key={book.id}
                        book={book}
                    ></Book>)
                }
            </div>
        </section>
    );
};

export default Books;
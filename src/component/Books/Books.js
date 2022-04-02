import React, { useContext } from 'react';
import useBooks from '../../hooks/useBooks';
import Book from '../Book/Book';
import { CategoryContext } from '../Categories/Categories';

const Books = () => {
    const [books] = useBooks();
    const category = useContext(CategoryContext);

    return (
        <section className='py-40 w-4/5 mx-auto'>
            <h2 className='text-left text-5xl font-medium text-bookify-light mb-10'>{category} Books</h2>
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
import React from 'react';
import useBooks from '../../hooks/useBooks';
import Book from '../Book/Book';

const Home = () => {
    const [books] = useBooks();
    const featuredBooks = books.filter(book => book.popularity === 5);

    return (
        <section>
            {/* hero section */}
            <div className='bg-home-bg bg-center bg-black/40 bg-blend-multiply h-screen'>
                <h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-white font-light'>
                    Welcome To
                    <br />
                    <span className='text-bookify-light font-medium'>Bookify</span>
                </h2>
            </div>
            {/* featured books section */}
            <div className='my-20 w-4/5 mx-auto'>
                <h2 className='text-left text-5xl font-medium text-bookify-light mb-10'>Best Selling Books</h2>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        featuredBooks.map(book => <Book
                            key={book.id}
                            book={book}
                        ></Book>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;
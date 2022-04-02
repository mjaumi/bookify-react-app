import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return [books];
}

export default useBooks;
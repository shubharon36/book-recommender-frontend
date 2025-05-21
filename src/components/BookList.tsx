
import React from 'react';
import { Book } from '@/utils/bookData';
import BookCard from './BookCard';

interface BookListProps {
  books: Book[];
  loading?: boolean;
}

const BookList: React.FC<BookListProps> = ({ books, loading = false }) => {
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="animate-pulse font-playfair text-cas-silver">
          Searching for literary treasures...
        </div>
      </div>
    );
  }

  if (books.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
      {books.map((book) => (
        <div key={book.id} className="animate-fade-in" style={{animationDelay: `${Number(book.id) * 100}ms`}}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;

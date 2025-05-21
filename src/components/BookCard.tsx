
import React from 'react';
import { Book } from '@/utils/bookData';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card-transition bg-cas-darkgray border border-cas-gray rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
      <div className="aspect-[2/3] overflow-hidden">
        <img 
          src={book.coverImage} 
          alt={`${book.title} cover`} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-cas-white mb-1">{book.title}</h3>
        <p className="text-cas-silver mb-2">{book.author} ({book.year})</p>
        <p className="text-cas-lightgray text-sm mb-3 line-clamp-2">{book.description}</p>
        <div className="flex flex-wrap gap-1">
          {book.tags.map(tag => (
            <span 
              key={tag} 
              className="inline-block bg-cas-gray px-2 py-1 text-xs rounded-full text-cas-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;

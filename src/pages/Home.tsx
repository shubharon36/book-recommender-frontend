
import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import axios from 'axios';


interface Book {
    'Book-Title': string;
    'Book-Author': string;
    'Image-URL-L': string;
    num_ratings?: number; // Optional, as it might not be in all data
    avg_rating?: number;   // Optional
}



const Home: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const isMobile = useIsMobile();

useEffect(() => {
    const fetchTopBooks = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/top-50');
            if (Array.isArray(response.data)) {
                setBooks(response.data);
            } else {
                console.error('API response for top books is not an array:', response.data);
                // Optionally set books to an empty array or handle the error differently
                setBooks([]);
            }
        } catch (error) {
            console.error('Error fetching top books:', error);
            setBooks([]); // Ensure books is still an array in case of error
        }
    };

    fetchTopBooks();
}, []);
  const renderStars = (rating: number| undefined) => {
      
    if (rating === undefined) return null; // Or return a default, like empty stars

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />;
          } else if (i === fullStars && hasHalfStar) {
            return <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" strokeWidth={0} />;
          } else {
            return <Star key={i} className="w-4 h-4 text-cas-gray" />;
          }
        })}
      </div>
    );
  };

 return (
        <div className="container mx-auto py-6 md:py-12 px-3 md:px-4">
            {/* ... (rest of your Home component, but use books from state) */}
            <header className="mb-8 md:mb-12 text-center">
                <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-cas-white mb-4">
                    Top 50 Books
                </h1>
                <p className="text-cas-silver max-w-2xl mx-auto px-2">
                    A curated selection of melancholic, dreamy, and hauntingly beautiful literary works that have captivated readers.
                </p>

                {isMobile && (
                    <Link
                        to="/recommend"
                        className="mt-6 inline-block px-6 py-3 bg-cas-gray/20 hover:bg-cas-gray/30 rounded-lg border border-cas-gray/50 text-cas-white font-medium transition-all duration-300 flex items-center justify-center"
                    >
                        <BookOpen className="w-5 h-5 mr-2" />
                        Find Your Next Read
                    </Link>
                )}
            </header>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {books.map((book, index) => (
                    <div key={index} className="book-card-transition bg-cas-darkgray border border-cas-gray/50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
                        <div className="aspect-[2/3] bg-cas-gray/20 overflow-hidden">
                            <img
                                src={book['Image-URL-L']}
                                alt={`${book['Book-Title']} cover`}
                                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-3 md:p-4">
                            <h3 className="text-base md:text-lg font-semibold text-cas-white line-clamp-2 min-h-[2.5rem] md:min-h-[3.5rem]">{book['Book-Title']}</h3>
                            <p className="text-sm md:text-base text-cas-silver mb-1 md:mb-2">{book['Book-Author']}</p>
                            <div className="flex justify-between items-center mb-1">
                                {renderStars(book.avg_rating)}
                                {book.avg_rating && <span className="text-xs md:text-sm text-cas-silver">{book.avg_rating.toFixed(1)}/5.0</span>}
                            </div>
                            <p className="text-xs md:text-sm text-cas-lightgray">
                                <span className="text-cas-silver">{book.num_ratings?.toLocaleString()}</span> votes
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
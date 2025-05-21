
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import BookSearch from '@/components/BookSearch';
import { Book } from '@/utils/bookData';
import { useIsMobile } from '@/hooks/use-mobile';
import axios from 'axios';

interface RecommendedBook {
    Title: string;
    Author: string;
    'Image-URL-L': string;
}


const Recommend: React.FC = () => {
  const [searchResults, setSearchResults] = useState<RecommendedBook[]>([]);
 const [hasSearched, setHasSearched] = useState(false);

  const isMobile = useIsMobile();

      const handleSearch = async (searchTerm: string) => {

        setHasSearched(true);

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/recommend', { title: searchTerm }); // Adjust URL if needed
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
            // Handle error (e.g., display an error message to the user)
            setSearchResults([]); // Clear previous results on error
        }
    };


  return (
    <div className="container mx-auto py-8 md:py-12 px-3 md:px-4">
      <header className="text-center mb-10 md:mb-16">
        <div className="flex items-center justify-center mb-3 md:mb-4">
          <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-cas-silver mr-2 md:mr-3" />
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-cas-white">
            Book Recommendations
          </h1>
        </div>
        <p className="text-cas-silver italic max-w-2xl mx-auto mb-6 md:mb-8 px-4 md:px-0">
          Enter a book title to receive personalized recommendations.
        </p>
        
        <div className="mt-8 md:mt-12 mb-10 md:mb-16 px-3 md:px-0">
          <BookSearch onSearch={handleSearch} />
        </div>
      </header>

      <div className="pb-10 md:pb-16">
                {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
                        {searchResults.map((book, index) => (
                            <div key={index} className="animate-fade-in book-card-transition bg-cas-darkgray border border-cas-gray/50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
                                <div className="aspect-[2/3] bg-cas-gray/20 overflow-hidden">
                                    <img
                                        src={book['Image-URL-L']}
                                        alt={`${book.Title} cover`}
                                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-3 md:p-4">
                                    <h3 className="text-base md:text-lg font-semibold text-cas-white mb-1">{book.Title}</h3>
                                    <p className="text-sm md:text-base text-cas-silver mb-1 md:mb-2">{book.Author}</p>
                                    {/* You might need to adjust how you display additional book info */}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
          hasSearched && ( // Only show "No results" if a search has been made
            <div className="text-center text-cas-silver py-6 md:py-10 animate-fade-in px-4">
              <p className="text-xl md:text-2xl font-playfair mb-3 md:mb-4">No recommendations found.</p>
              <p className="max-w-md mx-auto text-sm md:text-base">Please try searching for a different book title.</p>
            </div>
                ))}
            </div>
        </div>
    );
};

export default Recommend;

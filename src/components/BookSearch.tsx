
import React, { useState, useEffect } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Book, searchBooks } from '@/utils/bookData';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import PageFlipLoader from './PageFlipLoader';

interface BookSearchProps {
  onSearch: (searchTerm: string) => void; // Changed prop name and type
}

const BookSearch: React.FC<BookSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const { toast } = useToast();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (searchQuery.trim().length > 0) {
  //       setIsSearching(true);
  //       // Instead of directly providing results, call onSearch with the query
  //       onSearch(searchQuery);
  //       setIsSearching(false);
  //     } else {
  //       onSearch(''); // Or handle empty query as needed
  //     }
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [searchQuery, onSearch]);

  const handleSubmit = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Empty search",
        description: "Please enter a book title or author before submitting",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setShowLoader(true);

    try {
      // Instead of generating local recommendations, call onSearch
      onSearch(searchQuery);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
    } catch (error) {
      console.error('Error initiating search:', error);
      toast({
        title: "Error",
        description: "There was a problem initiating the book search",
        variant: "destructive",
      });
    } finally {
      setTimeout(() => {
        setShowLoader(false);
        setIsSubmitting(false);
      }, 500);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative flex">
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter a book title, author, or theme..."
            className="w-full bg-cas-darkgray/50 text-cas-white border border-cas-gray/50 rounded-lg py-3 px-5 pl-12 placeholder-cas-silver/70 focus:outline-none focus:ring-2 focus:ring-cas-silver/30 transition-all"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cas-silver w-5 h-5" />
          {isSearching && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-cas-silver"></div>
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="ml-2 bg-cas-gray hover:bg-cas-silver/80 text-cas-white transition-all duration-300 px-4"
          variant="default"
        >
          {isSubmitting ? (
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-cas-white"></div>
          ) : (
            <>
              <BookOpen className="mr-1 h-5 w-5" />
              <span className="hidden sm:inline">Find Books</span>
            </>
          )}
        </Button>
      </div>
      
      {showLoader && <PageFlipLoader />}
    </div>
  );
};

export default BookSearch;

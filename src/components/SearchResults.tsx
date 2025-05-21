
import React from 'react';
import { BookOpen } from 'lucide-react';

interface SearchResultsProps {
  results: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="bg-cas-darkgray/50 border border-cas-gray/50 rounded-lg p-5 text-cas-white shadow-lg animate-fade-in">
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          <BookOpen className="h-6 w-6 text-cas-silver" />
        </div>
        <div className="w-full">
          <p className="font-playfair text-cas-white whitespace-pre-wrap break-words">{results}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;


import React from 'react';
import { BookOpen } from 'lucide-react';

const PageFlipLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
      <div className="relative w-24 h-24">
        {/* Book cover */}
        <div className="absolute inset-0 bg-cas-gray rounded-r shadow-lg"></div>
        
        {/* Flipping pages */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute inset-y-1 left-1 right-3 bg-cas-silver/90 rounded-r-sm shadow-md"
            style={{
              animation: `flip-page ${1.5}s ease-in-out infinite ${i * 0.15}s`,
              transformOrigin: 'left',
              zIndex: 5 - i,
            }}
          ></div>
        ))}
        
        {/* Book icon */}
        <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cas-silver opacity-75" size={36} />
      </div>
      <p className="mt-4 text-cas-silver font-playfair italic">Finding literary treasures...</p>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flip-page {
          0% { transform: rotateY(0deg); }
          20% { transform: rotateY(-180deg); }
          40% { transform: rotateY(-180deg); }
          60% { transform: rotateY(-180deg); }
          80% { transform: rotateY(-180deg); }
          100% { transform: rotateY(0deg); }
        }
      `}} />
    </div>
  );
};

export default PageFlipLoader;

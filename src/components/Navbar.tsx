import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Home, Mail, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add body overflow hidden when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return currentPath === path ? 'bg-cas-gray/30 text-cas-white' : 'text-cas-silver hover:bg-cas-gray/20 hover:text-cas-white';
  };

  const goToHome = () => {
    navigate('/');
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay - Shown when menu is open */}
      {isMobile && isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-cas-black" 
          ref={menuRef}
        >
          <div className="px-4 py-4 flex justify-between items-center border-b border-cas-gray/30">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-cas-silver mr-2" />
              <span className="text-xl font-playfair text-cas-white">Ephemeral</span>
            </div>
            <button
              onClick={toggleMenu}
              className="text-cas-silver p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center pt-16 space-y-8">
            <Link
              to="/"
              className={`px-6 py-4 w-4/5 rounded-md flex items-center justify-center transition-colors duration-200 text-xl ${isActive('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-6 h-6 mr-3" />
              <span>Home</span>
            </Link>
            <Link
              to="/recommend"
              className={`px-6 py-4 w-4/5 rounded-md flex items-center justify-center transition-colors duration-200 text-xl ${isActive('/recommend')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="w-6 h-6 mr-3" />
              <span>Recommend</span>
            </Link>
            <Link
              to="/contact"
              className={`px-6 py-4 w-4/5 rounded-md flex items-center justify-center transition-colors duration-200 text-xl ${isActive('/contact')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="w-6 h-6 mr-3" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}

      {/* Regular Navbar - Always visible or hidden under overlay when menu is open */}
      <nav className={`bg-cas-darkgray/80 backdrop-blur-md shadow-lg border-b border-cas-gray/30 sticky top-0 ${isMobile && isMenuOpen ? 'z-0' : 'z-10'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={goToHome} className="flex items-center focus:outline-none">
              <BookOpen className="w-8 h-8 text-cas-silver mr-2" />
              <span className="text-xl font-playfair text-cas-white">Ephemeral</span>
            </button>

            {isMobile ? (
              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                className="text-cas-silver p-2 focus:outline-none z-20"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            ) : (
              <div className="flex space-x-1">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-md flex items-center transition-colors duration-200 ${isActive('/')}`}
                >
                  <Home className="w-5 h-5 mr-2" />
                  <span>Home</span>
                </Link>
                <Link
                  to="/recommend"
                  className={`px-4 py-2 rounded-md flex items-center transition-colors duration-200 ${isActive('/recommend')}`}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>Recommend</span>
                </Link>
                <Link
                  to="/contact"
                  className={`px-4 py-2 rounded-md flex items-center transition-colors duration-200 ${isActive('/contact')}`}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Contact</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
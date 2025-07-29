import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
  activeSystem: number;
  onSystemChange: (system: number) => void;
  activeSystem: number;
  onSystemChange: (system: number) => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick, isDarkMode, activeSystem, onSystemChange }) => {
  return (
    <header className="fixed w-full top-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-[2.6rem] font-bold text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
              Serviqo
            </div>
          </div>
          
          <button
            onClick={onBookingClick}
            className="btn-primary group"
          >
            <Calendar className="w-5 h-5 mr-2" />
            AI Strategy Session
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
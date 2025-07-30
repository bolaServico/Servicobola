import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
  activeSystem: number;
  onSystemChange: (system: number) => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick, isDarkMode, activeSystem, onSystemChange }) => {
  const menuItems = [
    {
      name: 'SERVICES',
      submenu: [
        'Client Acquisition Engine',
        'Operations Automation Hub', 
        'Client Success Platform',
        'Custom AI Solutions',
        'Practice Management Integration'
      ]
    },
    {
      name: 'ABOUT',
      submenu: [
        'Our Story',
        'Team',
        'Mission & Vision',
        'Careers',
        'Press & Media'
      ]
    },
    {
      name: 'BLOG',
      submenu: [
        'AI in Professional Services',
        'Case Studies',
        'Industry Insights',
        'Implementation Guides',
        'ROI Analysis'
      ]
    },
    {
      name: 'FAQS',
      submenu: [
        'Getting Started',
        'Implementation',
        'Pricing & ROI',
        'Technical Support',
        'Compliance & Security'
      ]
    }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-1">
            <div className="text-[2.26rem] font-bold text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
              Serviqo
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium tracking-wide">
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  {/* Submenu */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-900 transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>
          
          <div className="flex-1 flex justify-end">
            <button
              onClick={onBookingClick}
              className="btn-primary group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              AI Strategy Session
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemsCarousel from './components/SystemsCarousel';
import SystemsSection from './components/SystemsSection';
import WhyChooseSection from './components/WhyChooseSection';
import ImplementationSection from './components/ImplementationSection';
import FinalCTA from './components/FinalCTA';
import CaseStudiesSection from './components/CaseStudiesSection';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeSystem, setActiveSystem] = useState(1);
  const { isDarkMode, theme, setTheme } = useDarkMode();
  const bookingLink = "https://cal.com/sridhar-bolanwar-qlky7g/30min";

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleSystemChange = (system: number) => {
    setActiveSystem(system);
  };
  return (
    <div className="min-h-screen bg-black">
      <Header 
        onBookingClick={handleBookingClick} 
        isDarkMode={isDarkMode}
        activeSystem={activeSystem}
        onSystemChange={handleSystemChange}
      />
      <Hero onBookingClick={handleBookingClick} isDarkMode={isDarkMode} />
      <SystemsSection onBookingClick={handleBookingClick} isDarkMode={isDarkMode} />
      <SystemsCarousel 
        onBookingClick={handleBookingClick} 
        isDarkMode={isDarkMode}
        activeSystem={activeSystem}
        onSystemChange={handleSystemChange}
      />
      <WhyChooseSection isDarkMode={isDarkMode} />
      <ImplementationSection isDarkMode={isDarkMode} />
      <CaseStudiesSection isDarkMode={isDarkMode} />
      <FinalCTA onBookingClick={handleBookingClick} isDarkMode={isDarkMode} />
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        bookingLink={bookingLink}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
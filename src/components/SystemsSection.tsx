import React from 'react';

interface SystemsSectionProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
}

const SystemsSection: React.FC<SystemsSectionProps> = ({ onBookingClick, isDarkMode }) => {
  return (
    <section className="py-8 bg-black relative z-30">
    </section>
  );
};

export default SystemsSection;
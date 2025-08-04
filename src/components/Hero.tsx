import React from 'react';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick, isDarkMode }) => {
  return (
    <section id="hero-section" className="pt-32 pb-12 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
          Smart AI for law Firms, professional<br />
            <span className="relative text-white">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                service providers
              </span>
            </span>
          </h1>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Transform your practice with proven AI systems that deliver measurable ROI. Industry studies show 21x higher conversion rates, 389% ROI within 30 days, and $50K-150K additional annual revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={onBookingClick}
              className="btn-primary group"
            >
              Get Your Custom Transformation Roadmap
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>60s</div>
              <div className="text-white transition-colors duration-300" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Lead Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>200-400%</div>
              <div className="text-white transition-colors duration-300" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Conversion Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>$50K-150K</div>
              <div className="text-white transition-colors duration-300" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Additional Annual Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
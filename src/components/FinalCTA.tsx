import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface FinalCTAProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onBookingClick, isDarkMode }) => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
          Ready to Transform Your Practice?
        </h2>
        <p className="text-xl mb-8 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
          97% of business leaders plan to increase GenAI investments, with 43% expecting to spend over $100 million. 
          Don't let competitors gain the advantage.
        </p>
        <p className="text-lg mb-8 text-white transition-colors duration-300" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
          Get your custom transformation roadmap and investment analysis:
        </p>
        
        <button
          onClick={onBookingClick}
          className="btn-primary group mb-6"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Strategic Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        
        <p className="text-sm text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
          Custom quotes provided based on your firm's specific needs and growth objectives.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
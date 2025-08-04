import React, { useState, useEffect } from 'react';
import { Award, Puzzle, TrendingUp, Shield } from 'lucide-react';

interface WhyChooseSectionProps {
  isDarkMode: boolean;
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ isDarkMode }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  // Rotational highlighting order: top-right (1), top-left (0), bottom-left (2), bottom-right (3)
  const highlightOrder = [1, 0, 2, 3];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % highlightOrder.length);
    }, 2000); // Change highlight every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  const reasons = [
    {
      icon: Award,
      title: "Proven Industry Expertise",
      description: "Unlike generic AI agencies, we specialize exclusively in professional services. We understand billable hour optimization, client confidentiality requirements, and professional ethics compliance that broad-market providers miss."
    },
    {
      icon: Puzzle,
      title: "Integrated Systems Approach", 
      description: "AI agent systems show 80% cost cuts, 90% faster support, and 30% higher ROI when properly integrated. Our three systems work together seamlessly—from lead capture through client success."
    },
    {
      icon: TrendingUp,
      title: "Rapid ROI Realization",
      description: "Industry studies show professional services achieve 60-90 day payback periods on client acquisition systems, 9-30 day ROI on workflow automation (Camunda), and $50K-150K additional annual revenue from improved conversion rates."
    },
    {
      icon: Shield,
      title: "Deep Practice Integration",
      description: "Seamless integration with practice management systems (Clio, MyCase, QuickBooks). Harvard Law research confirms AI adoption delivers enhanced productivity and improved client outcomes for professional service firms."
    }
  ];

  return (
    <section id="why-choose-section" className="py-12 bg-black relative overflow-hidden">
      {/* Dark theme background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10"></div>
        
        {/* Subtle floating elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-xl animate-pulse"
            style={{
              width: `${60 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Why Professional Services Choose Our Systems
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className={`p-8 rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-105 group bg-gray-900 border-2 ${
              highlightOrder[highlightedIndex] === index 
                ? 'border-white/30 shadow-lg shadow-white/10 scale-105 bg-gray-800' 
                : 'border-gray-800 hover:border-gray-700 hover:bg-gray-800'
            }`}>
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                  highlightOrder[highlightedIndex] === index 
                    ? 'bg-white shadow-lg' 
                    : 'bg-gray-800 border border-gray-700 group-hover:bg-gray-700'
                }`}>
                  <reason.icon className={`w-6 h-6 transition-all duration-500 ${
                    highlightOrder[highlightedIndex] === index ? 'text-black' : 'text-white'
                  } ${
                    highlightOrder[highlightedIndex] === index ? 'scale-110' : ''
                  }`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-3 text-white transition-all duration-500 ${
                    highlightOrder[highlightedIndex] === index ? 'text-white' : ''
                  }`}>{reason.title}</h3>
                  <p className="leading-relaxed text-gray-300 group-hover:text-gray-200" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
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
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Why Professional Services Choose Our Systems
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className={`p-8 rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-105 group ${
              isDarkMode 
                ? `bg-white hover:bg-gray-50 border-2 ${
                    highlightOrder[highlightedIndex] === index 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/25 scale-105' 
                      : 'border-gray-200 hover:border-purple-500/50'
                  }` 
                : `bg-white hover:shadow-xl border-2 ${
                    highlightOrder[highlightedIndex] === index 
                      ? 'border-red-500 shadow-lg shadow-red-500/25 scale-105' 
                      : 'border-gray-200'
                  }`
            }`}>
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                  isDarkMode 
                    ? `${
                        highlightOrder[highlightedIndex] === index 
                          ? 'bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg' 
                          : 'bg-gradient-to-br from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500'
                      }` 
                    : `${
                        highlightOrder[highlightedIndex] === index 
                          ? 'bg-red-200 shadow-lg' 
                          : 'bg-red-100 group-hover:bg-red-200'
                      }`
                }`}>
                  <reason.icon className={`w-6 h-6 transition-all duration-500 ${
                    isDarkMode ? 'text-white' : 'text-red-600'
                  } ${
                    highlightOrder[highlightedIndex] === index ? 'scale-110' : ''
                  }`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-3 text-black transition-all duration-500 ${
                    highlightOrder[highlightedIndex] === index ? 'text-purple-700' : ''
                  }`}>{reason.title}</h3>
                  <p className="leading-relaxed text-black">{reason.description}</p>
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
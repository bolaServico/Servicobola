import React from 'react';
import { Calendar, Settings, BarChart3 } from 'lucide-react';

interface ImplementationSectionProps {
  isDarkMode: boolean;
}

const ImplementationSection: React.FC<ImplementationSectionProps> = ({ isDarkMode }) => {
  const phases = [
    {
      icon: Calendar,
      phase: "Phase 1: Foundation",
      duration: "30 Days",
      description: "Deploy Client Acquisition Engine with practice management integration and professional compliance review"
    },
    {
      icon: Settings,
      phase: "Phase 2: Optimization", 
      duration: "60 Days",
      description: "Implement Operations Automation Hub with workflow analysis and team training"
    },
    {
      icon: BarChart3,
      phase: "Phase 3: Excellence",
      duration: "90 Days", 
      description: "Activate Client Success Platform with advanced analytics and strategic optimization"
    }
  ];

  const metrics = [
    "21x higher conversion rates (MIT study)",
    "389% ROI within 30 days (Camunda research)", 
    "60% reduction in document review time (Harvard Law)",
    "70% faster response times (Helpshift study)",
    "$50K-150K additional annual revenue within 90 days"
  ];

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Implementation Approach
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              isDarkMode 
                ? 'bg-white border border-gray-200 hover:border-purple-500/50' 
                : 'bg-white hover:shadow-xl'
            }`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-red-100'
              }`}>
                <phase.icon className={`w-8 h-8 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-red-600'
                }`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">{phase.phase}</h3>
              <div className="font-medium mb-3 text-black">({phase.duration})</div>
              <p className="text-black">{phase.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ImplementationSection;
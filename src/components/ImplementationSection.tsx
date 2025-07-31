import React, { useState, useEffect } from 'react';
import { Calendar, Settings, BarChart3 } from 'lucide-react';

interface ImplementationSectionProps {
  isDarkMode: boolean;
}

const ImplementationSection: React.FC<ImplementationSectionProps> = ({ isDarkMode }) => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      icon: Calendar,
      phase: "Phase 1",
      title: "Foundation",
      duration: "30 Days",
      description: "Deploy Client Acquisition Engine with practice management integration and professional compliance review",
      image: "/images/Foundation.png"
    },
    {
      icon: Settings,
      phase: "Phase 2",
      title: "Optimization",
      duration: "60 Days",
      description: "Implement Operations Automation Hub with workflow analysis and team training",
      image: "/images/Optimization.png"
    },
    {
      icon: BarChart3,
      phase: "Phase 3",
      title: "Excellence",
      duration: "90 Days", 
      description: "Activate Client Success Platform with advanced analytics and strategic optimization",
      image: "/images/Excellence.png"
    }
  ];

  // Auto-scroll effect with sequential timing
  useEffect(() => {
    // Start with Phase 1 immediately
    setActivePhase(0);
    
    // Phase 2 after 1.5 seconds
    const phase2Timer = setTimeout(() => {
      setActivePhase(1);
    }, 1500);
    
    // Phase 3 after 3 seconds
    const phase3Timer = setTimeout(() => {
      setActivePhase(2);
    }, 3000);
    
    // Then continue auto-scrolling every 4 seconds
    const autoScrollTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % phases.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }, 6000); // Start auto-scroll after initial sequence

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(autoScrollTimer);
    };
  }, [phases.length]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Implementation Approach
          </h2>
        </div>
        
        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Images */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-white shadow-lg">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  activePhase === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : index < activePhase 
                      ? 'opacity-0 transform -translate-y-full'
                      : 'opacity-0 transform translate-y-full'
                }`}
              >
                <img
                  src={phase.image}
                  alt={phase.phase}
                  className="w-full h-full object-contain p-8"
                />
              </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {phases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activePhase === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Scrolling Phase Cards */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-white shadow-lg">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  activePhase === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : index < activePhase 
                      ? 'opacity-0 transform -translate-y-full'
                      : 'opacity-0 transform translate-y-full'
                }`}
              >
                <div className="w-full h-full p-8 flex flex-col justify-center">
                  {/* Phase Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Phase Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-black">
                          {phase.phase}
                        </h3>
                        <h4 className="text-xl font-semibold text-gray-700 mt-1">
                          {phase.title}
                        </h4>
                      </div>
                      <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center space-x-2 pt-4">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 w-full" />
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {phases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activePhase === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">
              Complete Transformation in 90 Days
            </h3>
            <p className="text-gray-700 text-lg">
              Our proven three-phase approach ensures seamless integration with your existing practice 
              while delivering measurable results at each milestone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
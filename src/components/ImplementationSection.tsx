import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Settings, BarChart3 } from 'lucide-react';

interface ImplementationSectionProps {
  isDarkMode: boolean;
}

const ImplementationSection: React.FC<ImplementationSectionProps> = ({ isDarkMode }) => {
  const [visiblePhases, setVisiblePhases] = useState<boolean[]>([false, false, false]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Intersection Observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Sequential animation with delays
            setTimeout(() => setVisiblePhases(prev => [true, prev[1], prev[2]]), 200);
            setTimeout(() => setVisiblePhases(prev => [prev[0], true, prev[2]]), 600);
            setTimeout(() => setVisiblePhases(prev => [prev[0], prev[1], true]), 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title with Glow Effect */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6 relative"
            style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
          >
            <span className="relative z-10">Implementation Approach</span>
            <div className="absolute inset-0 text-blue-400/20 blur-sm">Implementation Approach</div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Single Page Layout - All Phases Visible */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ease-out ${
                visiblePhases[index] 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Phase Card */}
              <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group">
                {/* Image Container - Increased Size */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={phase.image}
                    alt={phase.phase}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent"></div>
                  
                  {/* Phase Number Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content - Reduced Size */}
                <div className="p-6">
                  {/* Phase Icon and Title */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {phase.phase}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                        {phase.title}
                      </h4>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-4">
                    {phase.duration}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary with Enhanced Animation */}
        <div 
          className={`transform transition-all duration-1000 ease-out ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-2xl group hover:scale-105">
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 text-center group-hover:text-blue-300 transition-colors duration-300">
                Complete Transformation in 90 Days
              </h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                Our proven three-phase approach ensures seamless integration with your existing practice 
                while delivering measurable results at each milestone.
              </p>
              
              {/* Success Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">389%</div>
                  <div className="text-gray-400 text-sm">ROI Achievement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">9 Days</div>
                  <div className="text-gray-400 text-sm">Payback Period</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">60%</div>
                  <div className="text-gray-400 text-sm">Time Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default ImplementationSection;
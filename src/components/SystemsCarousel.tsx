import React, { useState, useEffect } from 'react';
import { Phone, Settings, Users, ArrowRight, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

interface SystemsCarouselProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
  activeSystem: number;
  onSystemChange: (system: number) => void;
}

const SystemsCarousel: React.FC<SystemsCarouselProps> = ({ onBookingClick, isDarkMode, activeSystem, onSystemChange }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSystem - 1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const menuItems = [
    { id: 1, name: 'System 1', fullName: 'Client Acquisition Engine' },
    { id: 2, name: 'System 2', fullName: 'Operations Automation Hub' },
    { id: 3, name: 'System 3', fullName: 'Client Success Platform' }
  ];

  const systems = [
    {
      icon: Phone,
      title: "Client Acquisition Engine",
      subtitle: "Transform prospects into qualified opportunities automatically",
      features: [
        "Calls new leads within 60 seconds with AI voice agents",
        "Qualifies prospects using professional services criteria", 
        "Delivers personalized nurture sequences based on engagement",
        "Generates customized proposals within minutes"
      ],
      results: [
        "MIT study shows 21x higher conversion with 60-second response times",
        "200-400% improvement in qualified lead conversion rates", 
        "$50K-150K additional annual revenue from improved conversion"
      ],
      advantages: [
        "Industry-specific qualification scripts for legal, accounting, and consulting",
        "Maintains consultative selling approach with automation",
        "Integrates seamlessly with practice management systems"
      ],
      color: "from-blue-600 to-purple-600",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      icon: Settings,
      title: "Operations Automation Hub",
      subtitle: "Eliminate administrative overload and optimize workflows",
      features: [
        "Automates scheduling, billing, and project management",
        "Processes client documents and intake forms intelligently",
        "Optimizes resource allocation across multiple projects", 
        "Provides instant access to relevant case studies and expertise"
      ],
      results: [
        "Camunda study: 389% ROI within 30 days from workflow automation",
        "9-day payback period for communication workflows",
        "Harvard Law: 60% reduction in document creation and review time"
      ],
      advantages: [
        "Reduces administrative time by 60%",
        "Enables handling 3x client volume without proportional staff increases",
        "Maintains compliance with professional service regulations"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      icon: Users,
      title: "Client Success Platform", 
      subtitle: "Deliver exceptional client experiences that drive retention and referrals",
      features: [
        "Provides 24/7 client support through intelligent chatbots",
        "Ensures consistent onboarding experiences for all clients",
        "Systematically gathers feedback and identifies improvement opportunities",
        "Generates referrals at optimal timing with personalized messaging"
      ],
      results: [
        "Helpshift study: 70% decrease in response times, 50% reduction in human agent involvement",
        "Maintains 90%+ client satisfaction during scaling", 
        "NetSuite research: 300% increase in systematic referral generation"
      ],
      advantages: [
        "Maintains professional communication standards",
        "Supports long-term advisory relationship development", 
        "Identifies expansion opportunities automatically"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % systems.length;
      setCurrentSlide(nextSlide);
      onSystemChange(nextSlide + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, systems.length, currentSlide, onSystemChange]);

  // Update slide when activeSystem changes from header
  useEffect(() => {
    setCurrentSlide(activeSystem - 1);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    const resumeTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
    return () => clearTimeout(resumeTimer);
  }, [activeSystem]);

  const nextSlide = () => {
    const nextSlide = (currentSlide + 1) % systems.length;
    setCurrentSlide(nextSlide);
    onSystemChange(nextSlide + 1);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    const prevSlide = (currentSlide - 1 + systems.length) % systems.length;
    setCurrentSlide(prevSlide);
    onSystemChange(prevSlide + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    onSystemChange(index + 1);
    setIsAutoPlaying(false);
  };

  const currentSystem = systems[currentSlide];

  return (
    <section id="systems-section" className="py-12 bg-black relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-800/20 transition-all duration-1000 ease-in-out" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headings */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Complete AI Growth Infrastructure Systems
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Three integrated systems working together to transform your practice
          </p>
        </div>

        {/* System Navigation Menu */}
        <div className="text-center mb-8">
          <nav className="inline-flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full p-2">
            {menuItems.map((system) => (
              <div
                key={system.id}
                className="relative"
              >
                <button
                  onClick={() => goToSlide(system.id - 1)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSystem === system.id
                      ? 'bg-white text-black shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                  style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
                >
                  {system.name}
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 transition-all duration-300 group"
            aria-label="Previous system"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 transition-all duration-300 group"
            aria-label="Next system"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Main Carousel Content */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out mx-8">
            <div className={`h-2 bg-gradient-to-r ${currentSystem.color} transition-all duration-700`} />
            
            <div className="p-6 md:p-8 bg-gray-900">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center mr-6 bg-gradient-to-br ${currentSystem.color} shadow-lg`}>
                  <currentSystem.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {currentSystem.title}
                  </h3>
                  <p className="text-lg text-gray-300">
                    {currentSystem.subtitle}
                  </p>
                </div>
                <div className="ml-auto">
                  <a
                    href={`/pdfs/${currentSystem.title.toLowerCase().replace(/\s+/g, '-')}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-all duration-300 group"
                    title={`Download ${currentSystem.title} PDF`}
                  >
                    <img 
                      src="/images/download.png" 
                      alt="Download PDF" 
                      className="w-20 h-20 group-hover:scale-110 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSystem.color} mr-3`} />
                    What It Does
                  </h4>
                  <ul className="space-y-3">
                    {currentSystem.features.map((feature, index) => (
                      <li key={index} className="flex items-start group">
                        <ArrowRight className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-gray-400 group-hover:text-gray-200 transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSystem.color} mr-3`} />
                    Proven Results
                  </h4>
                  <ul className="space-y-3">
                    {currentSystem.results.map((result, index) => (
                      <li key={index} className="flex items-start group">
                        <ArrowRight className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-gray-400 group-hover:text-gray-200 transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors font-medium" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advantages */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSystem.color} mr-3`} />
                    Professional Services Advantage
                  </h4>
                  <ul className="space-y-3">
                    {currentSystem.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start group">
                        <ArrowRight className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-gray-400 group-hover:text-gray-200 transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                          {advantage}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={onBookingClick}
            className="btn-primary group transform hover:scale-105 transition-all duration-300"
          >
            Get Your Custom Implementation Plan
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-white/70 text-sm">
            See how these systems work together for your practice
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemsCarousel;
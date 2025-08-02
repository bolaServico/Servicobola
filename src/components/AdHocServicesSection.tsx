import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, MessageSquare, BarChart3, Star, Home, CheckCircle, Calendar } from 'lucide-react';

interface AdHocServicesSectionProps {
  onBookingClick: () => void;
  isDarkMode: boolean;
}

const AdHocServicesSection: React.FC<AdHocServicesSectionProps> = ({ onBookingClick, isDarkMode }) => {
  const [selectedTier, setSelectedTier] = useState(0);
  const [visibleServices, setVisibleServices] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const tiers = [
    {
      name: "Essential Workflows",
      description: "Core AI-powered workflows designed to streamline your most critical professional service tasks. These foundational tools integrate seamlessly with your existing practice management systems.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      services: ["Redline Issues List", "Analyze Transcripts", "Compare Agreements"]
    },
    {
      name: "Advanced Analytics",
      description: "Sophisticated AI analysis tools that provide deep insights into your practice operations, client interactions, and business performance metrics for data-driven decision making.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      services: ["Deal Points", "Lease Extraction", "Reps & Warranties"]
    },
    {
      name: "Custom Solutions",
      description: "Tailored AI implementations designed specifically for your unique practice requirements, industry regulations, and specialized workflows that standard solutions cannot address.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      services: ["Custom Workflows", "Industry-Specific Tools", "Compliance Automation"]
    }
  ];

  const allServices = [
    { name: "Redline Issues List", icon: FileText },
    { name: "Analyze Transcripts", icon: MessageSquare },
    { name: "Compare Agreements", icon: BarChart3 },
    { name: "Deal Points", icon: Star },
    { name: "Lease Extraction", icon: Home },
    { name: "Reps & Warranties", icon: CheckCircle },
    { name: "Custom Workflows", icon: FileText },
    { name: "Industry-Specific Tools", icon: Star },
    { name: "Compliance Automation", icon: CheckCircle },
    { name: "Document Analysis", icon: FileText },
    { name: "Contract Review", icon: MessageSquare },
    { name: "Risk Assessment", icon: BarChart3 },
    { name: "Due Diligence", icon: Star },
    { name: "Regulatory Compliance", icon: Home },
    { name: "Performance Metrics", icon: CheckCircle },
    { name: "Client Reporting", icon: FileText },
    { name: "Workflow Optimization", icon: MessageSquare },
    { name: "Process Automation", icon: BarChart3 }
  ];

  // Intersection Observer for staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered animation for services
            allServices.forEach((_, index) => {
              setTimeout(() => {
                setVisibleServices(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate tiers
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTier((prev) => (prev + 1) % tiers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getRowServices = (rowIndex: number) => {
    const servicesPerRow = 6;
    const startIndex = rowIndex * servicesPerRow;
    return allServices.slice(startIndex, startIndex + servicesPerRow);
  };

  const getAnimationDirection = (rowIndex: number) => {
    return rowIndex % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left';
  };

  return (
    <section ref={sectionRef} id="adhoc-services-section" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10"></div>
        
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-xl animate-pulse"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent flex-1"></div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white text-sm font-medium">Ad-hoc & Other AI Services</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            <span className="relative z-10">Streamline Your Work</span>
            <div className="absolute inset-0 text-white/20 blur-sm">Streamline Your Work</div>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Multi-modal agents designed to collaborate with professionals to deliver precise, purpose-built work products. More coming soon.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Tier Details */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              {/* Tier Navigation */}
              <div className="flex space-x-2 mb-8">
                {tiers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTier(index)}
                    className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedTier === index
                        ? 'bg-white text-black'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Tier {index + 1}
                  </button>
                ))}
              </div>

              {/* Selected Tier Content */}
              <div className="space-y-6">
                {/* Tier Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img
                    src={tiers[selectedTier].image}
                    alt={tiers[selectedTier].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tiers[selectedTier].name}
                    </h3>
                  </div>
                </div>

                {/* Tier Description */}
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {tiers[selectedTier].description}
                  </p>

                  {/* Tier Services */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Key Services:</h4>
                    <ul className="space-y-2">
                      {tiers[selectedTier].services.map((service, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <ArrowRight className="w-4 h-4 text-white flex-shrink-0" />
                          <span className="text-gray-300">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onBookingClick}
                  className="w-full btn-primary group mt-6"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Discuss Custom Requirements
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Scrolling Services */}
          <div className="space-y-6">
            <div className="bg-gray-200 rounded-3xl p-8 relative overflow-hidden">
              {/* Service Rows */}
              <div className="space-y-6">
                {[0, 1, 2].map((rowIndex) => (
                  <div key={rowIndex} className="relative">
                    <div className={`flex space-x-4 ${getAnimationDirection(rowIndex)}`}>
                      {getRowServices(rowIndex).map((service, serviceIndex) => {
                        const globalIndex = rowIndex * 6 + serviceIndex;
                        return (
                          <div
                            key={serviceIndex}
                            className={`flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer min-w-[200px] transform ${
                              visibleServices[globalIndex] 
                                ? 'translate-y-0 opacity-100' 
                                : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: `${globalIndex * 50}ms` }}
                          >
                            <div className="text-center">
                              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
                                <service.icon className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="text-black font-semibold text-sm leading-tight">
                                {service.name}
                              </h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Explore Button */}
              <div className="text-center mt-8">
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center text-gray-600 hover:text-black transition-colors group"
                >
                  <span className="font-medium">Explore Workflows</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI specialists can develop bespoke solutions tailored to your specific practice requirements and industry regulations.
            </p>
            <button
              onClick={onBookingClick}
              className="btn-primary group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Custom Solution Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AdHocServicesSection;
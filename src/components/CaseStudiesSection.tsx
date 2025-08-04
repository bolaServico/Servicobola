import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, TrendingUp, Users, Clock, ArrowRight, Play, Pause } from 'lucide-react';

interface CaseStudiesSectionProps {
  isDarkMode: boolean;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ isDarkMode }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Lead Response Management ROI",
      company: "MIT & InsideSales.com Study",
      result: "21x higher conversion rates",
      metric: "2,100%",
      description: "Professional services firms responding to leads within 60 seconds achieve 21x higher conversion rates compared to 30-minute response times.",
      link: "https://cdn2.hubspot.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf",
      source: "MIT & InsideSales.com Study",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Clock,
      title: "Workflow Automation Success",
      company: "Camunda Process Automation Study",
      result: "389% ROI within 30 days",
      metric: "389%",
      description: "Professional services firms implementing end-to-end process automation achieved 389% ROI with 9-day payback periods for communication workflows.",
      link: "https://camunda.com/press_release/study-camunda-can-deliver-389-roi-with-end-to-end-process-automation/",
      source: "Camunda Research",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: Users,
      title: "Legal Document Automation",
      company: "Harvard Law School Research",
      result: "60% reduction in document review time",
      metric: "60%",
      description: "AI adoption in legal practices shows enhanced productivity and improved client outcomes, with significant reductions in document creation and review time.",
      link: "https://clp.law.harvard.edu/knowledge-hub/insights/the-impact-of-artificial-intelligence-on-law-law-firms-business-models/",
      source: "Harvard Law Center",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: TrendingUp,
      title: "Customer Service Automation",
      company: "Professional Services AI Implementation",
      result: "70% decrease in response times",
      metric: "70%",
      description: "Professional service firms report significant improvements in client satisfaction while maintaining 90%+ satisfaction during scaling periods.",
      link: "https://www.helpshift.com/blog/ai-in-customer-service/",
      source: "Helpshift Research",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % caseStudies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, caseStudies.length]);

  // Intersection Observer for staggered card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered animation for cards
            caseStudies.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
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

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section ref={sectionRef} id="case-studies-section" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent"></div>
        
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${caseStudies[i % caseStudies.length].gradient} opacity-10 blur-xl animate-pulse`}
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">Industry Validation</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            <span className="relative z-10">Proven ROI from Industry Leaders</span>
            <div className="absolute inset-0 text-blue-400/20 blur-sm">Proven ROI from Industry Leaders</div>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Real case studies demonstrating measurable returns on AI investment in professional services
          </p>

          {/* Auto-play Control */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={toggleAutoPlay}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
              <span className="text-white text-sm">{isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation</span>
            </button>
          </div>
        </div>
        
        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 auto-rows-fr">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ease-out ${
                visibleCards[index] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              } ${
                activeCard === index 
                  ? 'scale-105 z-10' 
                  : 'scale-100 hover:scale-102'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => {
                setActiveCard(index);
                setIsAutoPlaying(false);
              }}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group cursor-pointer h-full flex flex-col ${
                activeCard === index 
                  ? 'shadow-blue-500/25 ring-2 ring-blue-500/50' 
                  : 'hover:shadow-xl'
              }`}>
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-8 flex-1 flex flex-col">
                  {/* Header with Image and Icon */}
                  <div className="flex items-start space-x-6 mb-6">
                    {/* Study Image */}
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20`}></div>
                    </div>

                    {/* Icon and Metric */}
                    <div className="flex-1">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300`}>
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Study Details */}
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{study.company}</p>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${study.bgGradient} text-gray-700`}>
                        {study.result}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors flex-1">
                      {study.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <span className="text-sm text-gray-500 font-medium">{study.source}</span>
                      <a 
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center font-medium text-transparent bg-gradient-to-r ${study.gradient} bg-clip-text hover:scale-105 transition-transform duration-300 group/link`}
                      >
                        View Study
                        <ExternalLink className="w-4 h-4 ml-1 text-gray-400 group-hover/link:text-gray-600 transition-colors" />
                      </a>
                    </div>
                  </div>

                  {/* Progress Bar for Active Card */}
                  {activeCard === index && isAutoPlaying && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                      <div 
                        className={`h-full bg-gradient-to-r ${study.gradient} transition-all duration-300 ease-out animate-pulse`}
                        style={{ 
                          width: '100%',
                          animation: 'progress 4s linear infinite'
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Summary Section */}
        <div className="relative">
          <div className="bg-black border border-gray-800 rounded-3xl p-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10"></div>
              
              {/* Floating Orbs */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/5 blur-xl animate-pulse"
                  style={{
                    width: `${60 + Math.random() * 80}px`,
                    height: `${60 + Math.random() * 80}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Collective Impact Across Studies
                </h3>
                <p className="text-gray-300">
                  Combined results from leading research institutions and industry leaders
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Average ROI Increase', value: 'Significant', icon: TrendingUp },
                  { label: 'Time Reduction', value: 'Substantial', icon: Clock },
                  { label: 'Conversion Improvement', value: 'Dramatic', icon: Users },
                  { label: 'Payback Period', value: 'Rapid', icon: ArrowRight }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center transform transition-all duration-500 hover:scale-105 ${
                      visibleCards[index] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 800}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3 hover:bg-white/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for Progress Bar */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection;
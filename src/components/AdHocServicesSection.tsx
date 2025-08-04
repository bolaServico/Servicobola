import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, MessageSquare, BarChart3, Star, Home, CheckCircle, Calendar, Phone, Bot, Users, DollarSign, Clock, Shield, Search, Mail, TrendingUp, Briefcase, Globe, Database } from 'lucide-react';

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
      name: "Must-Have Solutions",
      subtitle: "Immediate ROI",
      description: "Essential AI tools that deliver immediate return on investment and solve critical operational challenges. These foundational systems pay for themselves within days and form the backbone of an efficient practice.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        {
          name: "AI Voice Receptionist",
          priority: "Must-Need",
          roi: "Immediate",
          description: "24/7 professional phone answering that screens clients, schedules appointments, and transfers qualified calls. Replaces expensive receptionist costs while never missing leads.",
          icon: Phone
        },
        {
          name: "Lead Qualification Chatbot",
          priority: "Must-Need",
          roi: "High",
          description: "Website chatbot that engages visitors instantly, qualifies leads by practice area and budget, and books consultations automatically. Captures leads that would otherwise leave your site.",
          icon: Bot
        },
        {
          name: "Client Intake Automation",
          priority: "Must-Need",
          roi: "9-Day Payback",
          description: "Automated new client onboarding with document collection, conflict checks, and welcome sequences. Reduces 4-hour manual process to 15 minutes.",
          icon: Users
        },
        {
          name: "Invoice & Billing Automation",
          priority: "Must-Need",
          roi: "Immediate",
          description: "Automated time tracking, invoice generation, and payment processing. Eliminates administrative overhead and improves cash flow with faster billing cycles.",
          icon: DollarSign
        },
        {
          name: "Appointment Scheduling & Reminders",
          priority: "Must-Need",
          roi: "High",
          description: "Smart calendar management with automated booking, confirmations, and rescheduling. Reduces no-shows by 60% and eliminates scheduling conflicts.",
          icon: Clock
        }
      ]
    },
    {
      name: "High-Impact Solutions",
      subtitle: "Strategic Advantage",
      description: "Advanced AI systems that provide significant competitive advantages and operational improvements. These tools transform how you deliver services and interact with clients, setting your practice apart from competitors.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        {
          name: "Document Review & Analysis",
          priority: "Innovative",
          roi: "87% Time Savings",
          description: "AI-powered contract review, legal brief analysis, and document summarization. Provides 100x productivity gains for high-volume document work.",
          icon: FileText
        },
        {
          name: "Legal Research Assistant",
          priority: "Innovative",
          roi: "High",
          description: "Automated legal research with case law citations, statute analysis, and brief integration. Reduces research time from hours to minutes.",
          icon: Search
        },
        {
          name: "Client Communication Automation",
          priority: "Must-Need",
          roi: "High",
          description: "Automated case updates, progress reports, and follow-up sequences. Improves client satisfaction while reducing communication workload by 70%.",
          icon: MessageSquare
        },
        {
          name: "Compliance & Deadline Tracking",
          priority: "Must-Need",
          roi: "Risk Mitigation",
          description: "Automated monitoring of court dates, filing deadlines, and regulatory requirements with escalation alerts. Prevents malpractice claims and missed deadlines.",
          icon: Shield
        },
        {
          name: "Email Marketing & Client Retention",
          priority: "High ROI",
          roi: "300% Referral Increase",
          description: "Automated email campaigns, client satisfaction surveys, and referral request workflows. Generates consistent new business from existing clients.",
          icon: Mail
        }
      ]
    },
    {
      name: "Competitive Advantage Solutions",
      subtitle: "Premium Differentiation",
      description: "Cutting-edge AI capabilities that position your practice as an industry leader. These sophisticated tools enable premium service delivery and unlock new revenue opportunities that competitors cannot match.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        {
          name: "Case Outcome Prediction",
          priority: "Innovative",
          roi: "Strategic",
          description: "AI analysis of case data to predict litigation outcomes and settlement ranges. Improves case strategy and client counseling with data-driven insights.",
          icon: TrendingUp
        },
        {
          name: "Social Media & Content Automation",
          priority: "Low Cost/High Return",
          roi: "Marketing Efficiency",
          description: "Automated LinkedIn posting, content creation, and thought leadership articles. Builds firm reputation and generates leads with minimal effort.",
          icon: Globe
        },
        {
          name: "Due Diligence Automation",
          priority: "Innovative",
          roi: "Premium Pricing",
          description: "AI-powered document review for M&A transactions and corporate deals. Enables handling larger transactions with existing staff.",
          icon: Briefcase
        },
        {
          name: "Client Portal Assistant",
          priority: "Must-Need",
          roi: "Service Quality",
          description: "AI chatbot in client portals that answers questions, helps navigate documents, and provides case status updates. Improves client experience while reducing support calls.",
          icon: Database
        }
      ]
    }
  ];

  const allServices = [
    { name: "AI Voice Receptionist", icon: Phone },
    { name: "Lead Qualification Chatbot", icon: Bot },
    { name: "Client Intake Automation", icon: Users },
    { name: "Invoice & Billing Automation", icon: DollarSign },
    { name: "Appointment Scheduling", icon: Clock },
    { name: "Document Review & Analysis", icon: FileText },
    { name: "Legal Research Assistant", icon: Search },
    { name: "Client Communication", icon: MessageSquare },
    { name: "Compliance & Deadline Tracking", icon: Shield },
    { name: "Email Marketing & Retention", icon: Mail },
    { name: "Case Outcome Prediction", icon: TrendingUp },
    { name: "Social Media Automation", icon: Globe },
    { name: "Due Diligence Automation", icon: Briefcase },
    { name: "Client Portal Assistant", icon: Database },
    { name: "Contract Analysis", icon: FileText },
    { name: "Time Tracking", icon: Clock },
    { name: "Client Screening", icon: Users },
    { name: "Payment Processing", icon: DollarSign }
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
    }, 6000);

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Must-Need': return 'bg-red-100 text-red-800';
      case 'Innovative': return 'bg-blue-100 text-blue-800';
      case 'High ROI': return 'bg-green-100 text-green-800';
      case 'Low Cost/High Return': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              <span className="text-white text-sm font-medium">Workflows</span>
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

        {/* Main Content Grid - Equal Height Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Section - Tier Details */}
          <div className="h-full">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 h-full flex flex-col">
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
              <div className="space-y-6 flex-1 flex flex-col">
                {/* Tier Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img
                    src={tiers[selectedTier].image}
                    alt={tiers[selectedTier].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {tiers[selectedTier].name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {tiers[selectedTier].subtitle}
                    </p>
                  </div>
                </div>

                {/* Tier Description */}
                <div className="space-y-4 flex-1">
                  <p className="text-gray-300 leading-relaxed">
                    {tiers[selectedTier].description}
                  </p>

                  {/* Featured Services */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Featured Services:</h4>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {tiers[selectedTier].services.slice(0, 3).map((service, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                              <service.icon className="w-4 h-4 text-black" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h5 className="text-white font-medium text-sm">{service.name}</h5>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(service.priority)}`}>
                                  {service.roi}
                                </span>
                              </div>
                              <p className="text-gray-400 text-xs leading-relaxed">
                                {service.description.substring(0, 120)}...
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
              </div>
            </div>
          </div>

          {/* Right Section - Scrolling Services */}
          <div className="h-full">
            <div className="bg-gray-200 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col">
              {/* Service Rows */}
              <div className="space-y-6 flex-1 flex flex-col justify-center">
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
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
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
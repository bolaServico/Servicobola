import React from 'react';
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';

interface CaseStudiesSectionProps {
  isDarkMode: boolean;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ isDarkMode }) => {
  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Lead Response Management ROI",
      company: "MIT & InsideSales.com Study",
      result: "21x higher conversion rates with 60-second response times",
      description: "Professional services firms responding to leads within 60 seconds achieve 21x higher conversion rates compared to 30-minute response times.",
      link: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      source: "Harvard Business Review"
    },
    {
      icon: Clock,
      title: "Workflow Automation Success",
      company: "Camunda Process Automation Study",
      result: "389% ROI within 30 days",
      description: "Professional services firms implementing end-to-end process automation achieved 389% ROI with 9-day payback periods for communication workflows.",
      link: "https://camunda.com/press_release/study-camunda-can-deliver-389-roi-with-end-to-end-process-automation/",
      source: "Camunda Research"
    },
    {
      icon: Users,
      title: "Legal Document Automation",
      company: "Harvard Law School Research",
      result: "60% reduction in document review time",
      description: "AI adoption in legal practices shows enhanced productivity and improved client outcomes, with significant reductions in document creation and review time.",
      link: "https://clp.law.harvard.edu/knowledge-hub/insights/the-impact-of-artificial-intelligence-on-law-law-firms-business-models/",
      source: "Harvard Law Center"
    },
    {
      icon: TrendingUp,
      title: "Customer Service Automation",
      company: "Professional Services AI Implementation",
      result: "70% decrease in response times, 50% reduction in human agent involvement",
      description: "Professional service firms report significant improvements in client satisfaction while maintaining 90%+ satisfaction during scaling periods.",
      link: "https://www.helpshift.com/blog/ai-in-customer-service/",
      source: "Helpshift Research"
    }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Proven ROI from Industry Leaders
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Real case studies demonstrating measurable returns on AI investment in professional services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              isDarkMode 
                ? 'bg-white border border-gray-200 hover:border-purple-500/50' 
                : 'bg-white hover:shadow-xl'
            }`}>
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-red-100'
                }`}>
                  <study.icon className={`w-6 h-6 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-red-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-black">{study.title}</h3>
                  <p className="text-sm mb-2 text-black">{study.company}</p>
                  <div className="text-lg font-bold mb-3 text-black">{study.result}</div>
                </div>
              </div>
              
              <p className="mb-4 text-black">{study.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-black">{study.source}</span>
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-black hover:text-gray-700"
                >
                  View Study
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
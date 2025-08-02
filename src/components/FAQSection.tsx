import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Calendar, Download, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  isDarkMode: boolean;
}

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ isDarkMode }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('general');

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    // General Questions
    {
      id: 'general-1',
      category: 'general',
      question: 'What exactly is AI consulting for professional services?',
      answer: 'We help law firms, accounting practices, consulting agencies, and financial advisory firms implement AI systems that automate administrative tasks, improve client response times, and increase operational efficiency. Our solutions are specifically designed for professional services workflows, not generic business automation.'
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'How is this different from hiring additional staff or using basic software?',
      answer: 'Unlike hiring staff (which increases fixed costs) or basic software (which still requires manual work), our AI systems work 24/7 without supervision, handle multiple tasks simultaneously, and actually get smarter over time. For example, our Lightning Response AI can contact and qualify leads within 60 seconds while your team focuses on billable work.'
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'Will AI replace my staff or change how we work with clients?',
      answer: 'No, AI enhances your team\'s capabilities rather than replacing them. Our systems handle repetitive administrative tasks so your professionals can focus on high-value client work, strategic thinking, and relationship building. Clients still get the personal attention they expect, but with faster response times and more consistent service.'
    },
    {
      id: 'general-4',
      category: 'general',
      question: 'Where is our data stored and who has access to it?',
      answer: 'All data is stored in SOC 2 Type II certified data centers with military-grade encryption at rest and in transit. Only authorized personnel with security clearance can access systems, and all access is logged and monitored. We never store data outside of secure, compliant environments.'
    },
    {
      id: 'general-5',
      category: 'general',
      question: 'Do you use our confidential client information to train AI models?',
      answer: 'Absolutely not. Your client data remains completely confidential and is never used to train AI models or shared with any third parties. Our AI systems are trained on general business knowledge, not your specific client information or proprietary data.'
    },
    {
      id: 'general-6',
      category: 'general',
      question: 'How do you ensure compliance with attorney-client privilege and professional confidentiality?',
      answer: 'We maintain strict confidentiality protocols that exceed industry standards. All systems are designed with privilege protection built-in, including secure communication channels, access controls, and audit trails. We sign comprehensive confidentiality agreements and our staff undergoes regular compliance training.'
    },
    {
      id: 'general-7',
      category: 'general',
      question: 'What certifications and security standards do you maintain?',
      answer: 'We maintain industry-leading security certifications including: SOC 2 Type II compliance for data security; ISO 27001 information security management; GDPR compliance for data protection; State and federal regulatory compliance for professional services; Regular third-party security audits and penetration testing.'
    },
    {
      id: 'general-8',
      category: 'general',
      question: 'What happens if there\'s a data breach or security incident?',
      answer: 'We have comprehensive incident response protocols including immediate containment, forensic analysis, and client notification within required timeframes. Our cyber insurance and legal protections cover all stakeholders. However, our multi-layered security approach has maintained a zero-breach record across all client implementations.'
    },
    {
      id: 'general-9',
      category: 'general',
      question: 'Can we control what data is accessible to the AI systems?',
      answer: 'Yes, you have complete control over data access levels. We implement role-based permissions, data classification systems, and can create custom access controls based on your firm\'s policies. You decide what information each AI system can access and process.'
    },
    {
      id: 'general-10',
      category: 'general',
      question: 'How do you handle data retention and deletion policies?',
      answer: 'We follow your firm\'s data retention policies and can automatically delete data based on your specified timelines. All deletions are permanent and certified, with documentation provided for compliance purposes. You maintain full control over your data lifecycle.'
    },
    {
      id: 'general-11',
      category: 'general',
      question: 'What about compliance with state bar associations and professional licensing boards?',
      answer: 'Our systems are designed to support, not compromise, your professional obligations. We work closely with firms to ensure all AI implementations comply with state bar ethics rules, CPA professional standards, and other licensing requirements. We provide documentation to support your compliance reporting.'
    },

    // Implementation & Technical Questions
    {
      id: 'implementation-1',
      category: 'implementation',
      question: 'How long does it take to implement these AI systems?',
      answer: 'Most systems are fully operational within 2-4 weeks. We use a phased approach: Week 1: Discovery and system configuration; Week 2: AI training and customization for your specific needs; Week 3: Integration with your existing software and testing; Week 4: Launch with full training and support.'
    },
    {
      id: 'implementation-2',
      category: 'implementation',
      question: 'What if our current software doesn\'t integrate with AI systems?',
      answer: 'We work with all major practice management systems (Clio, MyCase, QuickBooks, Salesforce, etc.) and can integrate with virtually any software through APIs. If you use specialized software, we\'ll create custom connections to ensure seamless workflow.'
    },
    {
      id: 'implementation-3',
      category: 'implementation',
      question: 'Do we need technical expertise on our team to manage AI systems?',
      answer: 'Not at all. Our systems are designed to be managed by your existing staff with minimal technical knowledge. We provide complete training, and our ongoing support handles all technical maintenance. You\'ll interact with simple dashboards that anyone can use.'
    },
    {
      id: 'implementation-4',
      category: 'implementation',
      question: 'What happens to our data? Is it secure?',
      answer: 'Your data security is our top priority. We use enterprise-grade encryption, comply with all relevant regulations (HIPAA, SOX, attorney-client privilege), and never share client information. All AI processing happens in secure, compliant environments with full audit trails.'
    },

    // Results & ROI Questions
    {
      id: 'results-1',
      category: 'results',
      question: 'How quickly will we see results?',
      answer: 'Most clients see immediate impact: Days 1-9: Communication workflows show results with documented 9-day payback periods; Days 10-30: Full workflow automation achieves average 389% ROI; Month 1-3: Complete transformation with improved client satisfaction and increased capacity.'
    },
    {
      id: 'results-2',
      category: 'results',
      question: 'What kind of ROI can we expect?',
      answer: 'Based on documented case studies: 389% average ROI within 30 days for workflow automation; 381% increase in lead conversion with response time optimization; 25-50% improvement in operational efficiency; 87% time savings on document processing tasks; 85%+ client retention rates through improved service delivery.'
    },
    {
      id: 'results-3',
      category: 'results',
      question: 'How do you measure success?',
      answer: 'We track specific metrics relevant to professional services: Lead response time and conversion rates; Billable hour efficiency and utilization; Client satisfaction scores and retention rates; Administrative time reduction; Revenue per employee improvement; Cost per client acquisition.'
    },
    {
      id: 'results-4',
      category: 'results',
      question: 'How does AI implementation compare to hiring additional staff?',
      answer: 'AI systems typically provide 24/7 availability and consistent performance while handling the administrative work equivalent of multiple full-time employees. Unlike staff, AI doesn\'t require benefits, vacation time, or ongoing training costs, and performance remains consistent regardless of workload or time of day.'
    },

    // Industry-Specific Questions
    {
      id: 'industry-1',
      category: 'industry',
      question: 'Do you work with all types of professional services firms?',
      answer: 'We specialize in: Law firms (litigation, real estate, corporate, family law); Accounting practices (CPA firms, tax preparation, bookkeeping); Consulting agencies (management, IT, marketing, financial); Financial advisory (wealth management, insurance, planning). Each implementation is customized for your specific practice area and regulatory requirements.'
    },
    {
      id: 'industry-2',
      category: 'industry',
      question: 'How do you handle industry regulations and compliance?',
      answer: 'We\'re well-versed in professional services regulations: Attorney-client privilege and legal ethics requirements; CPA confidentiality and tax regulations; Financial services compliance (SEC, FINRA); Healthcare privacy requirements (HIPAA); Industry-specific ethical guidelines. All systems are designed with compliance built-in, not added as an afterthought.'
    },
    {
      id: 'industry-3',
      category: 'industry',
      question: 'Can you provide references from similar firms?',
      answer: 'Absolutely. We have extensive case studies and references from firms similar to yours in size, practice area, and geographic location. During our discovery process, we\'ll connect you with relevant references who can share their specific experiences and results.'
    },

    // Support & Partnership Questions
    {
      id: 'support-1',
      category: 'support',
      question: 'What kind of ongoing support do you provide?',
      answer: 'Comprehensive support includes: 24/7 technical monitoring and maintenance; Regular performance optimization and updates; Quarterly business reviews and strategy sessions; Unlimited training for new team members; Direct access to our support team for questions.'
    },
    {
      id: 'support-2',
      category: 'support',
      question: 'What if the systems don\'t work as promised?',
      answer: 'We stand behind our results with: Clear performance guarantees for each system; Regular monitoring and optimization to ensure targets are met; Satisfaction guarantee with adjustment periods; Transparent reporting on all key metrics; Commitment to continuous improvement until goals are achieved.'
    },
    {
      id: 'support-3',
      category: 'support',
      question: 'How do you stay current with AI technology advances?',
      answer: 'We continuously invest in: Latest AI technology research and development; Regular system updates and feature enhancements; Industry best practice analysis and implementation; Ongoing training for our technical team; Strategic partnerships with leading AI technology providers.'
    },

    // Getting Started Questions
    {
      id: 'getting-started-1',
      category: 'getting-started',
      question: 'How do we know if we\'re ready for AI implementation?',
      answer: 'You\'re ready if you\'re experiencing: Administrative tasks consuming 50%+ of your team\'s time; Inconsistent client response times or service delivery; Difficulty scaling without proportional cost increases; Competition from more efficient firms; Team burnout from repetitive manual processes.'
    },
    {
      id: 'getting-started-2',
      category: 'getting-started',
      question: 'What\'s the first step to get started?',
      answer: 'Simple three-step process: 1. Discovery Call: 30-minute conversation to understand your specific challenges; 2. Custom Assessment: We analyze your current processes and identify opportunities; 3. Proposal & Demo: See exactly how our systems will work for your firm.'
    },
    {
      id: 'getting-started-3',
      category: 'getting-started',
      question: 'Can we start with just one system or do we need all three?',
      answer: 'You can absolutely start with one system. Many clients begin with: Lightning Response AI if lead conversion is the priority; Workflow Automation if operational efficiency is most urgent; Client Success AI if retention and referrals are the focus. Each system delivers independent value while building toward complete transformation.'
    },
    {
      id: 'getting-started-4',
      category: 'getting-started',
      question: 'How do we schedule a consultation?',
      answer: 'Three easy ways: Click the "Schedule Discovery Call" button on this page; Call us directly at our phone number; Email us with your availability. We\'ll respond within 24 hours to schedule at your convenience.'
    }
  ];

  const categories = [
    { id: 'general', name: 'General Questions', icon: HelpCircle },
    { id: 'implementation', name: 'Implementation & Technical', icon: HelpCircle },
    { id: 'results', name: 'Results & ROI', icon: HelpCircle },
    { id: 'industry', name: 'Industry-Specific', icon: HelpCircle },
    { id: 'support', name: 'Support & Partnership', icon: HelpCircle },
    { id: 'getting-started', name: 'Getting Started', icon: HelpCircle }
  ];

  const filteredFAQs = faqData.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq-section" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-transparent"></div>
        
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl animate-pulse"
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
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">Frequently Asked Questions</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            <span className="relative z-10">Everything You Need to Know</span>
            <div className="absolute inset-0 text-blue-400/20 blur-sm">Everything You Need to Know</div>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Get answers to the most common questions about AI implementation for professional services
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-white text-black shadow-lg shadow-white/25 transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white hover:scale-105'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${
                openItems.includes(faq.id) ? 'shadow-lg shadow-blue-500/10' : ''
              }`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4 leading-tight">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Combined CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our AI strategy experts are ready to discuss your specific needs and provide personalized answers to help you make the best decision for your practice.
              </p>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                  Don't Let Competitors Gain the AI Advantage
                </h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  Over 73% of professional services firms plan to implement AI within 12 months. The question isn't whether AI will transform your industry—it's whether you'll lead or follow.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="btn-primary group">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Free Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="btn-secondary group">
                    <Download className="w-5 h-5 mr-2" />
                    Download System Proposals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
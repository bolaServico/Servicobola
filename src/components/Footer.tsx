import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  CheckCircle, 
  Download, 
  Calendar,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const solutions = [
    'Client Acquisition Engine',
    'Operations Automation Hub', 
    'Client Success Platform',
    'Custom AI Consulting'
  ];

  const resources = [
    'Case Studies & Success Stories',
    'ROI Calculator',
    'Implementation Guide', 
    'AI Readiness Assessment',
    'Download System Proposals'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Client Testimonials',
    'Privacy Policy',
    'Terms of Service'
  ];

  const industries = [
    {
      title: 'Legal Services',
      services: ['Law Firms (All Practice Areas)', 'Solo Practitioners', 'Legal Departments', 'Litigation Support']
    },
    {
      title: 'Accounting & Finance', 
      services: ['CPA Firms', 'Tax Preparation Services', 'Bookkeeping Services', 'Financial Advisory']
    },
    {
      title: 'Consulting Services',
      services: ['Management Consulting', 'IT Consulting', 'Marketing Agencies', 'Business Advisory']
    }
  ];

  const securityFeatures = [
    'SOC 2 Type II Certified',
    'GDPR Compliant', 
    'HIPAA Compliant',
    'Attorney-Client Privilege Protected',
    'Enterprise-Grade Encryption'
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer id="footer-section" className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/10 via-black to-gray-800/10"></div>
        
        {/* Subtle floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 blur-xl animate-pulse"
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Banner */}
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                  Serviqo
                </h3>
                
                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href="tel:+919059886228" className="text-gray-300 hover:text-white transition-colors">
                      +91 9059886228
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href="mailto:sridhar.serviqo@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      sridhar.serviqo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Security & Compliance
                </h4>
                <div className="space-y-2">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Solutions */}
                <div>
                  <h4 className="text-white font-semibold mb-6 text-lg">Our Solutions</h4>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {solution}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-white font-semibold mb-6 text-lg">Resources</h4>
                  <ul className="space-y-3">
                    {resources.map((resource, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {resource}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
                  <ul className="space-y-3">
                    {company.map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
              Industries We Serve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                  <h4 className="text-white font-semibold mb-4 text-lg group-hover:text-blue-400 transition-colors">
                    {industry.title}
                  </h4>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Newsletter */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                  Stay Ahead of the AI Revolution
                </h3>
                <p className="text-gray-300 mb-6">
                  Get weekly insights on AI innovations, implementation best practices, industry case studies, and exclusive resources.
                </p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary px-6 py-3 whitespace-nowrap"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
                
                <p className="text-gray-400 text-sm mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              {/* Social Media & Get Started */}
              <div>
                {/* Social Links */}
                <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                <div className="flex items-center space-x-4 mb-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">
                  Follow for AI implementation tips, industry insights, and client success stories.
                </p>
              </div>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                  24/7 Technical Support for Existing Clients
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300 text-sm">Emergency Hotline</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">Live Chat Available</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">Support Email</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">Support Portal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-4">
              © 2025 Serviqo. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-6 text-gray-400 text-sm">
              <span>Results may vary based on implementation</span>
              <span>•</span>
              <span>ROI calculations based on documented case studies</span>
              <span>•</span>
              <span>All client information remains confidential</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-xs max-w-4xl mx-auto leading-relaxed">
              This website and our services comply with all applicable professional services regulations including state bar association rules, 
              CPA professional standards, and federal compliance requirements. Your privacy is protected under our comprehensive Privacy Policy. 
              We use cookies to enhance your experience and never share personal information with third parties.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
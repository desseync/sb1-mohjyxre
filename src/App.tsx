import React, { useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Brain, Activity, UserCheck, ChevronRight, Mail, Phone, MapPin, Globe, Workflow, Users } from 'lucide-react';
import { useScrollToTop } from './hooks/useScrollToTop';
import AutomationBenefits from './pages/AutomationBenefits';
import PatientFollowUp from './pages/PatientFollowUp';
import AIPlatformIntegration from './pages/AIPlatformIntegration';
import WebsiteServices from './pages/WebsiteServices';

function useIntersectionObserver(callback: IntersectionObserverCallback) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
    });

    return () => observer.current?.disconnect();
  }, [callback]);

  return observer;
}

function App() {
  useScrollToTop();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {/* Navigation */}
          <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Link to="/" className="flex items-center space-x-2">
                    <Brain className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-semibold text-gray-900">Frequency AI</span>
                  </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                  <a href="#about" className="animated-link">About</a>
                  <a href="#services" className="animated-link">Services</a>
                  <a href="#contact" className="animated-link">Contact</a>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 font-display">
                    Empowering Mental Health Professionals with AI-Driven Solutions
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Innovative AI solutions tailored for mental health professionals to improve patient outcomes and operational efficiency.
                  </p>
                  <Link 
                    to="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="animated-button bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center space-x-2 inline-flex"
                  >
                    <span>Discover Our Solutions</span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                    alt="Medical professional using technology"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-display">About Frequency AI</h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Frequency AI, we're dedicated to revolutionizing psychiatric care through cutting-edge artificial intelligence. 
                  Our mission is to empower mental health professionals with tools that enhance diagnostic accuracy, streamline 
                  administrative tasks, and ultimately improve patient outcomes through data-driven insights and personalized care plans.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-display">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Workflow className="h-12 w-12 text-blue-600 animated-icon" />,
                    title: "AI Automation & Workflow Services",
                    description: "Transform your practice with intelligent automation that handles administrative tasks, freeing your team to focus on what matters most - delivering exceptional patient care.",
                    benefits: ["Increased efficiency", "Reduced errors", "Enhanced patient focus"],
                    cta: "Learn How Automation Can Benefit Your Practice",
                    link: "/automation-benefits"
                  },
                  {
                    icon: <Users className="h-12 w-12 text-blue-600 animated-icon" />,
                    title: "Patient Follow-Up Services",
                    description: "Elevate patient care with our sophisticated AI-powered follow-up system that maintains personalized, timely communication while reducing staff workload.",
                    benefits: ["Improved patient adherence", "Higher satisfaction rates", "Better outcomes"],
                    cta: "Discover Our Patient Follow-Up Solutions",
                    link: "/patient-follow-up"
                  },
                  {
                    icon: <Brain className="h-12 w-12 text-blue-600 animated-icon" />,
                    title: "AI Platform Integration",
                    description: "Modernize your practice with cutting-edge AI solutions that integrate seamlessly with your existing systems, enhancing every aspect of your operations.",
                    benefits: ["Seamless compatibility", "Enhanced data analysis", "Optimized workflow"],
                    cta: "Find Out About Our Integration Services",
                    link: "/ai-platform-integration"
                  },
                  {
                    icon: <Globe className="h-12 w-12 text-blue-600 animated-icon" />,
                    title: "Website Building Services",
                    description: "Create an engaging digital presence with our AI-enhanced website solutions, designed specifically for healthcare providers to attract and serve patients better.",
                    benefits: ["Improved online presence", "Enhanced patient engagement", "Better accessibility"],
                    cta: "Explore Our Website Development Services",
                    link: "/website-services"
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl group flex flex-col h-full animate-on-scroll"
                    style={{ 
                      opacity: 0,
                      transform: 'translateY(20px)',
                      transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <div className="mb-4 animate-on-scroll-icon">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <Link 
                        to={service.link || '#'} 
                        className="animated-button bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-sm w-full flex items-center justify-center space-x-2 h-12"
                      >
                        <span>{service.cta}</span>
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-display">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-600">contact@frequencyai.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-600">123 Innovation Drive, Silicon Valley, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Brain className="h-8 w-8 text-blue-400" />
                    <span className="text-xl font-semibold">Frequency AI</span>
                  </div>
                  <p className="text-gray-400">Enhancing psychiatric care through innovative AI solutions.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
                    <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                    <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400">AI Diagnostics</li>
                    <li className="text-gray-400">Patient Monitoring</li>
                    <li className="text-gray-400">Treatment Planning</li>
                    <li className="text-gray-400">Practice Management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400">LinkedIn</li>
                    <li className="text-gray-400">Twitter</li>
                    <li className="text-gray-400">Facebook</li>
                    <li className="text-gray-400">Instagram</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Frequency AI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      } />
      <Route path="/automation-benefits" element={<AutomationBenefits />} />
      <Route path="/patient-follow-up" element={<PatientFollowUp />} />
      <Route path="/ai-platform-integration" element={<AIPlatformIntegration />} />
      <Route path="/website-services" element={<WebsiteServices />} />
    </Routes>
  );
}

export default App;
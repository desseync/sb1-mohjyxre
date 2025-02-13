import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Calendar,
  Clock,
  MessageSquare,
  BarChart,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Users,
  Zap,
  LineChart,
  Timer,
  Star,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronDown,
  Bot,
  Sparkles,
  Workflow
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const pricingTiers = [
  {
    name: "Basic",
    price: 299,
    description: "Essential features for small practices",
    features: [
      "Virtual Assistant for automated appointment scheduling and management",
      "Two-way SMS reminders with confirmation and rescheduling options",
      "Seamless Google Calendar integration for real-time availability"
    ],
    recommended: false
  },
  {
    name: "Professional",
    price: 499,
    description: "Advanced features for growing practices",
    features: [
      "Includes all Basic Plan features, plus:",
      "Automated rescheduling workflow with customer self-service options",
      "Customizable reporting dashboard with exportable data",
      "Automated post-session follow-up communications",
      "One tailored workflow design to match your business processes"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solution with modular add-ons for enterprise needs",
    features: [
      {
        title: "Core Platform Customization",
        features: [
          "Fully customizable workflows and automation rules",
          "White-label branding options",
          "Custom API development and integration",
          "Multi-location and department support",
          "Role-based access control"
        ]
      },
      {
        title: "Add-On Modules",
        features: [
          "Advanced analytics and business intelligence",
          "Custom reporting engine",
          "AI-powered patient engagement",
          "Telehealth integration",
          "Enterprise resource planning"
        ]
      },
      {
        title: "Integration Suite",
        features: [
          "EHR/EMR system integration",
          "Custom third-party integrations",
          "Legacy system compatibility",
          "Data migration services",
          "Secure API access"
        ]
      },
      {
        title: "Enterprise Support",
        features: [
          "Dedicated success manager",
          "24/7 priority support",
          "Custom training programs",
          "Quarterly strategy reviews",
          "Compliance consulting"
        ]
      }
    ],
    recommended: false
  }
];

export default function FrequencyAI() {
  const [selectedPricingInterval, setSelectedPricingInterval] = useState('monthly');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">Frequency AI</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="animated-link">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="animated-link">Pricing</button>
              <button onClick={() => scrollToSection('benefits')} className="animated-link">Benefits</button>
              <button onClick={() => scrollToSection('contact')} className="animated-link">Contact</button>
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
                Revolutionizing Mental Health Practice Management
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your practice with AI-powered scheduling, seamless integrations, and intelligent automation designed specifically for mental health professionals.
              </p>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="animated-button bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center space-x-2 inline-flex"
              >
                <span>View Pricing</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="AI-powered healthcare management"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" id="benefits">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Key Platform Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "Efficiency",
                title: "Streamlined Operations",
                description: "Automate routine tasks and optimize scheduling"
              },
              {
                metric: "Integration",
                title: "Seamless Workflow",
                description: "Connect with your existing tools and systems"
              },
              {
                metric: "Innovation",
                title: "AI-Powered Solutions",
                description: "Leverage advanced technology for better outcomes"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-2xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Comprehensive Practice Management Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Scheduling",
                description: "AI-powered scheduling system that learns from your preferences and optimizes appointment slots",
                icon: Calendar
              },
              {
                title: "Automated Communications",
                description: "Intelligent patient reminders and follow-ups via email and SMS",
                icon: MessageSquare
              },
              {
                title: "Practice Analytics",
                description: "Real-time insights into practice performance and patient engagement",
                icon: LineChart
              },
              {
                title: "Secure Patient Portal",
                description: "HIPAA-compliant portal for seamless patient communication and document sharing",
                icon: Shield
              },
              {
                title: "Integration Hub",
                description: "Connect with your favorite tools including Google Calendar, EHR systems, and more",
                icon: Workflow
              },
              {
                title: "AI Assistant",
                description: "24/7 virtual assistant for basic patient inquiries and scheduling requests",
                icon: Bot
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-display">Transparent Pricing</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the plan that best fits your practice's needs. All plans include our core AI-powered scheduling features.
          </p>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingTiers.slice(0, 2).map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full ${
                    tier.recommended ? 'border-2 border-blue-600' : ''
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">
                      Recommended
                    </div>
                  )}
                  <div className="p-8 flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                      <p className="text-gray-600 mb-4">{tier.description}</p>
                      <div className="mb-8">
                        <span className="text-4xl font-bold">${tier.price}</span>
                        <span className="text-gray-600">/month</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className={`w-full py-3 rounded-lg font-medium transition ${
                        tier.recommended
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                    <p className="text-gray-600 mb-4">Comprehensive solution for large organizations</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">Custom</span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {pricingTiers[2].features.map((group, groupIndex) => (
                      <div key={groupIndex} className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold mb-4 text-blue-600">{group.title}</h4>
                        <ul className="space-y-3">
                          {group.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-8">
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 w-full py-3 rounded-lg font-medium transition"
                    >
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Get in Touch</h2>
          <ContactForm />
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
              <p className="text-gray-400">Revolutionizing mental health practice management through AI innovation.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition">Pricing</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="text-gray-400 hover:text-white transition">Benefits</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Privacy Policy</li>
                <li className="text-gray-400">Terms of Service</li>
                <li className="text-gray-400">HIPAA Compliance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">LinkedIn</li>
                <li className="text-gray-400">X</li>
                <li className="text-gray-400">Facebook</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Frequency AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
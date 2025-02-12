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

const testimonials = [
  {
    name: "Natalie Desseyn",
    role: "PMHNP",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Frequency AI has transformed how I manage my practice. The automated scheduling alone has saved me countless hours.",
    rating: 5
  },
  {
    name: "Dr. Michael Chen",
    role: "Psychiatrist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    content: "The integration with our existing systems was seamless. Our patient satisfaction scores have improved significantly.",
    rating: 5
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Mental Health Counselor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    content: "The AI-powered insights have helped us provide more personalized care to our patients. Highly recommended!",
    rating: 5
  }
];

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

function FrequencyAI() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedPricingInterval, setSelectedPricingInterval] = useState('monthly');

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
              <a href="#features" className="animated-link">Features</a>
              <a href="#pricing" className="animated-link">Pricing</a>
              <a href="#testimonials" className="animated-link">Testimonials</a>
              <Link to="/contact" className="animated-link">Contact</Link>
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
                className="animated-button bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center space-x-2 inline-flex"
                onClick={() => {
                  const element = document.getElementById('pricing');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
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
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Measurable Impact on Your Practice</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "50%",
                title: "Reduction in No-Shows",
                description: "Through intelligent reminders and engagement"
              },
              {
                metric: "30%",
                title: "Increase in Revenue",
                description: "By optimizing scheduling and reducing gaps"
              },
              {
                metric: "75%",
                title: "Time Saved",
                description: "On administrative tasks and scheduling"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-b from-blue-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white" id="problems">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 font-display">Common Challenges in Practice Management</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Time-Consuming Scheduling",
                    description: "Manual scheduling and rescheduling consume up to 15 hours per week",
                    icon: Clock
                  },
                  {
                    title: "Patient No-Shows",
                    description: "20% average no-show rate costs practices thousands in revenue",
                    icon: Users
                  },
                  {
                    title: "Administrative Overhead",
                    description: "Staff spends 30% of time on administrative tasks",
                    icon: BarChart
                  },
                  {
                    title: "Communication Gaps",
                    description: "Delayed responses lead to 25% patient dissatisfaction",
                    icon: MessageSquare
                  }
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                      <challenge.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{challenge.title}</h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professionals discussing challenges"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
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
                      className={`w-full py-3 rounded-lg font-medium transition ${
                        tier.recommended
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
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
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 w-full py-3 rounded-lg font-medium transition"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">"{testimonials[currentTestimonial].content}"</p>
              <div className="flex items-center space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-display">Get in Touch</h2>
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm">
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">24/7 Email Support</h3>
                  <p className="text-gray-600 mb-4">
                    We're always here to help! Email us anytime and expect a response within 24 hours.
                  </p>
                  <div className="inline-flex items-center justify-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <a href="mailto:123@frequencyai.xyz" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      123@frequencyai.xyz
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Note: We currently provide support exclusively via email to ensure thorough attention to your inquiries.
                  </p>
                </div>
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
              <p className="text-gray-400">Revolutionizing mental health practice management through AI innovation.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
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

export default FrequencyAI;
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, Globe, Palette, Code, Rocket, Search, Shield, Calendar, UserCircle, Smartphone, Gauge, Lock, Stethoscope, Users } from 'lucide-react';

export default function WebsiteServices() {
  return (
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
              <Link to="/" className="animated-link">Home</Link>
              <a 
                href="#website-features" 
                className="animated-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('website-features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
              <a href="#process" className="animated-link">Process</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 font-display">
                Healthcare Website Development Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create a powerful online presence with our specialized healthcare website development services. 
                We combine modern design with AI-driven features to deliver engaging, accessible, and 
                HIPAA-compliant websites for healthcare providers.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Modern website design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="website-features" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Website Development Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elevate your healthcare practice with our comprehensive suite of web development features, designed specifically for medical professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="h-10 w-10" />,
                title: "Improved Online Presence",
                description: "Enhance your practice's visibility and credibility with a professional, modern website."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Enhanced Patient Engagement",
                description: "Foster better communication and engagement through interactive features and personalized content."
              },
              {
                icon: <Gauge className="h-10 w-10" />,
                title: "Better Accessibility",
                description: "Ensure all patients can easily access your services with responsive, user-friendly design."
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-600 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-display">
            Our Development Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We learn about your practice, goals, and specific requirements."
              },
              {
                step: "2",
                title: "Design",
                description: "Creation of custom designs that align with your brand identity."
              },
              {
                step: "3",
                title: "Development",
                description: "Building your website with modern, secure technologies."
              },
              {
                step: "4",
                title: "Testing",
                description: "Rigorous testing across devices and browsers."
              },
              {
                step: "5",
                title: "Launch",
                description: "Deployment and ongoing support for your website."
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start space-x-4 mb-12 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                  {phase.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-display">
            Ready to Build Your Healthcare Website?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create a powerful online presence for your practice.
          </p>
          <Link 
            to="/#contact" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Frequency AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
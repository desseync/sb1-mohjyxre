import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, Pill, Heart, Activity, ChevronRight, MessageSquare, ClipboardCheck } from 'lucide-react';

export default function PatientFollowUp() {
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
              <a href="#features" className="animated-link">Features</a>
              <a href="#workflow" className="animated-link">Workflow</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 font-display">
                Patient Follow-Up Services
              </h1>
              <h2 className="text-2xl text-blue-600 mb-6 font-display">
                AI-Powered Patient Engagement Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our advanced AI-driven communication system revolutionizes patient engagement through 
                personalized interactions, timely follow-ups, and intelligent monitoring. By combining 
                cutting-edge technology with compassionate care, we help healthcare providers maintain 
                meaningful connections with their patients while optimizing clinical outcomes.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professional using digital technology"
                className="rounded-2xl shadow-2xl w-full max-w-2xl h-[500px] object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="benefits" className="py-20 bg-white w-full">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-display">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
                title: "Automated Communication",
                description: "Intelligent, timely communication with patients through AI-powered messaging system.",
                benefits: [
                  "Personalized follow-up messages",
                  "Appointment reminders",
                  "Treatment plan updates"
                ]
              },
              {
                icon: <ClipboardCheck className="h-12 w-12 text-blue-600" />,
                title: "Treatment Adherence",
                description: "Improve patient compliance with treatment plans through regular monitoring and support.",
                benefits: [
                  "Medication reminders",
                  "Progress tracking",
                  "Behavioral support"
                ]
              },
              {
                icon: <Activity className="h-12 w-12 text-blue-600" />,
                title: "Outcome Monitoring",
                description: "Track and analyze patient progress with advanced analytics and reporting.",
                benefits: [
                  "Real-time progress tracking",
                  "Early intervention alerts",
                  "Outcome analysis"
                ]
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              Ready to Transform Your Patient Engagement?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Take the first step towards improved patient outcomes with our AI-powered follow-up solutions.
            </p>
            <div className="relative">
              <form className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Practice Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                </div>
                <div className="mb-8">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
                </div>
                <button className="animated-button bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition w-full flex items-center justify-center space-x-2">
                  <span>Elevate Your Patient Engagement</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Frequency AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
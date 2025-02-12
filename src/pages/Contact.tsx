import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    // Configure TIXAE Agents
    window.VG_CONFIG = {
      ID: "v2uac92uxyfabkrc",
      region: 'na',
      render: 'full-width',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ]
    };

    // Load TIXAE Agents script
    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
      delete window.VG_CONFIG;
    };
  }, []);

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
              <Link to="/#features" className="animated-link">Features</Link>
              <Link to="/#pricing" className="animated-link">Pricing</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      {/* TIXAE Agents Container */}
      <div className="flex justify-center items-start pt-8 min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-2xl px-4">
          <div 
            id="VG_OVERLAY_CONTAINER" 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            style={{ 
              width: '100%', 
              height: '800px',
              maxHeight: 'calc(100vh - 250px)'
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Frequency AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
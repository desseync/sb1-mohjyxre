import React, { useEffect, useRef } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Brain, Activity, ChevronRight, MapPin, Workflow } from 'lucide-react';
import { useScrollToTop } from './hooks/useScrollToTop';
import AutomationBenefits from './pages/AutomationBenefits';
import AIPlatformIntegration from './pages/AIPlatformIntegration';
import FrequencyAI from './pages/FrequencyAI';

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
      <Route path="/" element={<FrequencyAI />} />
      <Route path="/automation-benefits" element={<AutomationBenefits />} />
      <Route path="/ai-platform-integration" element={<AIPlatformIntegration />} />
      <Route path="*" element={<FrequencyAI />} /> {/* Add catch-all route */}
    </Routes>
  );
}

export default App;
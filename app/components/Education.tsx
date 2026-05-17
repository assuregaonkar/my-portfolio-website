'use client';

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="education" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', color: 'var(--text-primary)' }}
        >
          <span className="text-indigo-400">Education</span>
        </h2>
        <div
          className="rounded-xl p-6 border hover:border-indigo-800 transition-all duration-700 flex flex-col sm:flex-row sm:items-center gap-4"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '150ms' }}
        >
          <div className="text-4xl shrink-0">🎓</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Bachelor of Engineering — Information Science &amp; Engineering</h3>
            <p className="text-indigo-400 font-medium mt-1">Bapuji Institute of Engineering and Technology, Davanagere, Karnataka</p>
          </div>
          <span className="text-sm font-mono whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>2018 – 2022</span>
        </div>
      </div>
    </section>
  );
};

export default Education;

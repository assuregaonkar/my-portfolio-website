'use client';

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const achievements = [
  {
    award: 'Pat on the Back',
    detail: "Recognized for maintaining the team's highest sprint velocity and delivering a record number of production tasks within a critical release timeframe.",
  },
  {
    award: 'Rise and Shine',
    detail: 'Honored for extraordinary performance and consistent high-quality delivery with minimal supervision.',
  },
  {
    award: 'Standing Ovation',
    detail: 'Awarded for exceptional production delivery and an unwavering commitment to customer-centric product excellence.',
  },
];

const Achievements = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="achievements" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', color: 'var(--text-primary)' }}
        >
          Achievements &amp; <span className="text-indigo-400">Recognition</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.award}
              className="rounded-xl p-6 border text-center transition-all duration-700"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-3">{item.award}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

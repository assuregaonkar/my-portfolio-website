'use client';

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    title: 'Senior Engineer',
    company: 'Altimetrik (Intuit)',
    period: 'Jan 2026 – Present',
    bullets: [
      'Architected and maintained a scalable Redux + Redux Toolkit state management layer across multiple QuickBooks product modules, reducing reducer complexity and improving long-term maintainability.',
      'Developed a self-serve data seeding widget for IES sandbox environments with two feature-flagged paths (single- and multi-entity) and integrated loading through error experiences.',
      'Owned frontend observability: instrumented RUM interactions and trace propagation, built Splunk dashboards and alerts for on-call visibility, and shipped Amplitude-backed UI event tracking.',
      'Conducted thorough PR code reviews, providing actionable feedback to enforce best practices and ensure codebase consistency.',
      'Mentored junior engineers on well-structured, reusable React widget patterns and complex frontend component design decisions.',
    ],
  },
  {
    title: 'Engineer',
    company: 'Altimetrik (Intuit)',
    period: 'Apr 2025 – Dec 2025',
    bullets: [
      'Developed a custom formula builder integrated into QuickBooks Reports, enabling users to dynamically define custom rows and column configurations.',
      'Designed and shipped the QuickBooks Product Download Hub with OS-aware auto-detection (macOS/Windows) and a seamless toggle for web-app alternatives.',
      'Built a reusable React widget and custom hook library decoupling complex business logic from presentation, enabling cross-module feature delivery with reduced code duplication.',
    ],
  },
  {
    title: 'Associate Engineer',
    company: 'Altimetrik (Intuit)',
    period: 'Mar 2023 – Apr 2025',
    bullets: [
      'Led the full E2E test suite migration from Cypress to Playwright, introducing parallel execution and reducing CI/CD pipeline build times by 30%.',
      'Contributed to feature development across core QuickBooks frontend modules with hands-on production experience in React, TypeScript, and RESTful API integration.',
      'Drove feature flag cleanup initiatives, reducing technical debt and shrinking overall codebase size by ~10%.',
    ],
  },
];

const Experience = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', color: 'var(--text-primary)' }}
        >
          Work <span className="text-indigo-400">Experience</span>
        </h2>
        <div style={{ borderLeftColor: '#312e81' }} className="relative border-l-2 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-2" style={{ borderColor: 'var(--bg-primary)' }} />
              <div
                className="rounded-xl p-6 border transition-colors"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{exp.title}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <span className="text-indigo-400 mt-1 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

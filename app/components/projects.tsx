'use client';

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Company Data Seeding Widget',
    type: 'Professional Project',
    tech: ['React.js', 'TypeScript', 'REST APIs', 'Feature Flags'],
    description:
      'A self-serve widget that lets teams seed IES sandbox environments with sample data for internal and external use, supporting single- and multi-entity flows with distinct loading, error, and success states.',
    highlights: [
      'Modular React architecture with custom hooks for async data flow',
      'Feature-flagged dual paths (single- and multi-entity)',
      'Clean separation of UI, business, and API layers',
    ],
    github: null,
    demo: null,
  },
  {
    title: 'Personal Portfolio Website',
    type: 'Personal Project',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'React 19'],
    description:
      'A fully responsive personal portfolio built with Next.js 16 and Tailwind CSS v4, featuring a typewriter hero animation, scroll-reveal transitions, dark/light mode, and a downloadable resume — deployed on Vercel.',
    highlights: [
      'Typewriter name animation with staggered fade-in for summary and CTAs',
      'Intersection Observer scroll-reveal across all sections',
      'Dark/light mode toggle persisted via localStorage',
      'Grouped skill section with official brand SVG icons',
      'Resume PDF download + profile photo in circular frame',
      'Fully responsive — mobile-first layout with Tailwind CSS v4',
    ],
    github: 'https://github.com/assuregaonkar/my-portfolio-website',
    demo: 'https://anushasuregaonkar-portfolio.vercel.app',
  },
];

const Projects = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', color: 'var(--text-primary)' }}
        >
          Featured <span className="text-indigo-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl p-6 border transition-colors flex flex-col"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                <span className="text-xs text-indigo-400 bg-indigo-950/60 border border-indigo-800 px-2 py-1 rounded-full whitespace-nowrap">
                  {project.type}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{project.description}</p>
              <ul className="space-y-1 mb-5 flex-1">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="text-indigo-400 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded border"
                    style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

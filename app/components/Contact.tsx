'use client';

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GmailIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
    <path fill="#EA4335" d="M6 8h36a2 2 0 0 1 2 2v4L24 30 4 14v-4a2 2 0 0 1 2-2Z" />
    <path fill="#FBBC05" d="M4 14v22a2 2 0 0 0 2 2h8V22Z" />
    <path fill="#34A853" d="M44 14v22a2 2 0 0 1-2 2h-8V22Z" />
    <path fill="#4285F4" d="M14 38h20V22L24 30Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#0A66C2" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Contact = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl font-bold mb-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', color: 'var(--text-primary)' }}
        >
          Get In <span className="text-indigo-400">Touch</span>
        </h2>
        <p className="mb-12 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          I&apos;m always open to new opportunities and collaborations. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:assuregaonkar@gmail.com"
            className="flex flex-col items-center gap-3 rounded-xl p-6 border hover:border-indigo-700 transition-colors group"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <GmailIcon />
            <span className="contact-label text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Email
            </span>
            <span className="text-xs break-all" style={{ color: 'var(--text-muted)' }}>assuregaonkar@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/assuregaonkar-b163941a4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl p-6 border hover:border-indigo-700 transition-colors group"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <LinkedInIcon />
            <span className="contact-label text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              LinkedIn
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>assuregaonkar</span>
          </a>
          <a
            href="https://github.com/assuregaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl p-6 border hover:border-indigo-700 transition-colors group"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <GitHubIcon />
            <span className="contact-label text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              GitHub
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>assuregaonkar</span>
          </a>
        </div>
        <p className="mt-10 text-sm" style={{ color: 'var(--text-muted)' }}>
          Based in Bengaluru, Karnataka, India · +91 8861393666
        </p>
      </div>
    </section>
  );
};

export default Contact;

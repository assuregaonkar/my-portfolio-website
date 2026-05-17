'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { theme, toggle } = useTheme();
  return (
    <header style={{ borderBottomColor: 'var(--border-color)' }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" css-bg="primary">
      <div style={{ backgroundColor: 'var(--bg-primary)', opacity: 0.85 }} className="absolute inset-0 -z-10" />
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="text-lg font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
          AS
        </a>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{ color: 'var(--text-muted)' }}
                className="text-sm hover-accent transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
          className="p-2 rounded-lg border hover-accent hover-border-accent transition-colors"
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

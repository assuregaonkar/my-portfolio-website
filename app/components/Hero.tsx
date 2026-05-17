'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const FULL_NAME = 'Anusha Shanmukhappa\nSuregaonkar';
const TYPE_SPEED = 60;
const SUMMARY_DELAY = 400;

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [summaryVisible, setSummaryVisible] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i >= FULL_NAME.length) {
        clearInterval(interval);
        setTimeout(() => setSummaryVisible(true), SUMMARY_DELAY);
      }
    }, TYPE_SPEED);
    return () => clearInterval(interval);
  }, []);

  const lines = displayed.split('\n');
  const firstLine = lines[0] ?? '';
  const secondLine = lines[1] ?? '';
  const showCursor = displayed.length < FULL_NAME.length;

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16"
    >
      <div className="max-w-3xl w-full flex flex-col items-center">
        {/* Profile photo */}
        <div className="mb-6 rounded-full overflow-hidden border-4 border-indigo-500 w-32 h-32 md:w-40 md:h-40 shadow-lg shadow-indigo-900/40">
          <Image
            src="/profile.jpeg"
            alt="Anusha Shanmukhappa Suregaonkar"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <p className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight min-h-[7rem] md:min-h-[8rem]">
          {firstLine}
          {secondLine || showCursor ? (
            <>
              <br />
              <span className="text-indigo-400">{secondLine}</span>
            </>
          ) : null}
          {showCursor && (
            <span className="inline-block w-[3px] h-[1em] bg-indigo-400 ml-1 align-middle animate-pulse" />
          )}
        </h1>

        <h2
          className="text-xl md:text-2xl font-medium mb-6 transition-opacity duration-700"
          style={{ opacity: summaryVisible ? 1 : 0, color: 'var(--text-muted)' }}
        >
          Senior Frontend Engineer
        </h2>
        <p
          className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto transition-opacity duration-1000"
          style={{ opacity: summaryVisible ? 1 : 0, color: 'var(--text-secondary)' }}
        >
          3+ years building scalable React applications at Intuit. Experienced in Redux
          state management, frontend observability, and E2E test migration. I turn complex
          product requirements into clean, reusable component architectures.
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center transition-opacity duration-1000 delay-300"
          style={{ opacity: summaryVisible ? 1 : 0 }}
        >
          <a
            href="#experience"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="/Anusha_Resume.pdf"
            download
            className="flex items-center gap-2 border hover-border-accent hover-accent px-6 py-3 rounded-lg font-medium transition-colors"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

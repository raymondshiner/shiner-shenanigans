import Link from 'next/link';
import React from 'react';

export const PageContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">{children}</div>
);

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>
);

export const Header = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-8">{children}</div>
);

export const BackLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-4 inline-flex items-center"
  >
    {children}
  </Link>
);

export const BackIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

export const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{children}</h1>
);

export const PageSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-600 dark:text-gray-300">{children}</p>
);

export const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="mb-12">{children}</section>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
    {children}
  </h2>
);

export const EventsGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
);

export const EmptyState = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
    <p className="text-gray-600 dark:text-gray-300 text-lg">{children}</p>
  </div>
);

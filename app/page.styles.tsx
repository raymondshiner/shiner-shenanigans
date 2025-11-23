import Link from 'next/link';
import React from 'react';

export const PageContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">{children}</div>
);

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>
);

export const HeroHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-12">{children}</div>
);

export const MainTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-4">
    {children}
  </h1>
);

export const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{children}</p>
);

export const ButtonGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-4 justify-center">{children}</div>
);

export const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
  >
    {children}
  </Link>
);

export const InfoSection = ({ children }: { children: React.ReactNode }) => (
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
    {children}
  </section>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{children}</h2>
);

export const SectionText = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-600 dark:text-gray-300 mb-4">{children}</p>
);

export const FeatureGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">{children}</div>
);

export const FeatureCard = ({ emoji, title, description }: { emoji: string; title: string; description: string }) => (
  <div className="text-center">
    <div className="text-4xl mb-2">{emoji}</div>
    <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export const EventsSection = ({ children }: { children: React.ReactNode }) => (
  <section className="mb-12">{children}</section>
);

export const EventsSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{children}</h2>
);

export const EventsGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
);

export const EmptyState = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
    <p className="text-gray-600 dark:text-gray-300 text-lg">{children}</p>
  </div>
);

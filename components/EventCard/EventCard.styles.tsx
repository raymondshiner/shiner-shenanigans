import Link from 'next/link';
import React from 'react';

export const CardLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>{children}</Link>
);

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-[1.02] hover:-translate-y-0.5">
    {children}
  </div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6">{children}</div>
);

export const Header = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-between items-start mb-3">{children}</div>
);

export const Title = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{children}</h3>
);

export const StatusBadge = ({ status }: { status: string }) => {
  const statusColors = {
    upcoming: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    ongoing: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    completed: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  const colorClass = statusColors[status as keyof typeof statusColors] || statusColors.cancelled;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export const Description = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{children}</p>
);

export const InfoSection = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-2 mb-4">{children}</div>
);

export const InfoItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
    {children}
  </div>
);

export const CalendarIcon = () => (
  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const ClockIcon = () => (
  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const LocationIcon = () => (
  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const RSVPSection = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
    {children}
  </div>
);

export const RSVPCount = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center">{children}</div>
);

export const UsersIcon = () => (
  <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const RSVPText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm font-semibold text-gray-900 dark:text-white">{children}</span>
);

export const GuestCount = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm text-gray-600 dark:text-gray-400">{children}</span>
);

export const TagsSection = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap gap-2 mt-4">{children}</div>
);

export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
    {children}
  </span>
);

'use client';

import { verifyPassword } from '@/lib/auth';
import { usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';

interface PasswordProtectionProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export default function PasswordProtection({ children, isAuthenticated }: PasswordProtectionProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // Skip password protection for Sanity Studio admin route
  const isAdminRoute = pathname.startsWith('/admin');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    startTransition(async () => {
      const result = await verifyPassword(password);

      if (result.success) {
        // Reload the page to re-check authentication on the server
        window.location.reload();
      } else {
        setError(result.error || 'An error occurred');
        setPassword('');
      }
    });
  };

  if (!isAuthenticated && !isAdminRoute) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
            Shiner Shenanigans
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Enter the password to access this site
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                placeholder="Enter password"
                autoFocus
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {isPending ? 'Verifying...' : 'Access Site'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              🔒 This site is password protected
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

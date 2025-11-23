import React from 'react';

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
    {children}
  </div>
);

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md">
    {children}
  </div>
);

export const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
    {children}
  </h1>
);

export const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
    {children}
  </p>
);

export const Form = ({ onSubmit, children }: { onSubmit: (e: React.FormEvent) => void; children: React.ReactNode }) => (
  <form onSubmit={onSubmit} className="space-y-4">
    {children}
  </form>
);

export const InputGroup = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    {children}
  </label>
);

export const PasswordInput = ({ 
  id, 
  value, 
  onChange 
}: { 
  id: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    type="password"
    id={id}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
    placeholder="Enter password"
    autoFocus
    required
  />
);

export const ErrorMessage = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
    {children}
  </div>
);

export const SubmitButton = ({ 
  disabled, 
  isPending 
}: { 
  disabled: boolean; 
  isPending: boolean;
}) => (
  <button
    type="submit"
    disabled={disabled}
    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
  >
    {isPending ? 'Verifying...' : 'Access Site'}
  </button>
);

export const Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 text-center">
    {children}
  </div>
);

export const FooterText = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs text-gray-500 dark:text-gray-400">
    {children}
  </p>
);

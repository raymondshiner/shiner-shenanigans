import React from 'react';

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
    {children}
  </div>
);

export const Title = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{children}</h3>
);

export const Form = ({ onSubmit, children }: { onSubmit: (e: React.FormEvent) => void; children: React.ReactNode }) => (
  <form onSubmit={onSubmit} className="space-y-4">
    {children}
  </form>
);

export const FormField = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
    {children}
  </label>
);

export const TextInput = ({
  id,
  value,
  onChange,
  placeholder,
  disabled,
}: {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled: boolean;
}) => (
  <input
    type="text"
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    disabled={disabled}
  />
);

export const PartySizeControls = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4">{children}</div>
);

export const CounterButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xl"
  >
    {children}
  </button>
);

export const NumberInput = ({
  id,
  value,
  onChange,
  min,
  max,
  disabled,
}: {
  id: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: string;
  max: string;
  disabled: boolean;
}) => (
  <input
    type="number"
    id={id}
    value={value}
    onChange={onChange}
    min={min}
    max={max}
    className="w-20 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold text-lg"
    disabled={disabled}
  />
);

export const PartySizeLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm text-gray-600 dark:text-gray-400">{children}</span>
);

export const Message = ({ type, children }: { type: 'success' | 'error'; children: React.ReactNode }) => {
  const className = type === 'success'
    ? 'p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
    : 'p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800';

  return (
    <div className={className}>
      <p className="text-sm font-semibold">{children}</p>
    </div>
  );
};

export const SubmitButton = ({ disabled, children }: { disabled: boolean; children: React.ReactNode }) => (
  <button
    type="submit"
    disabled={disabled}
    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {children}
  </button>
);

export const FooterNote = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">{children}</p>
);

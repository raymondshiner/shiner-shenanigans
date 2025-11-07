'use client';

import { useState } from 'react';

interface RSVPFormProps {
  eventId: string;
  eventTitle: string;
}

export default function RSVPForm({ eventId, eventTitle }: RSVPFormProps) {
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage({ type: 'error', text: 'Please enter your name' });
      return;
    }

    if (partySize < 1 || partySize > 20) {
      setMessage({ type: 'error', text: 'Party size must be between 1 and 20' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    // Simulate API call - in a real app, this would save to a database
    // For now, we'll just show a success message
    setTimeout(() => {
      setMessage({
        type: 'success',
        text: `Thanks ${name}! Your RSVP for ${partySize} ${partySize === 1 ? 'person' : 'people'} has been recorded. Please note: You'll need to manually add this to the events.json file.`
      });
      setName('');
      setPartySize(1);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        RSVP to {eventTitle}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Your Name / Group Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., John & Sarah, The Smiths"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="partySize" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Party Size
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPartySize(Math.max(1, partySize - 1))}
              disabled={isSubmitting || partySize <= 1}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xl"
            >
              -
            </button>
            <input
              type="number"
              id="partySize"
              value={partySize}
              onChange={(e) => setPartySize(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
              min="1"
              max="20"
              className="w-20 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold text-lg"
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setPartySize(Math.min(20, partySize + 1))}
              disabled={isSubmitting || partySize >= 20}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xl"
            >
              +
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {partySize === 1 ? 'person' : 'people'}
            </span>
          </div>
        </div>

        {message && (
          <div
            className={`p-4 rounded-lg ${message.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
              }`}
          >
            <p className="text-sm font-semibold">{message.text}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
        </button>
      </form>

      <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
        Note: This is a static site. RSVPs will need to be manually added to the events.json file by the site administrator.
      </p>
    </div>
  );
}

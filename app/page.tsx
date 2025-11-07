import EventCard from '@/components/EventCard';
import { getUpcomingEvents } from '@/lib/sanity-events';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const upcomingEvents = await getUpcomingEvents();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🎉 Shiner Shenanigans
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Your central hub for home events and gatherings
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/events"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            >
              View All Events
            </Link>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Upcoming Events
          </h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No upcoming events scheduled. Check back soon!
              </p>
            </div>
          )}
        </section>

        {/* Info Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About Our Events
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Welcome to our home event space! We love hosting gatherings, from game nights
            to dinner parties. Browse our upcoming events and join us for some fun!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🏠</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Cozy Venue</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Our home, your comfort</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">👥</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Great Company</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Friends and family welcome</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎊</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Fun Times</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Memorable experiences</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

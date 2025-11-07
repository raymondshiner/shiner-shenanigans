import RSVPForm from '@/components/RSVPForm';
import { formatEventDate, getEventById } from '@/lib/events';
import { getRSVPCount, getTotalGuests } from '@/lib/rsvp-utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  const totalGuests = getTotalGuests(event);
  const rsvpCount = getRSVPCount(event);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/events"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 inline-flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Events
        </Link>

        {/* Event Details Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-bold">{event.title}</h1>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${event.status === 'upcoming' ? 'bg-green-500' :
                event.status === 'ongoing' ? 'bg-blue-500' :
                  event.status === 'completed' ? 'bg-gray-500' :
                    'bg-red-500'
                }`}>
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About This Event
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {event.description}
              </p>
            </section>

            {/* Event Details */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Event Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Date</p>
                    <p className="text-gray-700 dark:text-gray-300">{formatEventDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Time</p>
                    <p className="text-gray-700 dark:text-gray-300">{event.time}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* RSVPs Section */}
            {rsvpCount > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  RSVPs ({rsvpCount}) - {totalGuests} {totalGuests === 1 ? 'Guest' : 'Guests'} Total
                </h2>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                  <div className="space-y-3">
                    {event.rsvps?.map((rsvp, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {rsvp.name}
                          </span>
                        </div>
                        <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-semibold">
                          Party of {rsvp.partySize}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* RSVP Form */}
            {event.status === 'upcoming' && (
              <section className="mt-8">
                <RSVPForm eventId={event.id} eventTitle={event.title} />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

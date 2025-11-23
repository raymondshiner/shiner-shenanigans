import EventCard from '@/components/EventCard/EventCard';
import { getAllEvents } from '@/lib/sanity-events';
import * as S from './page.styles';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function EventsPage() {
  const allEvents = await getAllEvents();

  const upcomingEvents = allEvents.filter(e => e.status === 'upcoming');
  const completedEvents = allEvents.filter(e => e.status === 'completed');
  const cancelledEvents = allEvents.filter(e => e.status === 'cancelled');

  return (
    <S.PageContainer>
      <S.ContentWrapper>
        <S.Header>
          <S.BackLink href="/">
            <S.BackIcon />
            Back to Home
          </S.BackLink>
          <S.PageTitle>All Events</S.PageTitle>
          <S.PageSubtitle>Browse all our past, present, and future events</S.PageSubtitle>
        </S.Header>

        {upcomingEvents.length > 0 && (
          <S.Section>
            <S.SectionTitle>
              <span className="mr-3">📅</span>
              Upcoming Events
            </S.SectionTitle>
            <S.EventsGrid>
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </S.EventsGrid>
          </S.Section>
        )}

        {completedEvents.length > 0 && (
          <S.Section>
            <S.SectionTitle>
              <span className="mr-3">✅</span>
              Past Events
            </S.SectionTitle>
            <S.EventsGrid>
              {completedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </S.EventsGrid>
          </S.Section>
        )}

        {cancelledEvents.length > 0 && (
          <S.Section>
            <S.SectionTitle>
              <span className="mr-3">❌</span>
              Cancelled Events
            </S.SectionTitle>
            <S.EventsGrid>
              {cancelledEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </S.EventsGrid>
          </S.Section>
        )}

        {allEvents.length === 0 && (
          <S.EmptyState>No events found. Check back later!</S.EmptyState>
        )}
      </S.ContentWrapper>
    </S.PageContainer>
  );
}

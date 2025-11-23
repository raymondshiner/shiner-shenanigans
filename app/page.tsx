import EventCard from '@/components/EventCard/EventCard';
import { getUpcomingEvents } from '@/lib/sanity-events';
import * as S from './page.styles';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const upcomingEvents = await getUpcomingEvents();

  return (
    <S.PageContainer>
      <S.ContentWrapper>
        <S.HeroHeader>
          <S.MainTitle>
            <span>🎉</span>
            <span>Shiner Shenanigans</span>
            <span>🎉</span>
          </S.MainTitle>
          <S.Subtitle>Good times @ the Shiners</S.Subtitle>
          <S.ButtonGroup>
            <S.PrimaryButton href="/events">View All Events</S.PrimaryButton>
          </S.ButtonGroup>
        </S.HeroHeader>

        <S.InfoSection>
          <S.SectionTitle>About Our Events</S.SectionTitle>
          <S.SectionText>
            Welcome to our home event space! We love hosting gatherings, from game nights
            to dinner parties. Browse our upcoming events and join us for some fun!
          </S.SectionText>
          <S.FeatureGrid>
            <S.FeatureCard
              emoji="🎈"
              title="Kid-Friendly"
              description="Safe space for children"
            />
            <S.FeatureCard
              emoji="🍷"
              title="Adult Space"
              description="Relax and unwind"
            />
            <S.FeatureCard
              emoji="🍽️"
              title="Fresh Food"
              description="Delicious homemade meals"
            />
            <S.FeatureCard
              emoji="🍹"
              title="Drinks!"
              description="Beverages for everyone"
            />
          </S.FeatureGrid>
        </S.InfoSection>

        <S.EventsSection>
          <S.EventsSectionTitle>Upcoming Events</S.EventsSectionTitle>
          {upcomingEvents.length > 0 ? (
            <S.EventsGrid>
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </S.EventsGrid>
          ) : (
            <S.EmptyState>No upcoming events scheduled. Check back soon!</S.EmptyState>
          )}
        </S.EventsSection>
      </S.ContentWrapper>
    </S.PageContainer>
  );
}

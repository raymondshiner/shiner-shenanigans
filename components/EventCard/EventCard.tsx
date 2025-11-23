import { formatEventDate } from '@/lib/events';
import { getRSVPCount, getTotalGuests } from '@/lib/rsvp-utils';
import { Event } from '@/lib/types';
import * as S from './EventCard.styles';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const totalGuests = getTotalGuests(event);
  const rsvpCount = getRSVPCount(event);

  return (
    <S.CardLink href={`/events/${event.id}`}>
      <S.Card>
        <S.CardContent>
          <S.Header>
            <S.Title>{event.title}</S.Title>
            <S.StatusBadge status={event.status} />
          </S.Header>

          <S.Description>{event.description}</S.Description>

          <S.InfoSection>
            <S.InfoItem>
              <S.CalendarIcon />
              <span>{formatEventDate(event.date)}</span>
            </S.InfoItem>

            <S.InfoItem>
              <S.ClockIcon />
              <span>{event.time}</span>
            </S.InfoItem>

            {event.location && (
              <S.InfoItem>
                <S.LocationIcon />
                <span>{event.location}</span>
              </S.InfoItem>
            )}
          </S.InfoSection>

          {rsvpCount > 0 && (
            <S.RSVPSection>
              <S.RSVPCount>
                <S.UsersIcon />
                <S.RSVPText>
                  {rsvpCount} {rsvpCount === 1 ? 'RSVP' : 'RSVPs'}
                </S.RSVPText>
              </S.RSVPCount>
              <S.GuestCount>
                {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'} total
              </S.GuestCount>
            </S.RSVPSection>
          )}

          {event.tags && event.tags.length > 0 && (
            <S.TagsSection>
              {event.tags.map((tag) => (
                <S.Tag key={tag}>{tag}</S.Tag>
              ))}
            </S.TagsSection>
          )}
        </S.CardContent>
      </S.Card>
    </S.CardLink>
  );
}

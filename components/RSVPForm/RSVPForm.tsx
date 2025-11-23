'use client';

import { useState } from 'react';
import * as S from './RSVPForm.styles';

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
    <S.Container>
      <S.Title>RSVP to {eventTitle}</S.Title>

      <S.Form onSubmit={handleSubmit}>
        <S.FormField>
          <S.Label htmlFor="name">Your Name / Group Name</S.Label>
          <S.TextInput
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., John & Sarah, The Smiths"
            disabled={isSubmitting}
          />
        </S.FormField>

        <S.FormField>
          <S.Label htmlFor="partySize">Party Size</S.Label>
          <S.PartySizeControls>
            <S.CounterButton
              onClick={() => setPartySize(Math.max(1, partySize - 1))}
              disabled={isSubmitting || partySize <= 1}
            >
              -
            </S.CounterButton>
            <S.NumberInput
              id="partySize"
              value={partySize}
              onChange={(e) => setPartySize(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
              min="1"
              max="20"
              disabled={isSubmitting}
            />
            <S.CounterButton
              onClick={() => setPartySize(Math.min(20, partySize + 1))}
              disabled={isSubmitting || partySize >= 20}
            >
              +
            </S.CounterButton>
            <S.PartySizeLabel>
              {partySize === 1 ? 'person' : 'people'}
            </S.PartySizeLabel>
          </S.PartySizeControls>
        </S.FormField>

        {message && <S.Message type={message.type}>{message.text}</S.Message>}

        <S.SubmitButton disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
        </S.SubmitButton>
      </S.Form>

      <S.FooterNote>
        Note: This is a static site. RSVPs will need to be manually added to the events.json file by the site administrator.
      </S.FooterNote>
    </S.Container>
  );
}

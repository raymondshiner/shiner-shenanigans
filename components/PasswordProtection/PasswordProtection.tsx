'use client';

import { verifyPassword } from '@/lib/auth';
import { usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';
import * as S from './PasswordProtection.styles';

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
      <S.Container>
        <S.Card>
          <S.Title>Shiner Shenanigans</S.Title>
          <S.Subtitle>Enter the password to access this site</S.Subtitle>
          <S.Form onSubmit={handleSubmit}>
            <S.InputGroup>
              <S.Label htmlFor="password">Password</S.Label>
              <S.PasswordInput
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.InputGroup>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.SubmitButton disabled={isPending} isPending={isPending} />
          </S.Form>
          <S.Footer>
            <S.FooterText>🔒 This site is password protected</S.FooterText>
          </S.Footer>
        </S.Card>
      </S.Container>
    );
  }

  return <>{children}</>;
}

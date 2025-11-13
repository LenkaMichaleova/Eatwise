import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const LayoutStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
});

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutStyled>
      <Header />
      <Container component="main" sx={{ flex: 1 }}>
        {children}
      </Container>
      <Footer />
    </LayoutStyled>
  );
}

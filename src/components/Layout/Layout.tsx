import { Container } from '@mui/material';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LayoutStyled } from './LayoutStyles';

interface LayoutProps {
  children: ReactNode;
}

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

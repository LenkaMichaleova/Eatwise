import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header />

      <Box component="main" flex={1}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

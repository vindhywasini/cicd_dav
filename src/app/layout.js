// app/layout.js or layout.tsx
import * as React from 'react';
import '@/styles/global.css';
import { UserProvider } from '@/contexts/auth/user-context';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const metadata = {
  title: 'My App',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}



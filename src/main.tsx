import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Toaster } from '@/components/ui/sonner.tsx';
import router from '@/router';
import { AuthProvider } from './contexts/auth-context/auth-provider.tsx';
import { ThemeProvider } from './contexts/theme-context/theme-provider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);

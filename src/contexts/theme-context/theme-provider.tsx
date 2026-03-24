import { type PropsWithChildren, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storage-keys.ts';
import { THEME } from './constants.ts';
import { ThemeContext } from './context.ts';
import { isTheme } from './is-theme.ts';
import type { Theme } from './types.ts';

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.theme);

    return isTheme(stored) ? stored : THEME.system;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(THEME.light, THEME.dark);

    if (theme !== THEME.system) {
      root.classList.add(theme);
      return;
    }

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQueryList.matches ? THEME.dark : THEME.light;
    const handlePrefersColorScheme = (event: MediaQueryListEvent) => {
      const newSystemTheme = event.matches ? THEME.dark : THEME.light;

      root.classList.remove(THEME.light, THEME.dark);
      root.classList.add(newSystemTheme);
    };

    root.classList.add(systemTheme);

    mediaQueryList.addEventListener('change', handlePrefersColorScheme);

    return () => {
      mediaQueryList.removeEventListener('change', handlePrefersColorScheme);
    };
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(STORAGE_KEYS.theme, newTheme);
    setThemeState(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

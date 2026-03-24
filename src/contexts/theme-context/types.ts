import { THEME } from '@/contexts/theme-context/constants.ts';

type ThemeType = typeof THEME;
export type Theme = ThemeType[keyof ThemeType];

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

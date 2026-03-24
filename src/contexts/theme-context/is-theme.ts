import type { Theme } from '@/contexts/theme-context/types.ts';
import { THEME } from '@/contexts/theme-context/constants.ts';

const THEMES: Array<string> = Object.values(THEME);

export function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && THEMES.includes(value);
}

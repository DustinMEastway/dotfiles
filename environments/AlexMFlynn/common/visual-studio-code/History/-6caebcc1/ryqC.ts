/**
 * Theme values used for component styling.
 *
 * @note @see ThemeWrapper adds CSS variables for each property on @see Theme.
 */
export interface Theme {
  accent: string;
  accentContrast: string;
  background: string;
  color: string;
  error: string;
  errorContrast: string;
  focusColor: string;
  isDark: boolean;
  link: string;
  primary: string;
  primaryContrast: string;
  success: string;
  successContrast: string;
  warn: string;
  warnContrast: string;
}

export const lightTheme: Theme = {
  accent: '#744384',
  accentContrast: '#FFFFFF',
  background: '#FFFFFF',
  color: '#333333',
  error: '#B60000',
  errorContrast: '#FFFFFF',
  focusColor: '#2522CA',
  isDark: false,
  link: '#390AA8',
  primary: '#0C6434',
  primaryContrast: '#FFFFFF',
  success: '#00A000',
  successContrast: '#FFFFFF',
  warn: '#755400',
  warnContrast: '#FFFFFF'
};

export const darkTheme: Theme = {
  accent: '#2FF3E0',
  accentContrast: '#000000',
  background: '#333333',
  color: '#EEEEEE',
  error: '#ff5e5e',
  errorContrast: '#000000',
  focusColor: '#00BBD4',
  isDark: true,
  link: '#2FC687',
  primary: '#FC59B8',
  primaryContrast: '#000000',
  success: '#05C223',
  successContrast: '#000000',
  warn: '#FFDD88',
  warnContrast: '#000000'
};

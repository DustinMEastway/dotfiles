export interface Theme {
  accent: string;
  accentContrast: string;
  background: string;
  color: string;
  error: string;
  errorContrast: string;
  focusColor: string;
  isDark: boolean;
  primary: string;
  primaryContrast: string;
  warn: string;
  warnContrast: string;
}

export const lightTheme: Theme = {
  accent: '#744384',
  accentContrast: '#FFFFFF',
  background: '#FFFFFF',
  color: '#333333',
  error: '#f44336',
  errorContrast: '#008b8b',
  focusColor: '#2522CA',
  isDark: false,
  primary: '#0C6434',
  primaryContrast: '#FFFFFF',
  warn: '#f44336',
  warnContrast: '#FFFFFF'
};

export const darkTheme: Theme = {
  accent: '#2FF3E0',
  accentContrast: '#000000',
  background: '#333333',
  color: '#EEEEEE',
  error: '#f44336',
  errorContrast: '#008b8b',
  focusColor: '#00BBD4',
  isDark: true,
  primary: '#FC59B8',
  primaryContrast: '#000000',
  warn: '#f44336',
  warnContrast: '#FFFFFF'
};

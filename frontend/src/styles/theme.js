import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#F8F9FA',
    surface: '#FFFFFF',
    error: '#FF6B6B',
    success: '#51CF66',
    warning: '#FFD93D',
    info: '#339AF0',
  },
};

export const colors = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  tertiary: '#95E1D3',
  background: '#F8F9FA',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#808080',
  lightGray: '#E0E0E0',
  darkGray: '#404040',
  success: '#51CF66',
  warning: '#FFD93D',
  error: '#FF6B6B',
  info: '#339AF0',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
};

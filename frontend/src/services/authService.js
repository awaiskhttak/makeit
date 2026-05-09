import apiClient from './api';

export const authService = {
  signup: (email, password, firstName, lastName) =>
    apiClient.post('/auth/signup', {
      email,
      password,
      firstName,
      lastName,
    }),

  login: (email, password) =>
    apiClient.post('/auth/login', {
      email,
      password,
    }),

  logout: () =>
    apiClient.post('/auth/logout'),

  forgotPassword: (email) =>
    apiClient.post('/auth/forgot-password', { email }),

  resetPassword: (token, newPassword) =>
    apiClient.post(`/auth/reset-password/${token}`, {
      newPassword,
    }),

  refreshToken: () =>
    apiClient.post('/auth/refresh-token'),
};

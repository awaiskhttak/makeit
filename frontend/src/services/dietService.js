import apiClient from './api';

export const dietService = {
  searchFoods: (query, limit = 20) =>
    apiClient.get('/diet/foods', {
      params: { search: query, limit },
    }),

  logMeal: (mealType, date, foods) =>
    apiClient.post('/diet/meals', {
      mealType,
      date,
      foods,
    }),

  getDailySummary: (date) =>
    apiClient.get('/diet/summary', {
      params: { date },
    }),

  getMealHistory: () =>
    apiClient.get('/diet/history'),
};

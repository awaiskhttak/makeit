import apiClient from './api';

export const workoutService = {
  getLibrary: (category, difficulty) =>
    apiClient.get('/workouts/library', {
      params: { category, difficulty },
    }),

  getHistory: () =>
    apiClient.get('/workouts/history'),

  startWorkout: (workoutId) =>
    apiClient.post('/workouts/start', { workoutId }),

  logExercise: (sessionId, exerciseId, completedSets) =>
    apiClient.post('/workouts/log-exercise', {
      sessionId,
      exerciseId,
      completedSets,
    }),

  completeWorkout: (sessionId, caloriesBurned, duration) =>
    apiClient.post('/workouts/complete', {
      sessionId,
      caloriesBurned,
      duration,
    }),
};

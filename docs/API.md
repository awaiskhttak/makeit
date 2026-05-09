# FitnessPro API Documentation

## Base URL
```
http://localhost:5000/api/v1
```

## Authentication
All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer {token}
```

## API Endpoints

### Authentication Endpoints

#### 1. User Registration
```
POST /auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "age": 25,
  "gender": "male"
}

Response: 201 Created
{
  "success": true,
  "message": "User created successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John"
  }
}
```

#### 2. User Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response: 200 OK
{
  "success": true,
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### 3. Logout
```
POST /auth/logout
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "message": "Logged out successfully"
}
```

### User Profile Endpoints

#### 1. Get User Profile
```
GET /users/profile
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "age": 25,
    "weight": 75,
    "height": 180,
    "fitnessGoal": "weight_loss",
    "profileImage": "image_url",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

#### 2. Update User Profile
```
PUT /users/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "weight": 72,
  "height": 180,
  "fitnessGoal": "muscle_gain"
}

Response: 200 OK
{
  "success": true,
  "message": "Profile updated successfully",
  "user": { ... }
}
```

#### 3. Get User Stats
```
GET /users/stats
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "stats": {
    "totalWorkouts": 45,
    "totalCaloriesBurned": 15000,
    "currentStreak": 12,
    "personalRecords": [
      {
        "exercise": "Bench Press",
        "weight": 100,
        "date": "2024-01-10"
      }
    ]
  }
}
```

### Workout Endpoints

#### 1. Get Workout Library
```
GET /workouts/library?category=chest&difficulty=intermediate
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "workouts": [
    {
      "id": "workout_id",
      "name": "Chest Workout",
      "category": "chest",
      "difficulty": "intermediate",
      "duration": 45,
      "videoUrl": "video_url",
      "exercises": [
        {
          "id": "exercise_id",
          "name": "Bench Press",
          "sets": 4,
          "reps": 8,
          "weight": 80
        }
      ]
    }
  ],
  "total": 25
}
```

#### 2. Start Workout
```
POST /workouts/start
Authorization: Bearer {token}
Content-Type: application/json

{
  "workoutId": "workout_id"
}

Response: 201 Created
{
  "success": true,
  "sessionId": "session_id",
  "startTime": "2024-01-15T10:00:00Z"
}
```

#### 3. Log Exercise
```
POST /workouts/log-exercise
Authorization: Bearer {token}
Content-Type: application/json

{
  "sessionId": "session_id",
  "exerciseId": "exercise_id",
  "completedSets": [
    {
      "setNumber": 1,
      "reps": 8,
      "weight": 80,
      "duration": 120
    }
  ]
}

Response: 200 OK
{
  "success": true,
  "message": "Exercise logged successfully"
}
```

#### 4. Complete Workout
```
POST /workouts/complete
Authorization: Bearer {token}
Content-Type: application/json

{
  "sessionId": "session_id",
  "caloriesBurned": 350,
  "duration": 45
}

Response: 200 OK
{
  "success": true,
  "message": "Workout completed",
  "summary": {
    "duration": 45,
    "caloriesBurned": 350,
    "exercisesCompleted": 8
  }
}
```

### Diet Tracking Endpoints

#### 1. Get Food Database
```
GET /diet/foods?search=chicken&limit=20
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "foods": [
    {
      "id": "food_id",
      "name": "Chicken Breast",
      "calories": 165,
      "protein": 31,
      "carbs": 0,
      "fat": 3.6,
      "servingSize": "100g"
    }
  ]
}
```

#### 2. Log Meal
```
POST /diet/meals
Authorization: Bearer {token}
Content-Type: application/json

{
  "mealType": "lunch",
  "date": "2024-01-15",
  "foods": [
    {
      "foodId": "food_id",
      "quantity": 150,
      "unit": "grams"
    }
  ]
}

Response: 201 Created
{
  "success": true,
  "meal": {
    "id": "meal_id",
    "totalCalories": 300,
    "totalProtein": 45,
    "totalCarbs": 10,
    "totalFat": 8
  }
}
```

#### 3. Get Daily Nutrition Summary
```
GET /diet/summary?date=2024-01-15
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "summary": {
    "date": "2024-01-15",
    "totalCalories": 2100,
    "calorieGoal": 2500,
    "macros": {
      "protein": 150,
      "carbs": 250,
      "fat": 70
    },
    "meals": [ ... ]
  }
}
```

### Wearable Integration Endpoints

#### 1. Connect Wearable Device
```
POST /wearables/connect
Authorization: Bearer {token}
Content-Type: application/json

{
  "deviceType": "apple_watch",
  "authToken": "device_auth_token"
}

Response: 201 Created
{
  "success": true,
  "message": "Device connected successfully"
}
```

#### 2. Sync Wearable Data
```
POST /wearables/sync
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "syncedData": {
    "steps": 8500,
    "calories": 450,
    "heartRate": 72,
    "distance": 6.2
  }
}
```

### Community Endpoints

#### 1. Get Challenges
```
GET /community/challenges?category=weight_loss
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "challenges": [
    {
      "id": "challenge_id",
      "name": "30 Day Fitness Challenge",
      "description": "Complete 30 workouts in 30 days",
      "participants": 1250,
      "reward": "Badge + Premium Access",
      "endDate": "2024-02-15T23:59:59Z"
    }
  ]
}
```

#### 2. Join Challenge
```
POST /community/challenges/:id/join
Authorization: Bearer {token}

Response: 201 Created
{
  "success": true,
  "message": "Joined challenge successfully"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Invalid input data",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Server Error
```json
{
  "success": false,
  "message": "Internal server error",
  "errorId": "error_tracking_id"
}
```

## Rate Limiting

- **Default**: 100 requests per 15 minutes
- **Headers**: 
  - `X-RateLimit-Limit`: Total allowed requests
  - `X-RateLimit-Remaining`: Remaining requests
  - `X-RateLimit-Reset`: Unix timestamp of reset

## Pagination

Endpoints returning lists support pagination:
```
GET /endpoint?page=2&limit=20

Response:
{
  "success": true,
  "data": [ ... ],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

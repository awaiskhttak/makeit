# FitnessPro Database Schema

## MongoDB Collections

### 1. Users Collection

```javascript
{
  _id: ObjectId,
  email: String (unique, required),
  password: String (hashed, required),
  firstName: String (required),
  lastName: String (required),
  profileImage: String,
  age: Number,
  gender: String (enum: ['male', 'female', 'other']),
  weight: Number (kg),
  height: Number (cm),
  fitnessGoal: String (enum: ['weight_loss', 'muscle_gain', 'cardio', 'flexibility']),
  goalTarget: Number,
  goalDeadline: Date,
  activityLevel: String (enum: ['sedentary', 'light', 'moderate', 'active', 'veryActive']),
  dailyCalorieTarget: Number,
  preferences: {
    notifications: Boolean,
    notificationFrequency: String,
    theme: String (enum: ['light', 'dark']),
    language: String
  },
  connectedWearables: [{
    deviceType: String,
    deviceId: String,
    lastSyncDate: Date
  }],
  premiumStatus: {
    isPremium: Boolean,
    subscriptionType: String,
    startDate: Date,
    endDate: Date,
    autoRenew: Boolean
  },
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ createdAt: -1 })
```

### 2. Workouts Collection

```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String,
  category: String (enum: ['chest', 'back', 'shoulders', 'arms', 'legs', 'cardio', 'core', 'full_body']),
  difficulty: String (enum: ['beginner', 'intermediate', 'advanced']),
  duration: Number (minutes),
  videoUrl: String,
  thumbnailUrl: String,
  exercises: [{
    id: ObjectId,
    name: String,
    description: String,
    sets: Number,
    reps: Number,
    weight: Number,
    duration: Number,
    videoUrl: String,
    instructions: [String],
    muscleGroups: [String]
  }],
  estimatedCaloriesBurned: Number,
  equipmentNeeded: [String],
  createdBy: ObjectId (ref: 'Users'),
  isPublic: Boolean,
  rating: Number,
  ratingCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.workouts.createIndex({ category: 1, difficulty: 1 })
db.workouts.createIndex({ createdAt: -1 })
db.workouts.createIndex({ rating: -1 })
```

### 3. Workout Sessions Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users', required),
  workoutId: ObjectId (ref: 'Workouts'),
  workoutName: String,
  startTime: Date (required),
  endTime: Date,
  duration: Number (minutes),
  caloriesBurned: Number,
  exerciseLog: [{
    exerciseId: ObjectId,
    exerciseName: String,
    plannedSets: Number,
    completedSets: [{
      setNumber: Number,
      reps: Number,
      weight: Number,
      duration: Number,
      timestamp: Date
    }],
    notes: String
  }],
  averageHeartRate: Number,
  maxHeartRate: Number,
  notes: String,
  mood: String (enum: ['great', 'good', 'okay', 'bad']),
  status: String (enum: ['in_progress', 'completed', 'abandoned']),
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.workoutSessions.createIndex({ userId: 1, startTime: -1 })
db.workoutSessions.createIndex({ createdAt: -1 })
```

### 4. Foods Collection

```javascript
{
  _id: ObjectId,
  name: String (required, unique),
  servingSize: Number,
  servingUnit: String (enum: ['g', 'ml', 'oz', 'cup', 'tbsp']),
  calories: Number (required),
  protein: Number (grams),
  carbs: Number (grams),
  fat: Number (grams),
  fiber: Number (grams),
  sugar: Number (grams),
  sodium: Number (mg),
  category: String (enum: ['fruits', 'vegetables', 'proteins', 'grains', 'dairy', 'other']),
  imageUrl: String,
  barcode: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.foods.createIndex({ name: 1 })
db.foods.createIndex({ category: 1 })
db.foods.createIndex({ barcode: 1 }, { sparse: true })
```

### 5. Meals Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users', required),
  mealType: String (enum: ['breakfast', 'lunch', 'dinner', 'snack'], required),
  date: Date (required),
  foods: [{
    foodId: ObjectId (ref: 'Foods'),
    quantity: Number,
    unit: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  }],
  totalCalories: Number,
  totalProtein: Number,
  totalCarbs: Number,
  totalFat: Number,
  totalFiber: Number,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.meals.createIndex({ userId: 1, date: -1 })
db.meals.createIndex({ userId: 1, mealType: 1, date: -1 })
```

### 6. Progress Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users', required),
  date: Date (required),
  weight: Number,
  bodyMeasurements: {
    chest: Number,
    waist: Number,
    hips: Number,
    thigh: Number,
    arm: Number
  },
  bodyFatPercentage: Number,
  muscleMass: Number,
  waterPercentage: Number,
  photo: String,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.progress.createIndex({ userId: 1, date: -1 })
```

### 7. Challenges Collection

```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String,
  category: String (enum: ['weight_loss', 'muscle_gain', 'cardio', 'steps', 'meditation']),
  startDate: Date (required),
  endDate: Date (required),
  duration: Number (days),
  target: Number,
  reward: String,
  imageUrl: String,
  createdBy: ObjectId (ref: 'Users'),
  participants: [ObjectId] (ref: 'Users'),
  leaderboard: [{
    userId: ObjectId,
    rank: Number,
    progress: Number,
    joinedDate: Date
  }],
  status: String (enum: ['upcoming', 'active', 'completed']),
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.challenges.createIndex({ startDate: 1, endDate: 1 })
db.challenges.createIndex({ status: 1 })
db.challenges.createIndex({ participants: 1 })
```

### 8. User Progress in Challenges Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users', required),
  challengeId: ObjectId (ref: 'Challenges', required),
  joinedDate: Date (required),
  progress: Number,
  currentRank: Number,
  badges: [String],
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.userChallengeProgress.createIndex({ userId: 1, challengeId: 1 }, { unique: true })
db.userChallengeProgress.createIndex({ challengeId: 1, currentRank: 1 })
```

### 9. Notifications Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users', required),
  type: String (enum: ['reminder', 'achievement', 'challenge', 'social', 'promotion']),
  title: String,
  message: String,
  action: {
    type: String,
    target: String
  },
  isRead: Boolean (default: false),
  sendDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.notifications.createIndex({ userId: 1, createdAt: -1 })
db.notifications.createIndex({ userId: 1, isRead: 1 })
```

## Relationships

```
Users (1) ─────── (Many) WorkoutSessions
Users (1) ─────── (Many) Meals
Users (1) ─────── (Many) Progress
Users (1) ─────── (Many) Notifications

Workouts (1) ─────── (Many) WorkoutSessions
Foods (1) ─────── (Many) Meals

Challenges (1) ─────── (Many) UserChallengeProgress
Users (1) ─────── (Many) UserChallengeProgress
```

## Database Optimization

1. **Indexing Strategy**:
   - Index frequently queried fields (userId, date, status)
   - Compound indexes for multi-field queries
   - Text indexes for search functionality

2. **Data Archival**:
   - Archive old workout sessions quarterly
   - Implement TTL indexes for temporary data

3. **Query Optimization**:
   - Use aggregation pipeline for complex queries
   - Cache frequently accessed data
   - Denormalize data where appropriate

4. **Backup Strategy**:
   - Daily automated backups
   - Point-in-time recovery capability
   - Geo-redundant backups

## Migration Scripts

### Initial Setup
```bash
# Create collections and indexes
node scripts/migrations/001_initial_schema.js

# Seed initial data (foods, exercises)
node scripts/seed/foods.js
node scripts/seed/exercises.js
```

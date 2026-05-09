# FitnessPro - Project Structure Documentation

## Directory Organization

```
makeit/
├── frontend/                    # React Native Frontend
│   ├── src/
│   │   ├── screens/             # Screen components
│   │   │   ├── AuthScreens/
│   │   │   │   ├── LoginScreen.js
│   │   │   │   ├── SignupScreen.js
│   │   │   │   └── ForgotPasswordScreen.js
│   │   │   ├── HomeScreen.js
│   │   │   ├── WorkoutScreen.js
│   │   │   ├── DietTrackerScreen.js
│   │   │   ├── ProfileScreen.js
│   │   │   ├── CommunityScreen.js
│   │   │   └── SettingsScreen.js
│   │   ├── components/          # Reusable components
│   │   │   ├── Button.js
│   │   │   ├── Card.js
│   │   │   ├── Loading.js
│   │   │   ├── Modal.js
│   │   │   ├── WorkoutCard.js
│   │   │   ├── MealCard.js
│   │   │   └── ProgressChart.js
│   │   ├── navigation/          # Navigation config
│   │   │   ├── AppNavigator.js
│   │   │   ├── AuthNavigator.js
│   │   │   └── TabNavigator.js
│   │   ├── redux/               # State management
│   │   │   ├── actions/
│   │   │   │   ├── authActions.js
│   │   │   │   ├── workoutActions.js
│   │   │   │   └── dietActions.js
│   │   │   ├── reducers/
│   │   │   │   ├── authReducer.js
│   │   │   │   ├── workoutReducer.js
│   │   │   │   └── dietReducer.js
│   │   │   ├── store.js
│   │   │   └── types.js
│   │   ├── services/            # API services
│   │   │   ├── authService.js
│   │   │   ├── workoutService.js
│   │   │   ├── dietService.js
│   │   │   ├── userService.js
│   │   │   └── api.js
│   │   ├── utils/               # Utility functions
│   │   │   ├── validators.js
│   │   │   ├── helpers.js
│   │   │   ├── constants.js
│   │   │   └── colors.js
│   │   ├── hooks/               # Custom hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useWorkout.js
│   │   │   └── useDiet.js
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── fonts/
│   │   ├── styles/              # Global styles
│   │   │   ├── theme.js
│   │   │   └── typography.js
│   │   ├── App.js
│   │   └── index.js
│   ├── app.json
│   ├── package.json
│   └── .env.example
│
├── backend/                     # Node.js Express Backend
│   ├── src/
│   │   ├── routes/              # API routes
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── workoutRoutes.js
│   │   │   ├── dietRoutes.js
│   │   │   ├── communityRoutes.js
│   │   │   └── wearableRoutes.js
│   │   ├── models/              # MongoDB schemas
│   │   │   ├── User.js
│   │   │   ├── Workout.js
│   │   │   ├── Meal.js
│   │   │   ├── Progress.js
│   │   │   └── Community.js
│   │   ├── controllers/         # Business logic
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── workoutController.js
│   │   │   ├── dietController.js
│   │   │   └── communityController.js
│   │   ├── middleware/          # Custom middleware
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   ├── validation.js
│   │   │   └── logger.js
│   │   ├── config/              # Configuration
│   │   │   ├── database.js
│   │   │   ├── firebase.js
│   │   │   └── constants.js
│   │   ├── utils/               # Utility functions
│   │   │   ├── emailService.js
│   │   │   ├── notificationService.js
│   │   │   └── validators.js
│   │   ├── services/            # External services
│   │   │   ├── wearableService.js
│   │   │   ├── paymentService.js
│   │   │   └── analyticsService.js
│   │   └── server.js
│   ├── package.json
│   ├── .env.example
│   └── nodemon.json
│
├── docs/                        # Documentation
│   ├── API.md                   # API endpoints documentation
│   ├── DATABASE.md              # Database schema
│   ├── DEPLOYMENT.md            # Deployment guide
│   ├── AUTHENTICATION.md        # Auth flow
│   ├── FEATURES.md              # Feature specifications
│   └── PROJECT_STRUCTURE.md     # This file
│
├── tests/                       # Test files
│   ├── frontend/
│   │   ├── __tests__/
│   │   └── fixtures/
│   └── backend/
│       ├── __tests__/
│       └── fixtures/
│
├── .github/                     # GitHub specific
│   ├── workflows/
│   │   ├── ci.yml              # CI/CD pipeline
│   │   └── deploy.yml
│   └── ISSUE_TEMPLATE/
│
├── Fitness_App_Plan.pdf         # Original plan document
├── README.md
├── package.json
├── .env.example
├── .gitignore
└── LICENSE
```

## File Descriptions

### Frontend Structure

**Screens**: Individual app pages/flows
- Authentication flows (login, signup, password reset)
- Main dashboard/home screen
- Workout tracking and execution
- Diet/nutrition tracking
- User profile and settings
- Community and challenges

**Components**: Reusable UI components
- Custom buttons, cards, modals
- Workout and meal display cards
- Charts and progress visualization
- Loading states

**Redux**: State management
- Actions: Dispatched events
- Reducers: State transformation logic
- Store: Central state container
- Types: Action type constants

**Services**: API communication
- API client setup (axios with interceptors)
- Endpoint-specific service files
- Request/response handling

**Utils**: Helper functions and constants
- Input validation
- Date/time formatting
- Color and theme constants
- Conversion utilities (units, calories, etc.)

### Backend Structure

**Routes**: API endpoint definitions
- HTTP method and path definitions
- Route parameter specifications
- Middleware chaining

**Models**: MongoDB document schemas
- Field definitions and types
- Validation rules
- Relationships and references
- Indexes for performance

**Controllers**: Business logic
- Request handling
- Data processing
- Response generation
- Error handling

**Middleware**: Request processing
- Authentication/Authorization
- Input validation
- Error handling
- Logging and monitoring

**Config**: Application configuration
- Database connection
- Firebase initialization
- Environment variables
- Constants and settings

**Services**: External integrations
- Wearable device APIs (Apple Watch, Fitbit)
- Payment processing
- Email notifications
- Analytics tracking

## Data Flow

```
User Action
    ↓
Screen Component
    ↓
Dispatch Redux Action
    ↓
Call Service/API
    ↓
Backend Route Handler
    ↓
Controller Logic
    ↓
Database Query
    ↓
Response Back to Frontend
    ↓
Update Redux Store
    ↓
Component Re-render
```

## Development Phases

### Phase 1: Setup & Planning (Week 1-2)
- [ ] Repository initialization
- [ ] Project structure creation
- [ ] Development environment setup
- [ ] Team onboarding

### Phase 2: Design (Week 3-5)
- [ ] UI/UX mockups
- [ ] Database schema design
- [ ] API specifications
- [ ] Component library

### Phase 3: Core Development (Week 6-12)
- [ ] Authentication system
- [ ] User profile management
- [ ] Workout tracking
- [ ] Diet tracking
- [ ] Wearable integration
- [ ] Community features

### Phase 4: Testing & Optimization (Week 13-14)
- [ ] Unit testing
- [ ] Integration testing
- [ ] Performance optimization
- [ ] Beta testing

### Phase 5: Launch (Week 15)
- [ ] App Store deployment
- [ ] Google Play deployment
- [ ] Marketing launch
- [ ] Post-launch monitoring

## Key Technologies

- **Frontend**: React Native, Redux, React Navigation, Firebase
- **Backend**: Node.js, Express.js, MongoDB, Firebase
- **Database**: MongoDB Atlas
- **Cloud**: AWS/Google Cloud
- **Authentication**: Firebase Auth, OAuth 2.0
- **APIs**: RESTful, WebSocket for real-time

## Notes

- Keep components small and reusable
- Follow consistent naming conventions
- Document complex logic
- Maintain separation of concerns
- Write tests alongside features
- Regular code reviews and refactoring

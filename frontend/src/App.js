import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { initializeFirebase } from './src/services/firebaseService';
import { theme } from './src/styles/theme';

export default function App() {
  useEffect(() => {
    // Initialize Firebase
    initializeFirebase();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

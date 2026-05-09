import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Welcome to FitnessPro
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
        Track your fitness goals and achieve your dreams!
      </Text>
      <Button mode="contained" onPress={() => {}}>
        Get Started
      </Button>
    </View>
  );
}

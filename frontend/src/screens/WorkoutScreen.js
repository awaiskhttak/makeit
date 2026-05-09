import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function WorkoutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Workout Library
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
        Browse and start your fitness journey
      </Text>
      <Button mode="contained" onPress={() => {}}>
        Start Workout
      </Button>
    </View>
  );
}

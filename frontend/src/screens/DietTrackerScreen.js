import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function DietTrackerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Diet Tracker
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
        Track your meals and calories
      </Text>
      <Button mode="contained" onPress={() => {}}>
        Log Meal
      </Button>
    </View>
  );
}

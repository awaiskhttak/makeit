import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Settings
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
        Configure your app preferences
      </Text>
      <Button mode="contained" onPress={() => {}}>
        Back
      </Button>
    </View>
  );
}

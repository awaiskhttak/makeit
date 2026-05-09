import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Your Profile
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
        View and edit your profile information
      </Text>
      <Button mode="contained" onPress={() => {}}>
        Edit Profile
      </Button>
    </View>
  );
}

import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function CommunityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Community
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
        Join challenges and connect with others
      </Text>
      <Button mode="contained" onPress={() => {}}>
        View Challenges
      </Button>
    </View>
  );
}

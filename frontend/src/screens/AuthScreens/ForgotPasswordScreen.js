import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>
        Reset Password
      </Text>
      <Text style={{ fontSize: 14, color: '#666', marginBottom: 20, textAlign: 'center' }}>
        Enter your email address to receive a password reset link
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ marginBottom: 30 }}
      />
      <Button mode="contained" onPress={() => {}}>
        Send Reset Link
      </Button>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        <Text style={{ color: '#FF6B6B', fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Login')}
        >
          Back to Login
        </Text>
      </Text>
    </View>
  );
}

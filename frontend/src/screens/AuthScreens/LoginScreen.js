import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>
        Welcome Back
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 30 }}
      />
      <Button mode="contained" onPress={() => {}}>
        Login
      </Button>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        Don't have an account?{' '}
        <Text style={{ color: '#FF6B6B', fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Signup')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

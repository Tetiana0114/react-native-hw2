import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RegistrationScreen  from './RegistrationScreen';
import LoginScreen from './LoginScreen';

const AuthStack = createNativeStackNavigator();

export const AuthScreen = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen} />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
};
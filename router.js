import React from 'react';
import { AuthScreen } from './Screens/auth/AuthScreen';
import { Home }  from './Screens/mainScreen/Home';

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthScreen />
    );
  }
    return (
      <Home />
  );
};
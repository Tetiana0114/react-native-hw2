import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import React, { useCallback, useEffect, useState } from 'react';
import {} from "react-native";
import { StatusBar } from 'expo-status-bar';
// import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';


import RegistrationScreen  from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SplashScreen.preventAutoHideAsync();
const AuthStack = createNativeStackNavigator();


export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);
  
// useEffect(() => {
//     async function prepare() {
//       try {
//       await Font.loadAsync({
//       "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
//       "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
//       "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'), 
//       });
//         await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }
//     prepare();
// }, []);

// const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//     await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }
  
  return (
<NavigationContainer>
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
 <StatusBar style="auto" />
</NavigationContainer>
  );
}
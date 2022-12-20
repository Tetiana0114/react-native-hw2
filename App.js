import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect, useState } from 'react';
import { } from "react-native";
import { StatusBar } from 'expo-status-bar';
// import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

import RegistrationScreen  from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreatePostsScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';

// SplashScreen.preventAutoHideAsync();
const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
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
  }
  return (
    <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen} />
        <MainTab.Screen name="Create" component={CreatePostsScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

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
  
const routing = useRoute({});
// const routing = useRoute(null);
  
  return (
    <NavigationContainer>
      {routing}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
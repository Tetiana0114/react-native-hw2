import { Provider } from "react-redux";
import React, { useCallback, useEffect, useState } from 'react';
import { } from "react-native";
import { store } from './redux/store';
import Main from './src/Components/Main';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  
useEffect(() => {
    async function prepare() {
      try {
      await Font.loadAsync({
      "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
      "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
      "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'), 
      });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
}, []);

const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
    await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  
  return (
    <Provider store={store}>
    <Main />
    </Provider>
  );
}
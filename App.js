import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import RegistrationScreen  from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

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
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
<View style={styles.container}>
     <ImageBackground
      style={styles.image}
      source={require("./assets/images/bg_img.jpg")}
        >

<RegistrationScreen/>
{/* <LoginScreen /> */}
          
<StatusBar style="auto" />     
</ImageBackground>
</View >
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
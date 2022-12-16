// import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import RegistrationScreen  from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
//     "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
//   });
// };

export default function App() {
//   const [isReady, setIsReady] = useState(false);
//   if (!isReady) {
//     return (
//       <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
//     );
// }
  
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
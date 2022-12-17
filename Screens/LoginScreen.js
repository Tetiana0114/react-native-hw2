import { useState } from "react";
import {
StyleSheet,
View,
TextInput,
Text,
TouchableOpacity,
Platform,
KeyboardAvoidingView,
Keyboard,
} from 'react-native';

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
    
  const onFormSubmit = () => {
  setIsShowKeyboard(false);
  Keyboard.dismiss();
  console.log(state);
  setState(initialState);
  };
    
return (
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
<View style={styles.container}>
    <View style={styles.form}>
    <Text style={styles.formTitle}>Log In</Text>
    <View>
        <TextInput
        style={styles.input}
        textAlign={"left"}
        placeholder={"Email"}
        placeholderTextColor={"#BDBDBD"}
        onFocus={() => setIsShowKeyboard(true)}
        value={state.email}
        onChangeText={(value) =>
        setState((prev) => ({ ...prev, email: value }))
        }
        />
    </View>
    <View>
        <TextInput
        style={styles.input}
        secureTextEntry={true}
        textAlign={"left"}
        placeholder={"Password"}
        placeholderTextColor={"#BDBDBD"}
        onFocus={() => setIsShowKeyboard(true)}
        value={state.password}
        onChangeText={(value) =>
        setState((prev) => ({ ...prev, password: value }))
        }
        />
    </View>
        <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={onFormSubmit}
        >
        <Text style={styles.btnName}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Don't have an account yet? Register</Text>
</View>             
</View>
</KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
container: {
    width: 375,
    borderRadius: 25,
    backgroundColor: '#fff',
},
form: {
    marginHorizontal: 16,
    marginBottom: 45,
},
formTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
    marginTop: 92,
},
input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    color: "#212121",
},
btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    marginTop: 27,
    marginBottom: 16,
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
},
btnName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#FFFFFF",   
},
bottomText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
    },
});
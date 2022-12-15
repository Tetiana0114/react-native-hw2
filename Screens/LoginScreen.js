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
TouchableWithoutFeedback,
} from 'react-native';

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
    
  const keyboardHide = () => {
  setIsShowKeyboard(false);
  Keyboard.dismiss();
  console.log(state);
  setState(initialState);
  };
    
return (
<TouchableWithoutFeedback onPress={keyboardHide}>
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
<View style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 144 }}>
    <Text style={styles.formTitle}>Log In</Text>
    <View>
        <TextInput
        style={styles.input}
        textAlign={"center"}
        placeholder="Email"
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
        textAlign={"center"}
        placeholder="Password"
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
        onPress={keyboardHide}
        >
        <Text style={styles.btnName}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Don't have an account yet? Register</Text>
</View>
</KeyboardAvoidingView>
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
form: {
    // marginHorizontal: 16,
    width: 343,
},
formTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
},
input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    height: 50,
},
btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    marginTop: 27,
    marginBottom: 16,
    borderRadius: 100,
    height: 50,
},
btnName: {
    fontSize: 16,
    color: "#FFFFFF",   
},
bottomText: {
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
});
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
KeyboardAvoidingView,
Keyboard,
TouchableWithoutFeedback,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { MaterialIcons } from '@expo/vector-icons';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { fireStore } from "../../../firebase/config";


const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
       (async () => {
        await Location.requestForegroundPermissionsAsync();
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
    })();
  }, []);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
  const photo = await camera.takePictureAsync();
  const location = await Location.getCurrentPositionAsync();
  const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
};
setLocation(coords);
setPhoto(photo.uri);
console.log("location", coords);
console.log("photo", photo);
  };

const sendPhoto = () => {
uploadPhotoToServer();
navigation.navigate("DefaultScreen", { photo, location });
  };
  
const uploadPhotoToServer = async () => {
  const response = await fetch(photo);
  const file = await response.blob();

  const photoId = Date.now().toString();

  const data = ref(getStorage(), `postImages/${photoId}`);
  await uploadBytes(data, file);
  const processedPhoto = await getDownloadURL(data);
  console.log("processedPhoto", processedPhoto);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.pressContainer}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <Camera style={styles.camera}   ref={(ref) => {
          setCamera(ref);
        }}>
         {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 150, width: 150 }}
            />
          </View>
        )}
          <TouchableOpacity onPress={takePhoto} style={styles.snapContainer} activeOpacity={0.8}>
          <MaterialIcons name="photo-camera" size={46} color="#a9a9a9" />
          </TouchableOpacity>
    </Camera>
      <View style={styles.form}>
         <TextInput
            style={styles.input}
            textAlign={"left"}
            placeholder={"Title..."}
            placeholderTextColor={"#BDBDBD"}
            onFocus={() => setIsShowKeyboard(true)}
            />

            <TextInput
            style={styles.input}
            textAlign={"left"}
            placeholder={"Location..."}
            placeholderTextColor={"#BDBDBD"}
            onFocus={() => setIsShowKeyboard(true)}
            />
          <TouchableOpacity style={styles.uploadBtn} onPress={sendPhoto}>
          <Text style={styles.uploadBtnText}>Publish photo</Text>
        </TouchableOpacity>
      </View>
          </KeyboardAvoidingView>
      </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
pressContainer: {
  flex: 1,
},
container: {
  flex: 1,
},
camera: {
  marginHorizontal: 16,
  height: 240,
  marginTop: 32,
  alignItems: "center",
},
takePhotoContainer: {
  position: "absolute",
  top: 5,
  left: 5,
  borderColor: "#fff",
  borderWidth: 1,
},
snapContainer: {
  backgroundColor: "#fff",
  marginTop: 170,
  borderWidth: 1,
  borderColor: "#fff",
  width: 60,
  height: 60,
  borderRadius: 50,
  justifyContent: "center",
  alignItems: "center",
},
uploadBtn: {
  marginHorizontal: 16,
  padding: 12,
  backgroundColor: "#FF6C00", 
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10,
  borderRadius: 100,
},  
uploadBtnText: {
  fontSize: 20,
  color: "#fff",
},
form: {
  marginTop: 10,
  marginHorizontal: 16,
},
input: {
  fontSize: 16,
  borderBottomWidth: 2,
  borderBottomColor: "#E8E8E8",
  padding: 10,
  marginBottom: 10,
},
});

export default CreatePostsScreen;
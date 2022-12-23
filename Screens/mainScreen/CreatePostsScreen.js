import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from '@expo/vector-icons'; 


const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
	const [permission, requestPermission] = Camera.useCameraPermissions();

    const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

  	if (!permission) {
		return <View />;
	}

	if (!permission.granted) {
		return (
			<View style={styles.permissionContainer}>
				<Text style={{ textAlign: 'center' }}>
					Please, grant permission!
				</Text>
				<Button onPress={requestPermission} title="Grant permission" />
			</View>
		);
  }
  
const sendPhoto = () => {
navigation.navigate("Posts", { photo });
};

  return (
    <View style={styles.container}>
      <Camera style={styles.camera}  ref={setCamera}>
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
        <View>
          <TouchableOpacity style={styles.uploadBtn} onPress={sendPhoto}>
          <Text style={styles.uploadText}>Upload photo</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
permissionContainer: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
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
  marginHorizontal: 30,
  height: 40,
  borderWidth: 2,
  borderColor: "#a9a9a9",
  borderRadius: 10,
  marginTop: 20,
  justifyContent: "center",
  alignItems: "center",
  },  
uploadText: {
// fontFamily: "Roboto-Medium",
  fontSize: 20,
  color: "#a9a9a9",
  },
});

export default CreatePostsScreen;
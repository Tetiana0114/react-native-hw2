import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { MaterialIcons } from '@expo/vector-icons'; 


const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

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
  let location = await Location.getCurrentPositionAsync();
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
navigation.navigate("Posts", { photo });
};

  return (
    <View style={styles.container}>
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
        <View>
          <TouchableOpacity style={styles.uploadBtn} onPress={sendPhoto}>
          <Text style={styles.uploadBtnText}>Upload photo</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  marginHorizontal: 30,
  height: 40,
  borderWidth: 2,
  borderColor: "#a9a9a9",
  borderRadius: 10,
  marginTop: 20,
  justifyContent: "center",
  alignItems: "center",
  },  
uploadBtnText: {
// fontFamily: "Roboto-Medium",
  fontSize: 20,
  color: "#a9a9a9",
  },
});

export default CreatePostsScreen;
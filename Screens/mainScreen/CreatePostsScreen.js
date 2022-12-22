import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
         <TouchableOpacity onPress={() => {}} style={styles.snapContainer}>
         <Text style={styles.snap}>SNAP</Text>
      </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   camera: {
     height: 240,
     marginTop: 32,
     alignItems: "center",
  },
    snap: {
    color: "#ff0000",
  },
  snapContainer: {
    backgroundColor: "#fff",
    marginTop: 90,
    borderWidth: 1,
    borderColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;
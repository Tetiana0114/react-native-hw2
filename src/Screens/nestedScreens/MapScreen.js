import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { longitude, latitude } = route.params.location;
  return (
    <View style={styles.container}>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
        longitude,  
        latitude, 
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
        }}
      >
        <Marker
        coordinate={{ latitude, longitude }}
        title="my photo"
      />
    </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
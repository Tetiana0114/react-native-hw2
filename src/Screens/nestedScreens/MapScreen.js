import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
        latitude: 52.1277, 
        longitude: 11.6292,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
        }}
      >
        <Marker
        coordinate={{ latitude: 52.1277, longitude: 11.6292 }}
        title="travel photo"
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
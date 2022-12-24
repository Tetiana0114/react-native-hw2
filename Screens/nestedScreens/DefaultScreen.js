import React, { useState, useEffect }from "react";
import { View, StyleSheet, FlatList, Image, Button } from "react-native";

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  // console.log("route.params", route.params);
  
  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);
  // console.log("posts", posts);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 343, height: 240 }}
            />
          </View>
        )}
          />
    <Button title="go to map" onPress={() => navigation.navigate("Map")} />
    <Button title="go to Comments" onPress={() => navigation.navigate("Comments")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  list: {
    marginTop: 32,
  }
});

export default DefaultScreen;
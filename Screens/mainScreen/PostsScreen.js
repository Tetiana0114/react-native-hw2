import React, { useState, useEffect }from "react";
import { View, StyleSheet, FlatList, Image  } from "react-native";

const PostsScreen = ({ route }) => {
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

export default PostsScreen;
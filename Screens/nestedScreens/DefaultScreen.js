import React, { useState, useEffect }from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text } from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);

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

            <Text style={styles.title}>Title</Text>
            <View style={styles.postNav}> 
                <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                 <EvilIcons name="comment" size={48} color="#6495ed" /> 
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate("Map")} >
                <EvilIcons name="location" size={48} color="#FF6C00" />
                </TouchableOpacity>
            </View>

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
},
postNav: {
  marginHorizontal: 16,
  flexDirection: "row",
  marginTop: 10,
},
title: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#212121", 
}
});

export default DefaultScreen;
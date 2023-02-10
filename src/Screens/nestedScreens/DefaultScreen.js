import React, { useState, useEffect }from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { fireStore } from "../../../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const getUserPosts = async () => {
    try {
    onSnapshot(collection(fireStore, "posts"), (data) => 
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    } catch (err) {
       console.error(err);  
    }
  };
    
  useEffect(() => {
    getUserPosts();
  }, []);

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

            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.postNav}> 
                <TouchableOpacity onPress={() => navigation.navigate("Comments", { postId: item.id })}>
                 <EvilIcons name="comment" size={48} color="#6495ed" /> 
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate("Map", { location: item.location })} >
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
  },
});

export default DefaultScreen;
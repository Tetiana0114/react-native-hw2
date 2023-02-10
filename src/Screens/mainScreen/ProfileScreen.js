import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image, Text } from "react-native";
import { useSelector } from "react-redux";
import { fireStore } from "../../../firebase/config";
import {  where, query, collection, onSnapshot } from "firebase/firestore";

const ProfileScreen = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);

   useEffect(() => {
    getUserPosts();
   }, []);
  
  const getUserPosts = async () => {
    try {
      const path = query(collection(fireStore, "posts"), where("userId", "==", userId));
      await onSnapshot(path, (data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
      );
     } catch (err) {
         console.error(err);  
     }
  };
 
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={userPosts}
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
  alignItems: "center",
  },
  list: {
  marginTop: 32,
  },
  title: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#212121",
  },
});

export default ProfileScreen;
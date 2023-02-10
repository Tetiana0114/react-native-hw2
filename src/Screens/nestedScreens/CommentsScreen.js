import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { fireStore } from "../../../firebase/config";
import { doc, collection, addDoc, onSnapshot } from "firebase/firestore";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const { postId } = route.params;
  const { login } = useSelector((state) => state.auth);
  
   useEffect(() => {
    getUserComments();
   }, []);
  
  const getUserComments = async () => {
    try {
    const post = doc(fireStore, "posts", postId);  
    await onSnapshot(collection(post, "comments"), (data) => 
    setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    ); 
    } catch (err) {
    console.error(err);  
    }
  };
   
  const addComment = async () => {
     if (comment === "") {
      return;
    }
    const newComment = { comment, author: login };
    try {
      const post = doc(fireStore, "posts", postId);
      await addDoc(collection(post, "comments"), newComment);
      Keyboard.dismiss();
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.pressContainer}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setComment}
          textAlign={"left"}
          placeholder={"Write your comment here..."}
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => setIsShowKeyboard(true)}
        />
      </View>
      <TouchableOpacity onPress={addComment} style={styles.addBtn}>
        <Text style={styles.addBtnName}>Add comment</Text>
          </TouchableOpacity>
           <SafeAreaView>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.authorText}>{item.comment}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
          </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  pressContainer: {
    flex: 1,
 },
  container: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#E8E8E8",
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginBottom: 20,
    padding: 12,
    backgroundColor: "#FF6C00", 
    borderRadius: 100,
  },
  addBtnName: {
    fontSize: 20,
    color: "#fff",
  },
  commentContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#20b2aa",
    borderRadius: 100,
  },
  author: {
    color: "#FF6C00",
  },
  authorText: {
    fontSize: 18,
  }
});

export default CommentsScreen;
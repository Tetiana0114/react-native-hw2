import React, { useState } from "react";
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
} from "react-native";
import { useSelector } from "react-redux";
import { fireStore } from "../../../firebase/config";
import { doc, collection, addDoc } from "firebase/firestore";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const { login } = useSelector((state) => state.auth);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  
  const addComment = async () => {
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
    justifyContent: "center",
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#E8E8E8",
    padding: 10,
    marginHorizontal: 16,
    marginBottom: 30,
  },
  addBtn: {
    marginHorizontal: 30,
    padding: 12,
    backgroundColor: "#FF6C00", 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  addBtnName: {
    fontSize: 20,
    color: "#fff",
  }
});

export default CommentsScreen;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
// import { StyleSheet } from "react-native";
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
   <MainTab.Navigator>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen} />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen} />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
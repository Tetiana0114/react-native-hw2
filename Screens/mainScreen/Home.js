import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Fontisto name="nav-icon-grid" size={26} color={color}/>
          ),
          headerRight: () => (
            <AntDesign name="logout" size={24} color="#ff4500" style={styles.logout} />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
           <Feather name="plus-circle" size={42} color="#ff4500" />
          ),
        }}
      />
      <MainTab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome name="user" size={30} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  logout: {
  marginRight: 20,
  },
});
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { height: 75 },
      headerTitleStyle: {
        color: "#212121",
        // fontFamily: 'Roboto-Medium',
        },
    }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Fontisto name="nav-icon-grid" size={30} color={color}/>
          ),
          headerRight: () => (
            <AntDesign name="logout" size={30} color="#ff4500" style={styles.logout} />
          ),
        }}
      />
      <MainTab.Screen
        name="Create post"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
           <Feather name="plus-circle" size={48} color="#ff4500" />
          ),
        //   headerLeft: ({ focused, size, color }) => (
        //  <Ionicons name="arrow-back-circle-outline" size={30} color="#a9a9a9" style={styles.back}/>
        //   ),
        }}
      />
      <MainTab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome name="user" size={34} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  logout: {
  marginRight: 24,
  },
  // back: {
  // marginLeft: 10,
  // }
});
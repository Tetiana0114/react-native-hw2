import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultScreen from "../nestedScreens/DefaultScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator >
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreen}
         options={{
            headerShown: false,
          }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen} />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
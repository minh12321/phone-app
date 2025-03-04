import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./LoginScreen";
import Bai1 from "./bai1";
import Notifi from "./bai2";
import Bai3buoi5 from "./bai3buoi5";
import Bai4buoi6 from "./bai4buoi6";
import Bai5buoi7 from "./bai5buoi7";
import Bai5buoi7home from "./bai5buoi7home"


import { AuthContext, AuthProvider } from './bai6buoi8/AuthContext';
import Login from './bai6buoi8/LoginScreen';
import ExplorerScreen from './bai6buoi8/ExplorerScreen';
import AccountScreen from './bai6buoi8/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#FF5733", 
      tabBarInactiveTintColor: "gray", 
      tabBarStyle: { backgroundColor: "white", height: 60 }, 
      tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" }, 
    }}
  >
    <Tab.Screen
      name="Explorer"
      component={ExplorerScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="beer" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Main" component={MainApp} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="SignIn" component={Login} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default function App() {
  // return <LoginScreen />; bài 11

  // return <Bai1 />;
  // return <Notifi />;bài 2

  // return<Bai3buoi5 />;bài 3

  //return <Bai4buoi6/>;bài 4


  // return <Bai5buoi7/>;bài 55
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Đăng nhập">
  //       <Stack.Screen name="Đăng nhập" component={Bai5buoi7} />
  //       <Stack.Screen name="Trang Chủ" component={Bai5buoi7home} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  return ( //bài 6
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
    
);

}


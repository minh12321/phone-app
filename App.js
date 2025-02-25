import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import Bai1 from "./bai1";
import Notifi from "./bai2";
import Bai3buoi5 from "./bai3buoi5";
import Bai4buoi6 from "./bai4buoi6";
import Bai5buoi7 from "./bai5buoi7";
import Bai5buoi7home from "./bai5buoi7home"

const Stack = createStackNavigator();

export default function App() {
  // return <LoginScreen />;
  // return <Bai1 />;
  // return <Notifi />;
  // return<Bai3buoi5 />;
  //return <Bai4buoi6/>;
  // return <Bai5buoi7/>;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Đăng nhập">
        <Stack.Screen name="Đăng nhập" component={Bai5buoi7} />
        <Stack.Screen name="Trang Chủ" component={Bai5buoi7home} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  const styles = StyleSheet.create({
    title: { fontSize: 30, fontWeight: "bold", marginBottom: 10, textAlign: "left" },
  });

}
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    if (phoneNumber) {
      alert(`Phone number entered: ${phoneNumber}`);
      // Add navigation or API call logic here
    } else {
      alert("Please enter your phone number.");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text> </Text>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.underline} />
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.title11}>Nhập số điện thoại</Text>

      <Text style={styles.subtitle}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: phoneNumber ? "#007BFF" : "#ccc" },
        ]}
        onPress={handleContinue}
        disabled={!phoneNumber}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  title11: {
    fontSize: 30,
    fontWeight: "",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    color: "#000000",
    textAlign: "left",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
  underline: {
    width: 585800, 
    height: 2,
    backgroundColor: "#D3D3D3", 
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default LoginScreen;

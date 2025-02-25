import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/; 
    return phoneRegex.test(number);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    setIsValid(validatePhoneNumber(text));
  };

  const handleContinue = () => {
    if (!phoneNumber) {
      Alert.alert("Lỗi", "Vui lòng nhập số điện thoại.");
      return;
    }

    if (!isValid) {
      Alert.alert("Lỗi", "Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng.");
      return;
    }

    Alert.alert("Thành công", `Số điện thoại hợp lệ: ${phoneNumber}`);
    
    // Chuyển sang màn hình HomeScreen
    navigation.navigate("Trang Chủ");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <Text style={styles.title11}>Nhập số điện thoại</Text>
      <Text style={styles.subtitle}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={[styles.input, !isValid && styles.inputError]}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      {!isValid && <Text style={styles.errorText}>Số điện thoại không hợp lệ!</Text>}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isValid && phoneNumber ? "#007BFF" : "#ccc" }]}
        onPress={handleContinue}
        disabled={!phoneNumber || !isValid}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, justifyContent: "flex-start" },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 10, textAlign: "left" },
  title11: { fontSize: 30, marginBottom: 10, textAlign: "left" },
  subtitle: { fontSize: 16, color: "#000000", textAlign: "left", marginBottom: 20 },
  input: { borderBottomWidth: 1, borderBottomColor: "#ccc", fontSize: 16, marginBottom: 20, padding: 10 },
  inputError: { borderBottomColor: "red" },
  errorText: { color: "red", fontSize: 14, marginBottom: 10 },
  button: { padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
  underline: { width: "100%", height: 2, backgroundColor: "#D3D3D3", alignSelf: "center", marginBottom: 20 },
});

export default LoginScreen;

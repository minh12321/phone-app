import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "./AuthContext";

const SignInScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.forgot}>For got password?</Text>

      <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fbButton}>
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>Not yet a member? <Text style={styles.signupLink}>Sign Up</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: { width: "80%", padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  forgot: { color: "orange", marginBottom: 15 },
  button: { backgroundColor: "orange", padding: 15, borderRadius: 5, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  orText: { marginVertical: 10 },
  socialButtons: { flexDirection: "row", gap: 10 },
  googleButton: { backgroundColor: "#db4437", padding: 10, borderRadius: 5 },
  fbButton: { backgroundColor: "#3b5998", padding: 10, borderRadius: 5 },
  socialText: { color: "#fff" },
  signupText: { marginTop: 15 },
  signupLink: { color: "orange", fontWeight: "bold" }
});

export default SignInScreen;
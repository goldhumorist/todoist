import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import PrimaryBtn from "../src/components/primaryBtn";
import Input from "../src/components/input";
import TitleTextLogo from "../src/components/titleTextLogo";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscride = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Сategories");
      }
    });
    return unsubscride;
  }, []);

  const handleSignUpNavigation = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in as", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <TitleTextLogo />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          isSecureTextEntry={false}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          isSecureTextEntry={true}
        />
      </View>

      <View style={styles.btnContainer}>
        <PrimaryBtn text="Login" handleOnPress={handleLogin} isBlue={true} />
        <PrimaryBtn
          text="Create an account"
          handleOnPress={handleSignUpNavigation}
          isBlue={false}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  btnContainer: {
    width: "60%",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

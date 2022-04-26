import { StyleSheet, KeyboardAvoidingView, View, Text } from "react-native";
import React, { useState } from "react";
import TitleTextLogo from "../components/titleTextLogo";
import Input from "../components/input";
import PrimaryBtn from "../components/primaryBtn";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLoginNavigation = () => {
    navigation.replace("Login");
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered as", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <TitleTextLogo />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>We are happy to see you here !</Text>
        <Text style={styles.welcomeText}>Let's register</Text>
      </View>

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
        <PrimaryBtn text="Sign up" handleOnPress={handleSignUp} isBlue={true} />

        <PrimaryBtn
          text="Already have an account?"
          handleOnPress={handleLoginNavigation}
          isBlue={false}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

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
  welcomeContainer: {
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
});

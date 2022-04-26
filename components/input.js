import { StyleSheet, TextInput } from "react-native";
import React from "react";

const Input = ({
  placeholder,
  value,
  onChangeText,
  isSecureTextEntry,
  isBorder = false,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => {
        onChangeText(text);
      }}
      style={[styles.input, isBorder ? styles.border : ""]}
      secureTextEntry={isSecureTextEntry}
    ></TextInput>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  border: {
    width: "85%",
    borderWidth: 1,
    borderColor: "black",
  },
});

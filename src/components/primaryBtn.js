import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const PrimaryBtn = ({ text, handleOnPress, isBlue }) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={isBlue ? styles.btn : [styles.btn, styles.btnOutline]}
    >
      <Text style={isBlue ? styles.btnText : styles.btnOutlineText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782f9",
    borderWidth: 2,
  },
  btnOutlineText: {
    color: "#0782f9",
    fontWeight: "700",
    fontSize: 16,
  },
});

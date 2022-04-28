import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const SupportInfo = ({ text, onPressHandler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <Text style={styles.supportInfoText}>{text}</Text>
      <Image
        style={styles.supportInfoArrow}
        source={require("../../assets/arrow.png")}
      />
    </TouchableOpacity>
  );
};

export default SupportInfo;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  supportInfoText: {
    paddingBottom: 15,
    fontSize: 18,
  },
});

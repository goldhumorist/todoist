import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TitleTextLogo = () => {
  return (
    <View style={styles.titleContainer}>
      <Image
        style={styles.titleLogo}
        source={require("../../assets/logo.png")}
      />
      <Text style={styles.titleText}>Todoist</Text>
    </View>
  );
};

export default TitleTextLogo;

const styles = StyleSheet.create({
  titleText: {
    marginBottom: 15,
    fontSize: 23,
    fontWeight: "700",
  },
  titleLogo: {
    width: 75,
    height: 75,
    resizeMode: "stretch",
  },
});

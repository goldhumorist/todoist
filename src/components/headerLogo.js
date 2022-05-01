import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HeaderLogo = ({ title = "Todoist" }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        {title === "Todoist" ? "Todoist" : `Tasks for - ${title}`}
      </Text>
      <Image
        style={styles.headerLogo}
        source={require("../../assets/logo.png")}
      />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerLogo: {
    width: 60,
    height: 60,
    resizeMode: "stretch",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
  },
});

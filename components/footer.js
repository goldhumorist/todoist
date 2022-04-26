import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = () => {
  const navigation = useNavigation();

  const handleNavigateToProfile = () => {
    navigation.navigate("Profile");
  };
  const handleNavigateToLists = () => {
    navigation.navigate("Lists");
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        onPress={handleNavigateToLists}
        style={styles.footerBtn}
      >
        <Icon name="list-alt" size={30} color="#0782F9" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNavigateToProfile}
        style={styles.footerBtn}
      >
        <Icon name="user" size={30} color="#0782F9" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

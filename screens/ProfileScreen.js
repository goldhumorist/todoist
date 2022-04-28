import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import PrimaryBtn from "../src/components/primaryBtn";
import SupportInfo from "../src/components/supportInfo";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSigOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  const privacyHandler = () => {
    alert("Privacy Policy");
  };
  const contactHandler = () => {
    alert("Contact support");
  };
  const FAQHandler = () => {
    alert("FAQs");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View>
          <Text style={styles.profileInfoText}>Email:</Text>
        </View>

        <View>
          <Text style={[styles.profileInfoText, styles.profileInfoTextEmail]}>
            {auth.currentUser?.email}
          </Text>
        </View>
      </View>

      <View style={styles.supportInfoContainer}>
        <Text style={styles.supportInfoTitle}>SUPPORT</Text>
        <SupportInfo text="Privacy policy" onPressHandler={privacyHandler} />
        <SupportInfo text="Contact support" onPressHandler={contactHandler} />
        <SupportInfo text="FAQs" onPressHandler={FAQHandler} />
      </View>

      <View style={styles.flexBtnContainer}>
        <View style={styles.btnContainer}>
          <PrimaryBtn
            text="Logout"
            isBlue={true}
            handleOnPress={handleSigOut}
          />
        </View>
      </View>

      <Text style={styles.appInfoText}>Version of Todoist - 1.0.1</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  btnContainer: {
    width: "60%",
    marginTop: 40,
  },
  flexBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 150,
    backgroundColor: "#F5F5F5",
  },
  profileInfoText: {
    fontSize: 18,
  },
  profileInfoTextEmail: {
    marginTop: 15,
    fontWeight: "700",
  },
  supportInfoContainer: {
    marginHorizontal: 15,
    marginTop: 30,
  },
  supportInfoTitle: {
    color: "#4c4c4c",
    marginBottom: 15,
  },
  appInfoText: {
    position: "absolute",
    bottom: 10,
    right: 5,
    fontSize: 15,
  },
});

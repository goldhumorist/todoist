import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import HeaderLogo from "../components/headerLogo";
import Footer from "../components/footer";
import Input from "../components/input";
import AddItemBtn from "../components/addItemBtn";
import Item from "../components/item";

const HomeScreen = () => {
  const [lists, setLists] = useState("");
  const [list, setList] = useState("");

  const addItemHandler = () => {
    setLists(list);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.mainContent}>
        <HeaderLogo />

        <View style={styles.listsContainer}>
          <Text style={styles.listsContent}>{lists ? lists : "No lists"}</Text>
        </View>

        <Item title="Yestarday" isDone={true} />
        <Item title="Today" />
      </View>

      <View style={styles.footerContainer}>
        <Input
          placeholder="Title of list"
          value={list}
          onChangeText={setList}
          isSecureTextEntry={false}
          isBorder={true}
        />
        <AddItemBtn onPressHandler={addItemHandler} />
      </View>
      <Footer />
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    minHeight: "100%",
    flexDirection: "column",
  },
  mainContent: {
    flexGrow: 1,
    flexShrink: 1,
  },
  listsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  listsContent: {
    fontSize: 18,
  },
  footerContainer: {
    paddingHorizontal: 10,
    paddingRight: 25,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

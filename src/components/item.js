import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import { updateItemStatus } from "../services/itemsFirerbase";

const Item = ({
  title,
  id,
  deleteItem,
  editItem,
  isDoneProps,
  isCategoryScreen,
}) => {
  const [isDone, setIsDone] = useState(isDoneProps);

  const navigation = useNavigation();

  const didItem = () => {
    updateItemStatus(id, isDone, isCategoryScreen ? "categories" : "tasks");
    setIsDone(!isDone);
  };

  const navigateToTasksHandler = () => {
    navigation.navigate("Tasks", {
      categotyId: id,
      categotyTitle: title,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCheckAndText}>
        <TouchableOpacity onPress={didItem}>
          <Icon
            name="check-circle"
            size={30}
            color={isDone ? "#ded600" : "black"}
          />
        </TouchableOpacity>

        {isCategoryScreen ? (
          <TouchableOpacity
            style={{ marginTop: 5 }}
            onPress={() => {
              navigateToTasksHandler();
            }}
          >
            <View style={styles.titleContainer}>
              <Text style={[styles.title, isDone ? styles.textDone : ""]}>
                {title}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.titleContainer}>
            <Text style={[styles.title, isDone ? styles.textDone : ""]}>
              {title}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.modifyItemIcons}>
        <TouchableOpacity onPress={() => editItem(id)}>
          <Icon name="edit" size={30} color="#00d5ff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteItem(id)}>
          <Icon name="trash" size={30} color="#ff0026" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    borderColor: "#a6a6a6",
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
  },
  titleCheckAndText: {
    width: "55%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    maxWidth: "100%",
  },
  modifyItemIcons: {
    width: "33%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textDone: {
    textDecorationLine: "line-through",
  },
});

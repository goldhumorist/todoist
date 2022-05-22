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
  showInfo,
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
  const navigateToAddInfoHandler = () => {
    navigation.navigate("AdditionalInfo", {
      taskId: id,
    });
  };

  return (
    <View style={styles.mainContainer}>
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
      {isCategoryScreen ? (
        <Text></Text>
      ) : (
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.additionalInfo}
            onPress={() => navigateToAddInfoHandler()}
          >
            <Text>Add Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.additionalInfo}
            onPress={() => showInfo(id)}
          >
            <Text>Show Info</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  container: {
    backgroundColor: "#F8F8F8",
    borderColor: "#a6a6a6",
    borderWidth: 1,
    borderRadius: 10,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    minHeight: 60,
    maxHeight: 100,
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
    marginLeft: 10,
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
  additionalInfo: {
    alignItems: "center",
    width: "20%",
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    borderTopWidth: 0,
    marginBottom: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: "#3398f7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

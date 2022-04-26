import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Item = ({ title }) => {
  const [isDone, setIsDone] = useState(false);

  const didItem = () => {
    setIsDone(!isDone);
  };
  const editItem = () => {
    alert("EDIT");
  };
  const deleteItem = () => {
    alert("DELETE");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCheckAndText}>
        <TouchableOpacity onPress={didItem}>
          <Icon
            name="check-circle"
            size={35}
            color={isDone ? "#ded600" : "black"}
          />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.modifyItemIcons}>
        <TouchableOpacity onPress={editItem}>
          <Icon name="edit" size={35} color="#00d5ff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteItem}>
          <Icon name="trash" size={35} color="#ff0026" />
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
    width: "40%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modifyItemIcons: {
    width: "30%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

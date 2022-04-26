import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const AddItemBtn = ({ onPressHandler }) => {
  return (
    <View>
      <TouchableOpacity style={{ marginTop: 5 }} onPress={onPressHandler}>
        <Icon name="plus-square-o" size={35} color="#0782F9" />
      </TouchableOpacity>
    </View>
  );
};

export default AddItemBtn;

const styles = StyleSheet.create({});

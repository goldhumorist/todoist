import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Input from "./input";
import Icon from "react-native-vector-icons/FontAwesome";

const PopUpForm = ({
  modalVisibleProps,
  closeModalAndSaveHandler,
  idOfCurrentItemForEdit,
  closeModalHandler,
}) => {
  const [modalVisible, setModalVisible] = useState(modalVisibleProps);
  const [newTitle, setNewTitle] = useState("");
  return (
    <Modal
      animationType="slide"
      transparent={modalVisible}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.buttonCloseCross}>
            <Pressable
              onPress={() => {
                closeModalHandler();
                setModalVisible(false);
              }}
            >
              <Icon name="close" size={30} color="red" />
            </Pressable>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.modalText}>Form to updating </Text>
            <Input
              placeholder="Enter new title"
              value={newTitle}
              onChangeText={setNewTitle}
              isBorder={true}
              secureTextEntry={false}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                closeModalAndSaveHandler(idOfCurrentItemForEdit, newTitle);
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Save changing</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
  buttonCloseCross: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  formContainer: {
    alignItems: "center",
    paddingRight: 30,
    width: "100%",
  },
});

export default PopUpForm;

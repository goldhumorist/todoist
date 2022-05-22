import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  ActivityIndicator,
  Pressable,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { getInfoFromDB } from "../services/itemsFirerbase";

const PopUpInfo = ({ modalVisibleProps, closeModalHandler, id }) => {
  const [modalVisible, setModalVisible] = useState(modalVisibleProps);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isLoading, setIsLoading] = useState(
    <ActivityIndicator size="large" color="gray" />
  );

  (async () => {
    const res = await getInfoFromDB(id);
    setDescription(res[0]);
    setDeadline(res[1]);

    setIsLoading(false);
  })();

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
            <Text style={styles.modalText}>Info About Task</Text>
            <Text>
              {isLoading ? (
                <ActivityIndicator size="large" color="gray" />
              ) : (
                <View style={styles.infoContainer}>
                  <Text style={styles.descriptionTitle}>Description: </Text>
                  <Text>{description}</Text>
                  <Text style={styles.deadlineTitle}>Deadline: </Text>
                  <Text>{deadline}</Text>
                </View>
              )}
            </Text>
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
  infoContainer: {
    maxWidth: 200,
  },
  descriptionTitle: {
    fontWeight: "700",
  },
  deadlineTitle: {
    fontWeight: "700",
  },
});

export default PopUpInfo;

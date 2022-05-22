import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import Footer from "../src/components/footer";
import { addDescAndDeadlineToTask } from "../src/services/itemsFirerbase";
import PrimaryBtn from "../src/components/primaryBtn";
import DateTimePicker from "@react-native-community/datetimepicker";

const AdditionalInfoScreen = ({ route }) => {
  const { taskId } = route.params;

  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Set date");

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
    setDate(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const addInfoHandler = (taskId, desc, deadline) => {
    if (desc && text !== "Set date") {
      addDescAndDeadlineToTask(taskId, desc, deadline);
      setDescription("");
      alert("Additional info for your tasks was succesfully added!");
    } else {
      alert("Enter description or pick date it can not be empty!");
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.mainContent}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onDateChange}
          />
        )}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <View style={{ marginTop: "5%" }}>
              <Text>Add description</Text>
            </View>

            <TextInput
              placeholder="Add some description..."
              style={styles.textInput}
              multiline={true}
              numberOfLines={3}
              onChangeText={setDescription}
              value={description}
            />
          </View>

          <Text style={styles.deadlineText}>Deadline: {text}</Text>
        </KeyboardAvoidingView>
        <View style={styles.datePicker}>
          <Button title="Set date" onPress={() => showMode("date")}></Button>
        </View>

        <View style={styles.btn}>
          <PrimaryBtn
            text="Add info"
            isBlue={true}
            handleOnPress={() => {
              addInfoHandler(taskId, description, date);
            }}
          />
        </View>
      </View>
      <View style={styles.footerContainer}></View>
      <Footer />
    </KeyboardAvoidingView>
  );
};

export default AdditionalInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContent: {
    flexGrow: 1,
    flexShrink: 1,
    marginTop: "10%",
    marginLeft: "10%",
  },
  btn: {
    marginTop: "15%",
    alignItems: "flex-end",
    marginRight: "15%",
  },
  textInput: {
    width: "85%",
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: "5%",
  },
  datePicker: {
    marginTop: "5%",
    width: 150,
  },
  deadlineText: {
    fontWeight: "700",
  },
});

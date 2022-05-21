import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import Footer from "../src/components/footer";
import { addDescAndDeadlineToTask } from "../src/services/itemsFirerbase";
import PrimaryBtn from "../src/components/primaryBtn";
import DateTimePicker from "@react-native-community/datetimepicker";

const AdditionalInfoScreen = ({ route }) => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("No Date");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(true);
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fullDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    setText(fullDate);
    setDeadline(fullDate);

    console.log(fullDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const navigation = useNavigation();
  const { taskId } = route.params;

  const addInfoHandler = (taskId, desc, deadline) => {
    console.log("first", desc);
    console.log("first", deadline);
    addDescAndDeadlineToTask(taskId, desc, deadline);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.mainContent}>
        <View>
          <View style={{ marginTop: 20 }}>
            <Text>Add description</Text>
          </View>

          <TextInput
            placeholder="Add some description..."
            style={styles.textInput}
            onChangeText={setDescription}
            value={description}
          />
        </View>
        <View style={styles.datePicker}>
          <View>
            <Text>Select Date</Text>
          </View>
          <Button title={text} onPress={() => showMode("date")} />
        </View>
        <View
          style={{ width: "85%", borderRadius: 10, backgroundColor: "gray" }}
        >
          {show && (
            <DateTimePicker
              testId="dateTimePicker"
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.btn}>
          <PrimaryBtn
            text="Add info"
            isBlue={true}
            handleOnPress={() => {
              addInfoHandler(taskId, description, deadline);
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
    marginTop: "5%",
    alignItems: "flex-end",
    marginRight: "15%",
  },
  textInput: {
    width: "85%",
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  datePicker: {
    marginTop: "5%",
    width: 150,
  },
});

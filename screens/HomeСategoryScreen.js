import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderLogo from "../src/components/headerLogo";
import Footer from "../src/components/footer";
import Input from "../src/components/input";
import AddItemBtn from "../src/components/addItemBtn";
import { LogBox } from "react-native";
import {
  addCategoryToDB,
  deleteCategoryFromDB,
  getCategotiesFromDB,
  updateItem,
} from "../src/services/itemsFirerbase";
import Item from "../src/components/item";
import PopUpForm from "../src/components/popUpForm";

LogBox.ignoreLogs(["Setting a timer"]);

const HomeСategoryScreen = () => {
  const [listOfCategories, setListOfCategories] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [idOfCurrentItem, setIdOfCurrentItem] = useState("");

  useEffect(async () => {
    if (isLoading) {
      const categories = await getCategotiesFromDB();
      const categoriesObj = categories.map(
        (item) => {
          return {
            id: item.id,
            title: item.data.category_title,
            isDone: item.data.is_done,
          };
        },
        [[isLoading]]
      );
      setListOfCategories(categoriesObj);
      setIsLoading(false);
    }
  });

  const addItemHandler = async () => {
    await addCategoryToDB(categoryTitle);
    setCategoryTitle("");
    setIsLoading(true);
  };

  const renderItems = () => {
    return listOfCategories.length > 0 ? (
      listOfCategories.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          id={item.id}
          isDoneProps={item.isDone}
          deleteItem={deleteItemHandler}
          editItem={editItemHandler}
          isCategoryScreen={true}
        />
      ))
    ) : (
      <Text style={styles.listsContainerEmpty}>No Category</Text>
    );
  };

  const deleteItemHandler = async (id) => {
    await deleteCategoryFromDB(id);
    setIsLoading(true);
  };
  const editItemHandler = (id) => {
    setIdOfCurrentItem(id);
    setModalVisible(true);
  };
  const renderModal = () => {
    return (
      <PopUpForm
        idOfCurrentItemForEdit={idOfCurrentItem}
        modalVisibleProps={modalVisible}
        closeModalAndSaveHandler={closeModalAndSaveHandler}
        closeModalHandler={closeModalHandler}
      />
    );
  };

  const closeModalAndSaveHandler = async (id, newTitle) => {
    setModalVisible(false);
    updateItem(id, newTitle);
    setIsLoading(true);
  };
  const closeModalHandler = () => {
    setModalVisible(false);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <View style={styles.mainContent}>
        <HeaderLogo />

        {modalVisible ? renderModal() : <Text></Text>}

        <ScrollView>
          {isLoading ? (
            <ActivityIndicator size="large" color="gray" />
          ) : (
            renderItems()
          )}
        </ScrollView>
      </View>

      <View style={styles.footerContainer}>
        <Input
          placeholder="Title of list"
          value={categoryTitle}
          onChangeText={setCategoryTitle}
          isSecureTextEntry={false}
          isBorder={true}
        />
        <AddItemBtn onPressHandler={addItemHandler} />
      </View>
      <Footer />
    </KeyboardAvoidingView>
  );
};

export default HomeСategoryScreen;

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
    marginTop: 15,
  },
  listsContainerEmpty: {
    marginTop: "20%",
    fontSize: 20,
    textAlign: "center",
  },
  listsContent: {
    fontSize: 20,
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

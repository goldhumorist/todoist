import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";

export const addCategoryToDB = async (categoryTitle) => {
  if (categoryTitle.trim()) {
    const categoryTitleUpd =
      categoryTitle.length > 35
        ? categoryTitle.slice(0, 30) + "..."
        : categoryTitle;
    try {
      const docRef = await addDoc(collection(db, "categories"), {
        category_title: categoryTitleUpd,
        is_done: false,
        created_at: Date.now(),
        updated_at: Date.now(),
        user_id: auth.currentUser?.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    alert("Category can not be empty string");
  }
};

export const getCategotiesFromDB = async () => {
  const q = query(
    collection(db, "categories"),
    where("user_id", "==", auth.currentUser?.uid)
  );
  const categories = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    categories.push({ data: doc.data(), id: doc.id });
  });

  return categories;
};
export const deleteCategoryFromDB = async (id) => {
  await deleteDoc(doc(db, "categories", id));
};
export const updateItem = async (id, newTitle) => {
  if (newTitle.trim() !== "") {
    const washingtonRef = doc(db, "categories", id);

    await updateDoc(washingtonRef, {
      category_title: newTitle,
    });
  }
};

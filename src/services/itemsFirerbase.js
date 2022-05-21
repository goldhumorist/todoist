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
      const docRef = await addDoc(collection(db, "categories"), { //crashLeetics
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
      updated_at: Date.now(),
    });
  }
};

export const addTaskToDB = async (taskTitle, categoryId) => {
  if (taskTitle.trim()) {
    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        task_title: taskTitle,
        is_done: false,
        created_at: Date.now(),
        updated_at: Date.now(),
        category_id: categoryId,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    alert("Task can not be empty string");
  }
};

export const getTasksFromDB = async (categoryId) => {
  const q = query(
    collection(db, "tasks"),
    where("category_id", "==", categoryId)
  );
  const tasks = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    tasks.push({ data: doc.data(), id: doc.id });
  });

  return tasks;
};

export const deleteTaskromDB = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
};

export const updateTask = async (id, newTitle) => {
  if (newTitle.trim() !== "") {
    const washingtonRef = doc(db, "tasks", id);

    await updateDoc(washingtonRef, {
      task_title: newTitle,
      updated_at: Date.now(),
    });
  }
};
export const updateItemStatus = async (id, isDone, itemType) => {
  const washingtonRef = doc(db, itemType, id);

  await updateDoc(washingtonRef, {
    is_done: !isDone,
  });
};

export const addDescAndDeadlineToTask = async (
  taskId,
  description,
  deadline
) => {
  const docRef = doc(db, "tasks", taskId);

  await updateDoc(docRef, {
    description: description,
    deadline: deadline,
    updated_at: Date.now(),
  });
};

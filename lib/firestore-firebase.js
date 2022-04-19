import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  orderBy,
  query,
  doc,
  deleteDoc,
} from "./exports.js";

const db = getFirestore();

export async function addPosts(city, country, message, userEmail) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      city,
      country,
      message,
      userEmail,
      date: new Date().toLocaleString("pt-br"),
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export const getPosts = async () => {
  const arrPosts = [];
  const orderFirestore = query(collection(db, "posts"), orderBy("date"));
  const querySnapshot = await getDocs(orderFirestore);
  querySnapshot.forEach((item) => {
    const timeline = item.data();
    timeline.id = item.id;
    arrPosts.push(timeline);
  });

  return arrPosts;
};

export function deletePosts(item) {
  return deleteDoc(doc(db, "posts", item));
}

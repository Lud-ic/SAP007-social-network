import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  orderBy,
  query,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const db = getFirestore();

export async function addPosts(city, country, message, userEmail) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      city: city,
      country: country,
      message: message,
      userEmail: userEmail,
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
  querySnapshot.forEach((doc) => {
    const timeline = doc.data();
    timeline.id = doc.id;
    arrPosts.push(timeline);
  });

  return arrPosts;
};

export async function deletePosts() {
  return await deleteDoc(doc(db, "posts", "id"));
}

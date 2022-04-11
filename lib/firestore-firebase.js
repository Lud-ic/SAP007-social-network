import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const db = getFirestore();

export async function addPosts(city, country, message, userEmail) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      city: city,
      country: country,
      message: message,
      userEmail: userEmail,
      date: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getPosts = async () => {
  const arrPosts = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    const timeline = doc.data();
    // console.log(`${doc.id} => ${doc.data()}`);
    arrPosts.push(timeline);
  });
  // console.log(arrPosts, "arrayPosts");
  return arrPosts;
};

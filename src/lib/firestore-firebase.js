import {
  collection,
  addDoc,
  getFirestore,
  // getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const db = getFirestore();

export async function posts(city, country, message, userEmail){
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      city: city,
      country: country,
      message: message,
      userEmail: userEmail,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });


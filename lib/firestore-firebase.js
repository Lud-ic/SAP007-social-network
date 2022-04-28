import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  orderBy,
  query,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
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
      likes: [],
    });

    return docRef.id;
  } catch (e) {
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

export function deletePosts(itemId) {
  return deleteDoc(doc(db, "posts", itemId));
}

export function editPosts(itemId, city, country, message) {
  const editPost = doc(db, "posts", itemId);
  return updateDoc(editPost, {
    city,
    country,
    message,
  });
}

export async function like(itemId, userEmail) {
  try {
    const postId = doc(db, "posts", itemId);
    return await updateDoc(postId, {
      likes: arrayUnion(userEmail),
    });
  } catch (e) {
    return console.log("Não deu certo o like", e);
  }
}

export async function dislike(itemId, userEmail) {
  try {
    const postId = doc(db, "posts", itemId);
    return await updateDoc(postId, {
      likes: arrayRemove(userEmail),
    });
  } catch (e) {
    return console.log("Não deu certo o like", e);
  }
}

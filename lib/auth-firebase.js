import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export function userCreate(email, password) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    }
  );
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log("entrou!");
      return user;
    }
  );
}

export function userLogout() {
  return signOut(auth)
    .then(() => {
      return "Logout";
    })
    .catch((error) => {
      return error;
    });
}

export function signinGoogle() {
  return signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return credential;
  });
}

export function checkLoggedUser() {
  const user = auth.currentUser;
  //localStorage
  return user;
}

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "./exports.js";

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export function userCreate(email, password) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log("entrou!");
      return user;
    },
  );
}

export function userLogout() {
  return signOut(auth)
    .then(() => "Logout")
    .catch((error) => error);
}

export function signinGoogle() {
  return signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    const user = result.user;
    console.log(user, "useeeeeeeeer");
    return credential;
  });
}

export function checkLoggedUser() {
  const user = auth.currentUser;
  return user || localStorage.getItem("userEmail");
}

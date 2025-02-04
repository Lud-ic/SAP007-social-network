import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  provider,
  GoogleAuthProvider,
  signInWithPopup,
} from "./exports.js";

export function userCreate(email, password) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export function userLogin(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export function userLogout() {
  const auth = getAuth();
  return signOut(auth)
    .then(() => "Logout")
    .catch((error) => error);
}

export function signinGoogle() {
  const auth = getAuth();
  return signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return credential;
  });
}

export function getUser() {
  const auth = getAuth();
  const user = auth.currentUser;

  return user || localStorage.getItem("userEmail");
}

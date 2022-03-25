import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSKctcLyPbdGXeS-MkTitCMGhWQl2xkcA",
  authDomain: "let---social-network.firebaseapp.com",
  projectId: "let---social-network",
  storageBucket: "let---social-network.appspot.com",
  messagingSenderId: "981304998871",
  appId: "1:981304998871:web:d7e9917f3f622cc5422992",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

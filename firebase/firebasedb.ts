// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-bz3sRxBUKBBKgu-astUB3V2ptacEGpM",
  authDomain: "paddlet.firebaseapp.com",
  projectId: "paddlet",
  storageBucket: "paddlet.appspot.com",
  messagingSenderId: "1023308082447",
  appId: "1:1023308082447:web:b7cb65c4334e1bfa9ee27a"
};

// Initialize Firebase
const firebasedb = initializeApp(firebaseConfig);
const db = getFirestore(firebasedb)

export {db};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyuAqshdwhl9qrYFTP7kTvPTC8MxV3wX8",
  authDomain: "school-5f713.firebaseapp.com",
  projectId: "school-5f713",
  storageBucket: "school-5f713.appspot.com",
  messagingSenderId: "783612809809",
  appId: "1:783612809809:web:f334e18a15721b1cb39e70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default getFirestore();
export const auth = getAuth(app);

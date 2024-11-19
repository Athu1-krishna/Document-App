// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD04Lw6dX0HwKUyo4a9Hz0sYBHaSmWFQSc",
  authDomain: "docapp-1933f.firebaseapp.com",
  projectId: "docapp-1933f",
  storageBucket: "docapp-1933f.firebasestorage.app",
  messagingSenderId: "483684034099",
  appId: "1:483684034099:web:e71802e1b4e417b5e42546",
  measurementId: "G-FWJHQ684S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export the database instance
export { db };
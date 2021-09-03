import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6bb6E7U-z93xivd4L6law7dPTyB1GDPI",
    authDomain: "react-chat-app-a142e.firebaseapp.com",
    projectId: "react-chat-app-a142e",
    storageBucket: "react-chat-app-a142e.appspot.com",
    messagingSenderId: "950003409891",
    appId: "1:950003409891:web:254caf83b13dabf340b6d6",
    measurementId: "G-M1C04GBK71"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics();

  const auth = getAuth();
  const db = getFirestore(app);


export {auth, db};
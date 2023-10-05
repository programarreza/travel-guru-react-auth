import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjJATnW38yNcLO1gwN7XlPpM27NIsX02Y",
  authDomain: "travel-guru-react-auth-79b78.firebaseapp.com",
  projectId: "travel-guru-react-auth-79b78",
  storageBucket: "travel-guru-react-auth-79b78.appspot.com",
  messagingSenderId: "176396284195",
  appId: "1:176396284195:web:2f13e29846a94b94cadc96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
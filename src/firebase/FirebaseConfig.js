import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9kCJgXv-hqI8fcgYSbCqmIbQ8kXLDzvo",
  authDomain: "test-kitchen-dcf5d.firebaseapp.com",
  projectId: "test-kitchen-dcf5d",
  storageBucket: "test-kitchen-dcf5d.appspot.com",
  messagingSenderId: "373681972370",
  appId: "1:373681972370:web:e352f843334df9059b324b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfSMBk4evIVsZmvfCTQ2upOXi70ASam1w",
  authDomain: "cloud-based-expense-tracker.firebaseapp.com",
  projectId: "cloud-based-expense-tracker",
  storageBucket: "cloud-based-expense-tracker.appspot.com",
  messagingSenderId: "912824952274",
  appId: "1:912824952274:web:205c6b898a0994bc6b140b",
  measurementId: "G-ML6NJRM5N0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

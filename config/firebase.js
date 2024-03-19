const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAfSMBk4evIVsZmvfCTQ2upOXi70ASam1w",
  authDomain: "cloud-based-expense-tracker.firebaseapp.com",
  projectId: "cloud-based-expense-tracker",
  storageBucket: "cloud-based-expense-tracker.appspot.com",
  messagingSenderId: "912824952274",
  appId: "1:912824952274:web:205c6b898a0994bc6b140b",
  measurementId: "G-ML6NJRM5N0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };

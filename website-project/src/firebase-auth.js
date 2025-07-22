import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkK42yDbEOgO1w58Cn42zdRwwr1J3Qh1A",
  authDomain: "tech-gadgets-24515.firebaseapp.com",
  projectId: "tech-gadgets-24515",
  storageBucket: "tech-gadgets-24515.appspot.com",
  messagingSenderId: "15576773152",
  appId: "1:15576773152:web:205ec4788d5d80a16f0245",
  measurementId: "G-S78WS4975K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

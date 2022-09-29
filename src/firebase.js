import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ7OsDrzczl6Punk48lO128Rxrv2c8JzI",
  authDomain: "clone-8b9f6.firebaseapp.com",
  projectId: "clone-8b9f6",
  storageBucket: "clone-8b9f6.appspot.com",
  messagingSenderId: "798520518867",
  appId: "1:798520518867:web:d26b8fce0c8070caf54c26",
  measurementId: "G-LGZ4ZXGCE9",
};

//initializing the firebase

const app = initializeApp(firebaseConfig);
//initialize the database
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };

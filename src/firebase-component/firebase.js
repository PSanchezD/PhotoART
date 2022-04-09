

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_DOM,
  projectId: process.env.REACT_APP_ID,
  storageBucket: process.env.REACT_APP_BUCK,
  messagingSenderId: process.env.REACT_APP_SENDER,
  appId: process.env.REACT_APP_APP
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
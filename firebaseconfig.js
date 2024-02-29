import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAjJ2FjxXyIQSOjavWUgBW8I7YblTXxp2A",
  authDomain: "linkdin-clone-ac746.firebaseapp.com",
  projectId: "linkdin-clone-ac746",
  storageBucket: "linkdin-clone-ac746.appspot.com",
  messagingSenderId: "198321383759",
  appId: "1:198321383759:web:1c278762c28845961e3d3a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth}
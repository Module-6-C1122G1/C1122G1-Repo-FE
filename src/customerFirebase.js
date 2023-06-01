import { initializeApp } from "firebase/app";
import {getStorage} from "@firebase/storage";
import 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD10w5i26nxJVoKE1pbS9R2zDSBKlBL9rM",
    authDomain: "truongnn-cbe99.firebaseapp.com",
    databaseURL: "https://truongnn-cbe99-default-rtdb.firebaseio.com",
    projectId: "truongnn-cbe99",
    storageBucket: "truongnn-cbe99.appspot.com",
    messagingSenderId: "1079584628578",
    appId: "1:1079584628578:web:a5c690585f7d98814d963b",
    measurementId: "G-BV5NBNCLPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
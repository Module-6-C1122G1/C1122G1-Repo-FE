// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "@firebase/storage";
import 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFT61WX80rfhFsnSeOelAIGJgQtbNs6J8",
    authDomain: "dn-cinema.firebaseapp.com",
    projectId: "dn-cinema",
    storageBucket: "dn-cinema.appspot.com",
    messagingSenderId: "1050470510730",
    appId: "1:1050470510730:web:35e84c78c7e5abde87bd73",
    measurementId: "G-8KY11E6N60"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)

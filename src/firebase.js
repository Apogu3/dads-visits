// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = ({
  apiKey: 'AIzaSyBShuaCk1_jTVGQWbmnOaZlcLxb2cIgknQ',
  authDomain: 'chat-appv1-38f7e.firebaseapp.com',
  databaseURL: 'http://chat-appv1-38f7e.firebaseio.com',
  projectId: 'chat-appv1-38f7e',
  storageBucket: 'chat-appv1-38f7e.appspot.com',
  messagingSenderId: '449788042576',
  appId: '1:449788042576:web:f9bd2a7abd5a037515e055',
})

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage }; 
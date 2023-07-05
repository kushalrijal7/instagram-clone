import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyAfjTwun0IwGX33ioSwqcUNIGpI988gYrQ",
    authDomain: "instagram-clone-react-6ea3b.firebaseapp.com",
    projectId: "instagram-clone-react-6ea3b",
    storageBucket: "instagram-clone-react-6ea3b.appspot.com",
    messagingSenderId: "805623221535",
    appId: "1:805623221535:web:26bb20b32cd422ab02342a",
    measurementId: "G-DR3WHV14RB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };

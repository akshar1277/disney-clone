import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {

  apiKey: "AIzaSyAFYfn56nmfKliSrH6iqg0kEpd_5KHY8oY",

  authDomain: "disney-plus-clone-e05f7.firebaseapp.com",

  projectId: "disney-plus-clone-e05f7",

  storageBucket: "disney-plus-clone-e05f7.appspot.com",

  messagingSenderId: "212528442246",

  appId: "1:212528442246:web:d27bc01dc8dfa1eb9bda07"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

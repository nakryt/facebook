import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBZx8az5kQ8yROyyDefUCLC974v0hW8Pw",
  authDomain: "facebook-clone-a4fee.firebaseapp.com",
  projectId: "facebook-clone-a4fee",
  storageBucket: "facebook-clone-a4fee.appspot.com",
  messagingSenderId: "169609792319",
  appId: "1:169609792319:web:384c3707cc3b956776a18a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;

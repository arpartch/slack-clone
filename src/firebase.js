import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZs0thxnEVZSOp3OAoYaw7dVsdbgafCQ4",
    authDomain: "slack-clone-29aaf.firebaseapp.com",
    projectId: "slack-clone-29aaf",
    storageBucket: "slack-clone-29aaf.appspot.com",
    messagingSenderId: "542945399871",
    appId: "1:542945399871:web:360e3cdb6e07940a10548a",
    measurementId: "G-63JKJEB9PT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db }; 
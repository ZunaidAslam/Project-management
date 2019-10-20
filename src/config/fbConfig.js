import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQzosWqs0ig3PZhgDZxXPL-2ntLNk7mnw",
    authDomain: "net-ninja-marioplan-db1c3.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-db1c3.firebaseio.com",
    projectId: "net-ninja-marioplan-db1c3",
    storageBucket: "net-ninja-marioplan-db1c3.appspot.com",
    messagingSenderId: "93410324261",
    appId: "1:93410324261:web:2da96ad389a0a9ae8c34cc",
    measurementId: "G-EJEEN0XQ6K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
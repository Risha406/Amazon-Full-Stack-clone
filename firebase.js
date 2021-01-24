// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD-vqtZN65IniP0ix5aNzhJ0clnvC3ZKrY",
    authDomain: "clone-7302f.firebaseapp.com",
    projectId: "clone-7302f",
    storageBucket: "clone-7302f.appspot.com",
    messagingSenderId: "185799470068",
    appId: "1:185799470068:web:a141d00b17ae80478e67a1",
    measurementId: "G-5HCGKP58K4"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);  

const db=firebaseApp.firestore();
const auth= firebase.auth();

export {db,auth};
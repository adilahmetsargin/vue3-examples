import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDh0aLpAHcm5XhIcGw9kZSaTupy0Ku3Jrg",
    authDomain: "chatapptutorial-6e310.firebaseapp.com",
    databaseURL: "https://chatapptutorial-6e310.firebaseio.com",
    projectId: "chatapptutorial-6e310",
    storageBucket: "chatapptutorial-6e310.appspot.com",
    messagingSenderId: "43088587680",
    appId: "1:43088587680:web:85ea927f8aef0ca2a7d2c5"
 
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export const chatsRef = db.ref("chats");


export default firebase;
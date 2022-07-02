import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBwsiPoao7qpljktHdI8dxPojiROzeXHsM",
    authDomain: "prijecj.firebaseapp.com",
    projectId: "prijecj",
    storageBucket: "prijecj.appspot.com",
    messagingSenderId: "34413364161",
    appId: "1:34413364161:web:7448c9f78fd6fbfe7f6540"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

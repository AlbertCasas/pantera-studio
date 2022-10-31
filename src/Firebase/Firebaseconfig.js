import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBpFva1QAG9xudY89nAteiJ8EqiJbaauUs",
    authDomain: "pantera-studio-84d0c.firebaseapp.com",
    projectId: "pantera-studio-84d0c",
    storageBucket: "pantera-studio-84d0c.appspot.com",
    messagingSenderId: "585438187657",
    appId: "1:585438187657:web:33661c4f7d9b4269f5b658",
    measurementId: "G-H8Y8F2L354"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: import.meta.env.VITE_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    projectId: "pantera-studio-84d0c",
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGIG_SENDER_ID,
    appId: import.meta.env.APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
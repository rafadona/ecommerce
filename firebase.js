import firebase from "firebase";


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIRESTORE_PROJECT_ID,
    storageBucket: "ecommerce-8b4a1.appspot.com",
    messagingSenderId: "663165448523",
    appId: process.env.FIREBASE_APP_ID
};





const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;
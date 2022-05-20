import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBovSMQhu7h_gkFG8RiFBL9nSEkUyMCJEU",
  authDomain: "shopping-cart-react-e2f59.firebaseapp.com",
  projectId: "shopping-cart-react-e2f59",
  storageBucket: "shopping-cart-react-e2f59.appspot.com",
  messagingSenderId: "483639122319",
  appId: "1:483639122319:web:284f3db4043ec9fb2e13fa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };

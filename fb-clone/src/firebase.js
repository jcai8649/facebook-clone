import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDcUgvVJbSHwyN4m70p9Gdx2JcXmRA4emA",
    authDomain: "facebook-clone-42163.firebaseapp.com",
    databaseURL: "https://facebook-clone-42163.firebaseio.com",
    projectId: "facebook-clone-42163",
    storageBucket: "facebook-clone-42163.appspot.com",
    messagingSenderId: "710300646078",
    appId: "1:710300646078:web:33af1545b802ccd39dfcef",
    measurementId: "G-ZMHZ8Z8S17"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;
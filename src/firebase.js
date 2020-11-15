import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCF4D3dVfLH-YUQrq_55m_Pt_ZpqtXFOko",
    authDomain: "slack-clone-e18c7.firebaseapp.com",
    databaseURL: "https://slack-clone-e18c7.firebaseio.com",
    projectId: "slack-clone-e18c7",
    storageBucket: "slack-clone-e18c7.appspot.com",
    messagingSenderId: "114732077706",
    appId: "1:114732077706:web:a79df6055587f4cb92d373"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
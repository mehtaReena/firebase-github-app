
import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GithubAuthProvider ,signOut } from "firebase/auth";


// eslint-disable-next-line
const firebaseConfig = {
    apiKey: "AIzaSyAepydjVcKdZfWLtcbjLGk1Ii3Fw3jNhEw",
    authDomain: "fir-app-483fc.firebaseapp.com",
    projectId: "fir-app-483fc",
    storageBucket: "fir-app-483fc.appspot.com",
    messagingSenderId: "956155399892",
    appId: "1:956155399892:web:450961cb2a39d2ac2db541"
  };

  // Initialize Firebase
  // eslint-disable-next-line
  const app = initializeApp(firebaseConfig);
  var auth = getAuth();

  export {auth , GithubAuthProvider,signInWithPopup , signOut};












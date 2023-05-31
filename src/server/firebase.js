import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyC3RVrAt2sb9yFCiCpi-WmKzjhdTSZ1Fkk",
  authDomain: "skack-clone-reactjs.firebaseapp.com",
  projectId: "skack-clone-reactjs",
  storageBucket: "skack-clone-reactjs.appspot.com",
  messagingSenderId: "651513118580",
  appId: "1:651513118580:web:26b8560125bc92c055b621",
  measurementId: "G-49QBTWRQK9",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBQhJdhvg28Xb54E2DWqUPUcWKPR_pa0yc",
  authDomain: "real-time-database-600ce.firebaseapp.com",
  databaseURL: "https://real-time-database-600ce-default-rtdb.firebaseio.com",
  projectId: "real-time-database-600ce",
  storageBucket: "real-time-database-600ce.appspot.com",
  messagingSenderId: "58766564294",
  appId: "1:58766564294:web:02e5984fabe33f106ff0c7",
  measurementId: "G-3E95XD6XFD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBk_B_MA_zmr6IYsNZk9Y5J3kupvyd8iqM',
  authDomain: 'facebook-messenger-jmr.firebaseapp.com',
  projectId: 'facebook-messenger-jmr',
  storageBucket: 'facebook-messenger-jmr.appspot.com',
  messagingSenderId: '845069393360',
  appId: '1:845069393360:web:a7315db4a4088ae2fbadd5',
});

const db = firebaseApp.firestore();
export default db;

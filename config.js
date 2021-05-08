import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAIi29U5z_vJKnUcuf7J5MLMhlFzkybQWs",
  authDomain: "fuel-saving-app-7e583.firebaseapp.com",
  projectId: "fuel-saving-app-7e583",
  storageBucket: "fuel-saving-app-7e583.appspot.com",
  messagingSenderId: "996453304061",
  appId: "1:996453304061:web:4142292cd6daae4dfd6094"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

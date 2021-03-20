import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCcPbh-D0gY0xr2CWL13t9wIoKDgyj2B0Y',
  authDomain: 'calculator-app-762a3.firebaseapp.com',
  databaseURL: 'https://calculator-app-762a3.firebaseio.com',
  projectId: 'calculator-app-762a3',
  storageBucket: 'calculator-app-762a3.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:874036580079:ios:a13f3d679332a1d34c151a',
  measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig, "RexApp");
} else {
    firebase.app("RexApp");
}
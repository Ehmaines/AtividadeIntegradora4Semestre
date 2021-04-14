import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCsHrClkgPqVOS9QkSROgOWO5CN5tVeq_A",
    authDomain: "atividade-integradora-3b15d.firebaseapp.com",
    projectId: "atividade-integradora-3b15d",
    storageBucket: "atividade-integradora-3b15d.appspot.com",
    messagingSenderId: "283606254819",
    appId: "1:283606254819:web:883f3f9c252ef73c27f1d6"
  };
  // Initialize Firebase
  if(!firebase.apps.lenght){
      firebase.initializeApp(firebaseConfig);
 }

firebase.firestore();
export default firebase;

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

import data from './data/sample';
const collectionName = 'sampleLoad';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAKffQbsph4zEo3eIJQVspO4nyiOhhlIOY",
    authDomain: "default-41161.firebaseapp.com",
    databaseURL: "https://default-41161.firebaseio.com",
    projectId: "default-41161",
    storageBucket: "default-41161.appspot.com",
    messagingSenderId: "402268854996",
    appId: "1:402268854996:web:5f9c44e8739c8221"
  });

var db = firebase.firestore();



data.forEach(function(obj) {
    db.collection(collectionName).add(
      obj
    ).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

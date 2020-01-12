const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

import data from './data/sample';
const collectionName = 'sampleLoad';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({

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

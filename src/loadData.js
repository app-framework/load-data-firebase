const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


const csvToJson = require('convert-csv-to-json');

// import data from './data/sample';
const collectionName = 'sampleLoad1'; // CHANGE this

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    
  });

var db = firebase.firestore();


const data = csvToJson.fieldDelimiter(',').getJsonFromCsv("c:/code/test/testCSV.csv");
console.log(data);

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

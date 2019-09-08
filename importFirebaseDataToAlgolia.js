const firebase = require("firebase");

const config = {
  apiKey: 'AIzaSyA5siB2Jg64LhQNlieawQ69kOL78X5Kov8',
  authDomain: 'greenmaptaiwan.firebaseapp.com',
  databaseURL: 'https://greenmaptaiwan.firebaseio.com',
  projectId: 'greenmaptaiwan',
  storageBucket: 'greenmaptaiwan.appspot.com',
  messagingSenderId: '395267289672',
  databaseURL: 'https://greenmaptaiwan.firebaseio.com/'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const algoliasearch = require('algoliasearch');

const database = firebase.database();

// configure algolia
const algolia = algoliasearch(
  'Z1TQILX2PS',
  '5af274c2ae7f9edc9ae4fcf378911ded'
);
const index = algolia.initIndex('firebaseApp_greenmaptaiwan');


// Get all greenmaptaiwan from Firebase
database.ref('/').once('value', greenmaptaiwan => {
  // Build an array of all records to push to Algolia
  const records = [];
  greenmaptaiwan.forEach(contact => {
    // 只顯示推薦商家
    // if(contact.val().recommendation_area||contact.val().recommendation_level){
      // get the key and data from the snapshot
      const childKey = contact.key;
      const childData = contact.val();
      // We set the Algolia objectID as the Firebase .key
      childData.objectID = childKey;
      // Add object for indexing
      records.push(childData);
    // }
  });

  // Add or update new objects
  index.clearIndex((err, content) => {
    if (err) throw err;
  
    console.log(content);
    
    index
    .saveObjects(records)
    .then(() => {
      console.log('greenmaptaiwan imported into Algolia');
      process.exit();
    })
    .catch(error => {
      console.error('Error when importing contact into Algolia', error);
      process.exit(1);
    });

  });

});
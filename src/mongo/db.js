const Client = require('mongodb').MongoClient;
const URL = 'mongodb://127.0.0.1:12345/test';
Client.connect(URL, (err, db) => {
  if (err) {
    console.log('error', err);
  }
  console.log('connect');
  console.log(db);
});


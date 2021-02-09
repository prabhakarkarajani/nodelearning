const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbname= 'udmeycourse';
const url = 'mongodb://127.0.0.1:27017';
//  connect db fn

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log("Connected to MongoDB!");
      _db = client.db(dbname);
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
}

module.exports = {
  mongoConnect,
  getDb
}
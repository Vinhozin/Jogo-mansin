const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionString);

try {
  let db = client.db("jogo");
  module.exports = db;
} catch(e) {
  console.error(e);
}
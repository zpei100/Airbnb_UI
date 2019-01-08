const mongoose = require('mongoose');
const MONGOURL = process.env.MONGOURL || require('../config').MONGOURL;

console.log(MONGOURL)

mongoose.connect(MONGOURL, {
  useCreateIndex: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('connection open!');
});

module.exports = { db }

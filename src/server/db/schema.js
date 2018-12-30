const db = require('./db.js');
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  type: String,
  description: String,
  beds: Number,
  tag: String,
  favorite: Boolean,
  price: Number,
  pricePerPerson: Number,
  datesBooked: [Date],
  rating: Number,
  reviews: Number,
  imgs: [String],
  related: [Number],
  serviceFee: Number,
  serviceFeePerPerson: Number,
  cleaningFee: Number
});

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  username: String,
  email: String,
  favorites: [Number]
});

const Room = mongoose.model('Rooms', roomSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Room, User };

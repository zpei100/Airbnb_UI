const db = require('./db.js');
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  type: String,
  title: String,
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
  activities: [Number],
  serviceFee: Number,
  serviceFeePerPerson: Number,
  cleaningFee: Number,
  maxGuests: Number,
  location: String,
  bedrooms: Number,
  beds: Number,
  baths: Number,
  owner: String,
  ownerImage: String,
  header: String,
  details: String
});

const activitySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  type: String,
  title: String,
  price: Number,
  rating: Number,
  reviews: Number,
  imgs: [String]
})

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
const Activity = mongoose.model('Activity', activitySchema)

module.exports = { Room, User, Activity };

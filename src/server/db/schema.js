const mongoose = require('mongoose');
require('./db');

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
  imgs: [Object],
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
  imgs: [Object]
})

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  username: String,
  email: String,
  favorites: [Number],
  favoriteActivities: [Number]
});

const Room = mongoose.model('Rooms', roomSchema);
const User = mongoose.model('User', userSchema);
const Activity = mongoose.model('Activity', activitySchema)

module.exports = { Room, User, Activity };

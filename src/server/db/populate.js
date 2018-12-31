const casual = require('casual');
const dummyData = require('./dummy');
const { Room, User } = require('./schema');
const axios = require('axios');

Room.remove({}).then(() => User.remove({})).then(() => {

  const data = {
    type: ['ENTIRE CONDOMINIUM', 'ENTIRE APARTMENT', 'ENTIRE VILLA'],
    title: [
      'City Home in Historic Rocks',
      'Luxury waterfront & amazing views',
      'In The Heart of  Sydney SBD! WIFI',
      'Charming Urban Sanctuary in a Heritage Terrace',
      'Harbour Views Massive apartment',
      '2BR beachview nr Icebergs w parking',
      '143 fantastic apartment 10 minutes walk to city.',
      'Harbour Front Accommodation',
      '2BR beachview nr Icebergs w parking'
    ],
    tag: ['PLUS', 'REGULAR'],
    favorite: [true, false]
  };
  
  const random = function(len) {
    return Math.floor(Math.random() * len);
  };
  
  const randomlyPick = function(prop) {
    const len = data[prop].length;
    return data[prop][random(len)];
  };
  
  const size = 100;
  
  for (var i = 0; i < size; i++) {
    var roomData = {};
    for (var key in data) {
      roomData[key] = randomlyPick(key);
    }
  
    var related = [];
    var position = 0;
    var imgs = [];
  
    while (position < size) {
      position += random(Math.floor(size / 5)) + 1;
      if (position < size) related.push(position);
    }
  
    for (var k = 0; k < random(10) + 10; k++) {
      imgs.push(`https://picsum.photos/666/444/?${random(999999)}`);
    }
  
    new Room({
      ...roomData,
      id: i,
      beds: random(4) + 2,
      price: random(300) + 150,
      pricePerPerson: random(5) + 5,
      serviceFee: random(40) + 300,
      serviceFeePerPerson: random(5) + 5,
      cleaningFee: random(20) + 70,
      rating: Math.random() * 5,
      reviews: random(200),
      maxGuests: random(4) + 2,
      datesBooked: [],
      location: casual.city,
      bedrooms: random(2) +2,
      beds: random(5) + 2,
      baths: random(2) + 1,
      owner: casual.first_name,
      ownerImage: `https://picsum.photos/666/444/?${random(999999)}`,
      header: dummyData[random(dummyData.length)].header,
      details: dummyData[random(dummyData.length)].details,
      related,
      imgs
    }).save();
  }
  
  new User({
    id: 15,
    username: 'Adam',
    email: 'adam@gmail.com',
    favorites: [1, 5, 8, 13, 28, 29, 47]
  }).save();
})

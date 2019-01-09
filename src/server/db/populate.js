const casual = require('casual');
const dummyData = require('./dummy');
const { Room, User, Activity } = require('./schema');

const random = function(len) {
  return Math.floor(Math.random() * len);
};

const randomImageLQ = id => `https://picsum.photos/33/22/?image=${id}`
const randomImageHQ = id => `https://picsum.photos/666/444/?image=${id}`

const generateArrayOfImageSets = n => {
  let result = [];
  for (var i = 0; i < n; i++) {
    const id = random(999);
    result.push({src: randomImageLQ(id), trueSrc: randomImageHQ(id)})
  }
  return result;
}

Room.remove({})
.then(() => User.remove({}))
.then(() => Activity.remove({}))
.then(() => {

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
  
  
  const randomlyPick = function(prop) {
    const len = data[prop].length;
    return data[prop][random(len)];
  };
  
  const size = 100;
  const activitySize = size * 10;
  
  for (var i = 0; i < size; i++) {
    var roomData = {};
    for (var key in data) {
      roomData[key] = randomlyPick(key);
    }
  
    var related = [];
    var position = 0;
    
  
    while (position < size) {
      position += random(Math.floor(size / 5)) + 1;
      if (position < size) related.push(position);
    }

    position = 0;
    
    var activities = [];
    while (position < activitySize) {
      position += random(Math.floor(activitySize / 5)) + 1;
      if (position < activitySize) activities.push(position);
    }

    var imgs = generateArrayOfImageSets(random(10) + 10)
    
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
      ownerImage: `https://picsum.photos/66/44/?${random(999999)}`,
      header: dummyData.headers[random(dummyData.headers.length)],
      details: dummyData.details[random(dummyData.details.length)],
      related,
      activities,
      imgs
    }).save();
  }

  

  const activityData = {
    type: ['KAYAKING', 'SNORKELING', 'DAY TRIP', 'GUIDED HIKE', 'BAR CRAWL', 'CULTURE WALK', 'YOGA CLASS'],
    title: [
      `Harbour Kayak Adventure`, `Snorkel in Beautiful Manly`, `Hunter Valley Wine, Cheese & Kangaroos`, `Blue Mountains. Hoke, art and coffee`, `Crawl Sydney's Secret Bars`
    ],
  };

  for (var i = 0; i < activitySize; i++) {
    const randIndex = random(activityData.type.length);
    
    var imgs = generateArrayOfImageSets(random(5) + 5);

    new Activity({
      id: i,
      type: activityData.type[randIndex],
      title: activityData.title[randIndex],
      price: random(80) + 30,
      reviews: random(200) + 20,
      rating: Math.random() * 5,
      imgs
    }).save();
  }
  
  var favoriteActivities = [];
  var position = -1;

  while (position <= activitySize) {
    position += random(10) + 1;
    if (position < activitySize) favoriteActivities.push(position);
  }
  
  new User({
    id: 15,
    username: 'Adam',
    email: 'adam@gmail.com',
    favorites: [1, 5, 8, 13, 28, 29, 47, 2],
    favoriteActivities,
  }).save();
})

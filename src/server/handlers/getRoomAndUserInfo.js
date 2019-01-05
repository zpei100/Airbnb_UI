import { Room, User, Activity } from '../db/schema';

export const getRoomAndUserInfo = function(req) {
  return new Promise((resolve, reject) => {
    const userId = req.session.user ? req.session.user : 15;
    try {
      const id = parseInt(req.params.id);
      Room.findOne({ id }).then(room => {
        let relatedListings = [];
        let activitiesList = [];
        const {related, activities} = room;
        activities.forEach(id => {
          Activity.findOne({id}).then(activity => {
            activitiesList.push(activity);

            if (activitiesList.length === activities.length) {
              related.forEach((id) => {
                Room.findOne({ id }).then(relatedRoom => {
                  relatedListings.push(relatedRoom);

                  if (relatedListings.length === related.length) {
                    User.findOne({ id: userId }).then(user => {
                      resolve({room, relatedListings, activities:activitiesList, user})
                    }).catch(reject);
                  }
                }).catch(reject);
              });
            }
          })
        })
      });
    } catch(e) {reject(e)};
  })
}

export const addDates = ({datesBooked, id}) => {
  return Room.findOneAndUpdate({id}, {datesBooked}, {new:true})
}
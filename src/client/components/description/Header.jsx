import React from 'react';

export default ({title, location, ownerImage, owner}) => {

  return (
    <div className="d-flex justify-content-between">
      <div className="col-sm-10 p-0">
        <h2 id="room-title">{title}</h2>
        <div>{location}</div>
      </div>
      <div>
        <div id="profile-picture">
          <img className="h-100 w-auto" src={ownerImage} />
        </div>
        <div className="text-center">{owner}</div>
      </div>
    </div>
  )
}
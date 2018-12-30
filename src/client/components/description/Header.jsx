import React from 'react';

export default ({title, location, picture}) => {

  return (
    <div className="d-flex justify-content-between">
      <div>
        <h2 id="room-title">{title}</h2>
        <div>{location}</div>
      </div>
      <div>
        <img id="profile-picture" src={picture} />
        <div className="text-center">Owner</div>
      </div>
    </div>
  )
}
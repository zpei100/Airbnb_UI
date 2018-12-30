import React from 'react';

export default ({guests, bedrooms, beds, baths}) => {
  return (
    <React.Fragment>
      <ul
      className="d-flex p-0"
      style={{ listStyleType: 'none' }}
    >
      <li className="mr-4">
        <img src="icons/guest-icon.png"></img><span className="description-bold">{guests}</span>
      </li>
      <li className="mr-4"><img src="icons/bedroom-icon.png"></img>
        <span className="description-bold">{bedrooms}</span>
      </li>
      <li className="mr-4">
        <img src="icons/bed-icon.png"></img><span className="description-bold">{beds}</span>
      </li>
      <li className="mr-4">
        <img src="icons/bath-icon.png"></img><span className="description-bold">{baths}</span>
      </li>
    </ul>
    <ul 
      className="p-0"
      style={{ listStyleType: 'none' }}
    >
      <li className="d-flex my-3">
        <div><img src="icons/bell-icon.png"></img></div>
        <div>
          <div className="description-bold">Self check-in</div>
          <div>Check yourself in with the lockbox.</div>
        </div>
      </li>
      
      <li className="d-flex my-3">
        <div><img src="icons/key-icon.png"></img></div>
        <div>
          <div className="description-bold">Great check-in experience</div>
          <div>90% of recent guests gave this home's check-in process a 5-star rating.</div>
        </div>
      </li>

      <li className="d-flex my-3">
        <div><img src="icons/location-icon.png"></img></div>
        <div>
          <div className="description-bold">Great location</div>
          <div>90% of recent guests gave this home's location a 5-star rating</div>
        </div>
      </li>
    </ul>
    </React.Fragment>
  )
}
import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import Rating from './Rating.jsx';
import { heart } from '../../lib/svg';
import updateFavorites from "../../actionCreators/updateFavorites";

const RoomCard = ({type, tag = 'activity', title, id, beds, price, rating, reviews, imgs, favorites, favoriteActivities, handleHeart}) => {

  //this component is used by both related homes and activities near area
  const favoriteList = tag === 'activity' ? favoriteActivities : favorites;
  const favorite = (favoriteList.includes(id) ? true : false);
  const onClick = function() {
    handleHeart(id)
  }

  if (imgs) {
    const thumbNail = imgs[0];
    return (
      <div className="p-2">
        <div style={{ position: 'relative' }} className="card">
          {heart(favorite, onClick)}
          {tag === 'activity'
          ? <img style={{cursor: "pointer"}} className="m-auto w-100 h-auto card-img-top" src={thumbNail} alt=""/>
          : <a target="_self" href={`${window.location.origin}/rooms/${id}`}><img style={{cursor: "pointer"}} className="m-auto w-100 h-auto card-img-top" src={thumbNail} alt=""/></a>
          }
        </div>
  
        <div style={{cursor: "pointer"}} className="mt-2 p-0 card-body" >
          <div className="mb-0 room-type d-flex" style={{ height: '20px' }}>
            {tag === 'PLUS' ? ( 
              <span
                className="mr-1 small px-1 border rounded"
                style={{ backgroundColor: 'rgb(166, 30, 85)' }}
              >
                <span className="text-light" style={{ fontWeight: 800 }}>
                  PLUS
                </span>
              </span>
            ) : (
              ""
            )}
  
            <div className=" " style={{ fontSize: '10px', lineHeight: '20px' }}>
              <span
                style={
                  tag === 'PLUS'
                    ? { color: 'rgb(166, 29, 85)', fontWeight: 800 }
                    : { color: 'teal', fontWeight: 800 }
                }
              >
                {tag === 'PLUS' ? 'VERIFIED' : type} {tag === 'activity' ? '' : <span>&#183; {beds} BEDS</span> }
              </span>
            </div>
          </div>
          <div className="h6 m-0">
            <strong style={{ fontSize: '14px' }}>{title}</strong>
          </div>
          <div className="small">${price} per {tag === 'activity' ? 'person' : 'night'}</div>
          <div className="small">
            <Rating
              rating={rating}
              roomId={id}
              color={tag === 'PLUS' ? 'purple' : 'teal'}
            />
            <span>{reviews}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return ""
  }
}

const mapStateToProps = ({user: {favorites, favoriteActivities}}) => {

  return {
    favorites, favoriteActivities
  };
};

export default connect(mapStateToProps)(RoomCard);

 
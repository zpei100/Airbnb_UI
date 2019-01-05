import React from 'react';

import { save, share } from '../../lib/svg';

export default ({ type, updateFavorites, room: {id}, user }) => {

    const isFavorite = user.favorites.includes(id);
    const onClick = () => {updateFavorites(id)};
  
    return (
      <button className="btn btn-lg mx-2 py-1 button-text d-flex btn-light" onClick={onClick}>
        <div className="mr-2 align-self-center">
          {type === 'share' ? share : save(isFavorite)}
        </div>
        <div className="hide-text" style={{ lineHeight: '25px' }}>
          {type}
        </div>
      </button>
    );
}


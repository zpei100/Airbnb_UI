import React from 'react';

export default ({handleClick}) => {

  return (
    <button 
      id="book-button" 
      className="btn btn-danger rounded border border-light my-4 px-2 w-100"
      onClick={handleClick}
    >Book</button>
  )
}

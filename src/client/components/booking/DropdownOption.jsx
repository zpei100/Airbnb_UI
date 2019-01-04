import React from 'react';
import $ from 'jquery';

export default class DropdownOption extends React.Component {


  render() {

    const {text, handleChange, maxed, count} = this.props;

    console.log(text, handleChange, maxed)

    return (
    <div className='my-3 d-flex'>
      <div className='col-6 my-auto dropdown-option-text p-0'>{text}</div>
      <div className='col-6 d-flex justify-content-between'>
        <button 
          className='btn btn-outline-info btn-circle my-auto' 
          onClick={() => handleChange(-1)}
          disabled={count === 0}
        >-</button>
        <span className='my-2'>{count}</span>
        <button 
          className='btn btn-outline-info btn-circle my-auto' 
          onClick={() => handleChange(1)}
          disabled={maxed}
          >+</button>
      </div>
    </div>
    )
  }
}
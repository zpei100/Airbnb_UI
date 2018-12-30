import React from 'react';
import $ from 'jquery';

export default class DropdownOption extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: props.count || 0
    }
  };

  handleChange = change => {
    this.setState({
      count: this.state.count + change
    }, () => {
      this.props.handleChange(change);
    })
  };

  render() {

    const {text, handleChange, maxed} = this.props;

    return (
    <div className='my-3 d-flex'>
      <div className='col-6 my-auto dropdown-option-text p-0'>{text}</div>
      <div className='col-6 d-flex justify-content-between'>
        <button 
          className='btn btn-outline-info btn-circle my-auto' 
          onClick={() => this.handleChange(-1)}
          disabled={this.state.count === this.props.count || this.state.count === 0}
        >-</button>
        <span className='my-2'>{this.state.count}</span>
        <button 
          className='btn btn-outline-info btn-circle my-auto' 
          onClick={() => this.handleChange(1)}
          disabled={maxed}
          >+</button>
      </div>
    </div>
    )
  }
}
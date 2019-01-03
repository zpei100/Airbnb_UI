import React from 'react';
import $ from 'jquery';

export default class Summary extends React.Component {
  
  constructor() {
    super();

    this.state = {
      toggled: false
    }
  }

  toggleDetails = () => { 
    this.setState({toggled: !this.state.toggled});
  }

  render () {
    const {header, details} = this.props;

    return (
      <div>
        <p style={{whiteSpace: 'pre-wrap'}}>{header}</p>
        <div>
          <a href="javascript:void(0) dropdown-toggle" className="text-info" onClick={this.toggleDetails}>Read more about the space</a>
          <img className="ml-2" src="icons/down-arrow.png"></img>
        </div>
        {this.state.toggled ? 
        <React.Fragment>
          <div className="w-100 border-0 mt-4" id="details-dropdown" style={{whiteSpace: 'pre-wrap'}}>{details}</div>
          <div className="mt-4">
            <a href="javascript:void(0) dropdown-toggle" className="text-info" onClick={this.toggleDetails}>Hide</a>
            <img className="ml-2" src="icons/up-arrow.png"></img>
          </div>
        </React.Fragment>
        
        : ''}

      </div>
    )
  }
}
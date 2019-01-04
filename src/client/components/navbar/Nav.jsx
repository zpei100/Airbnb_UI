import React from 'react';
import { logo } from '../../lib/svg';
import Responsive from 'react-responsive';
import $ from 'jquery';
import DropdownNav from './DropdownNav.jsx';

export default class Nav extends React.Component {

  constructor() {
    super();

    this.state = {
      dropdownToggled: false
    }
  }

  toggleDropdown = matches => {
    if (!matches || this.state.dropdownToggled) {
      const { dropdownToggled } = this.state;
      this.setState({dropdownToggled: !dropdownToggled}, () => {
        const rotation = dropdownToggled ? 0 : 180;
        $('#navbar-toggle-icon img').css({'transform': `rotate(${rotation}deg)`, 'transition-duration' : '0.3s'});
        $('body').css('overflow', dropdownToggled ? 'scroll' : 'hidden');
        $('#navbar-dropdown').slideToggle(300);
      })
    }
  }

  render () {
    return (
      <Responsive minWidth={1200} values={{width: 1600}}>
        {matches => {
          return (
            <div className="dropdown">
              <div className="navbar d-flex">
                <div className="d-flex mr-auto h-100 search-bar">
                  <div className="my-auto" onClick={() => this.toggleDropdown(matches)}>
                    <span style={{cursor: !matches || this.state.dropdownToggled ? 'pointer' : 'default'}}>{logo}</span>
                    {!matches || this.state.dropdownToggled ? <span id="navbar-toggle-icon" className="ml-1 dropdown-toggle"><img style={{height: '10px', width: '10px'}} src="icons/down-arrow.png"></img></span> : ''}
                  </div>
                  <form className="form-inline my-2 col-10">
                    <input
                      className="form-control ml-2 h-100 w-100"
                      id="search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
      
                {matches ? <div>
                  <ul className="d-flex my-auto" id="navbar-content">
                    {['Become a host', 'Help', 'Sign up', 'Log in'].map(key => (
                      <li className="nav-item mx-3" key={key}>
                        <a className="nav-text" href="#">
                          {key}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> : ''}
              
              </div>

              <div id="navbar-dropdown" className="pl-4 dropdown-menu rounded-0 mt-0 w-100 border-0" style={{height: '100vh'}}>
                <DropdownNav />
              </div>
            </div>
          )
        }}
      </Responsive>
    )
  }
};
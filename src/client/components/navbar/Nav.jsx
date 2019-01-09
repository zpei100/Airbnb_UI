import React from 'react';
import { logo } from '../../lib/svg';
import Responsive from 'react-responsive';
import $ from 'jquery';
import Loadable from 'react-loadable';

export default class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      dropdownToggled: false,
      dropdownAnimationTime: 300,
      LoadableDropdown: null
    }
  };

  toggleDropdown = matches => {
    this.setState({LoadableDropdown: Loadable({
      loader: () => import(/* Navbar-dropdown */ './DropdownNav.jsx'),
      loading: () => <div className="loader" style={{height: '30px', width: '30px'}}></div>
    })}, () => {
      const { dropdownToggled, dropdownAnimationTime } = this.state;
      if (!matches || dropdownToggled) {
        this.setState({dropdownToggled: !dropdownToggled}, () => {
          const rotation = dropdownToggled ? 0 : 180;
          $('#navbar-toggle-icon img').css({'transform': `rotate(${rotation}deg)`, 'transition-duration' : '0.3s'});
          $('body').css('overflow', dropdownToggled ? 'scroll' : 'hidden');
          $('#navbar-dropdown').slideToggle(dropdownAnimationTime);
        })
      }
    })
  };

  render () {
    const {LoadableDropdown} = this.state
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
                  <ul style={{display: 'flex', margin: 'auto', listStyle: 'none'}}>
                    {['Become a host', 'Help', 'Sign up', 'Log in'].map(key => (
                      <li className="mx-3" key={key}>
                        <a style={{color: 'grey', fontWeight: 600}} href="#">
                          {key}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> : ''}
              
              </div>
                {LoadableDropdown ? 
                  <div 
                    id="navbar-dropdown" 
                    className="pl-4 dropdown-menu rounded-0 mt-0 w-100 border-0" 
                    style={{height: '100vh'}}
                  >
                    <LoadableDropdown />
                  </div> : ''}
            </div>
          )
        }}
      </Responsive>
    )
  }
};
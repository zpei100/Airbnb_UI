import React, { Component } from 'react';
import { logo } from '../../lib/svg';
import Responsive from 'react-responsive';

class Nav extends Component {
  render() {
    return (
      <Responsive minWidth={1200}>
        {matches => {
          if (!matches) return ''
          else return (
            <div className="navbar d-flex">
              <div className="d-flex mr-auto search-bar">
                <div className="my-auto">
                  <span>{logo}</span>
                </div>
                <form className="form-inline my-2 col-10">
                  <input
                    className="form-control ml-2 shadow-lg w-100"
                    id="search-bar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>

              <div>
                <ul className="d-flex my-auto" id="navbar-content">
                  {['Become a host', 'Help', 'Sign up', 'Log in'].map(key => (
                    <li className="nav-item mx-3" key={key}>
                      <a className="nav-text" href="#">
                        {key}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            
            </div>
          )
        }}
      </Responsive>
    );
  }
}

export default Nav;

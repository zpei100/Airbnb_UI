import React, { Component } from 'react';
import DropdownOption from './DropdownOption.jsx';
import $ from 'jquery';

//without this variable, this component will re-mount when screen width changes, causing the on click listner to be repeatedly attached.

export default class GuestsDropDown extends Component {

  constructor() {
    super();
    this.state = {
      toggled: false,
    }
  }

  componentDidMount = () => {
    $('html').off('click');
    $('html').on('click', e => {
      if (e.target.id === 'dropdown-button' || e.target.id === 'dropdown-close' || $(e.target).parents('#dropdown-button').length) {
        $('#dropdown-menu').slideToggle(0);
        return this.setState({toggled: !this.state.toggled});
      }
      if (e.target.id === 'dropdown-menu' || $(e.target).parents('#dropdown-menu').length) return;
      if (this.state.toggled) {
        $('#dropdown-menu').slideToggle(0);
        this.setState({toggled: false});
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.toggled && prevState.toggled) {
      $('#guest-text').removeClass('active');
      $('#infant-text').removeClass('active');
    }
  }

  render() {
    const {guest, adult, children, infant, maxGuests, addAdult, addChildren, addInfant, wordString} = this.props;
    return (
      <React.Fragment>
      <div className="mt-3 calender-labels">Guests</div>
      <div className="dropdown" id="guest-dropdown">
        <button 
          className="btn dropdown-toggle text-left w-100 btn-drop-down px-3 d-flex"
          id="dropdown-button">
            <div id="guest-text" className="btn rounded px-0">{guest} {wordString('guest')}</div>
            {infant ? 
            <React.Fragment>
              <div className="btn px-0 mx-0">,</div>
              <div id="infant-text" className="btn rounded px-0 ml-1">{infant} {wordString('infant')}</div> 
            </React.Fragment>
            : ''}
        </button>
        <div className="dropdown-menu w-100 px-3 rounded" id="dropdown-menu">
          <DropdownOption text="Adult" handleChange={addAdult} count={adult} maxed={adult + children >= maxGuests} />
          <DropdownOption text="Children" handleChange={addChildren} count={children} maxed={adult + children>= maxGuests} />
          <DropdownOption text="Infants" handleChange={addInfant} count={infant} />
          <p className="mt-2">{maxGuests} guests maximum. Infants don't count toward the number of guests</p>
          <a id="dropdown-close">Close</a>
        </div>
      </div>
      </React.Fragment>
    );
  }
}